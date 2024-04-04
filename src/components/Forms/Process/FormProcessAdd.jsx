import { yupResolver } from '@hookform/resolvers/yup'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from '../../FormFields/Form'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import { ValidationProcess } from '../../Validation/ValidationForms'
import { useDispatch, useSelector } from 'react-redux'
import { AddProcess, GetAllProcess } from '../../../redux/processSlice'
import { GetAllIsoRules } from '../../../redux/isoRuleSlice'
import { Modal } from '../../common/Modal'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'
import SelectPersonal from '../../FormFields/SelectPersonal'
import { GetAllUser } from '../../../redux/userSlice'
import { GetAllPositions } from '../../../redux/positionSlice'

const FormProcessAdd = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationProcess)})
    const {isoRules} = useSelector(state=> state.isoRule)
    const {user} = useSelector(state=> state.users)
    const {Positions} = useSelector(state=> state.position)
    const {loading,message, success} = useSelector(state=> state.process)
    const dispatch =  useDispatch()
    const [showModalProcess, setShowModalProcess] = useState(false)

    const handleAddProcess = (data) =>{
      dispatch(AddProcess(data))
      setShowModalProcess(true)
        console.log(data)
    }
    const initialstate =  useCallback(()=>{
      dispatch(GetAllIsoRules())
      dispatch(GetAllUser())
      dispatch(GetAllPositions())
    }, [dispatch])
    //Obteniendo las normas ISO
    const reloadProcess = () =>{
      dispatch(GetAllProcess())
    }
    //Cerrando el modal
    const handleOnCloseModalRule = () => {
      setShowModalProcess(false)
    }
    useEffect(() => {
      initialstate()
      return () => {
      }
    }, [initialstate])
  return (
    <Fragment>
      <Form 
    buttonLabel='Agregar el proceso'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar el proceso"}
    onSubmit={handleAddProcess}
    >
        <Select error={errors.idRule?.message} options={isoRules} name={"idRule"}  label={"Selecione la norma ISO"}></Select>
        <Input error={errors.processname?.message} type={"text"} name={"processname"}label={"Escriba el título del proceso"} placeholder={"Escriba el título del proceso"}/>
        <SelectPersonal error={errors.charge_Person?.message} options={user} name={"charge_Person"}  label={"Selecione la persona encargada"}></SelectPersonal>
        <Select error={errors.role_Involves?.message} name={"role_Involves"}  label={"Selecione el rol implicado"} options={Positions}></Select>
    </Form>
    <Modal
    size={"modal-dialog-centered"}
    title="Agregar Process"
    showModal={showModalProcess}
    onClose={handleOnCloseModalRule}
    children={loading? <Spinner/>: <p className="text-center">{message}</p>}
    footer={
      success && success ? (
        <ButtonLink
          name={"OK!"}
          onClick={reloadProcess}
          className="btn btn-success"
          to={"/process"}
        />
      ) : (
        <ButtonLink
          className="btn btn-danger"
          name={"Error"}
          to={"/process/addProcess"}
        />
      )
    }
  />
    </Fragment>
  )
}

export default FormProcessAdd