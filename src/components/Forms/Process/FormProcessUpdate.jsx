import { yupResolver } from '@hookform/resolvers/yup'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ValidationProcess } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import Form from '../../FormFields/Form'
import SelectPersonal from '../../FormFields/SelectPersonal'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllIsoRules } from '../../../redux/isoRuleSlice'
import { GetAllUser } from '../../../redux/userSlice'
import { GetAllProcess, GetProcessById, UpdateProcess } from '../../../redux/processSlice'
import { useParams } from 'react-router-dom'
import { Modal } from '../../common/Modal'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'
import { GetAllPositions } from '../../../redux/positionSlice'
import { AddHistorial } from '../../../redux/historialSlice'

const FormProcessUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationProcess)})
    const {isoRules} = useSelector(state=> state.isoRule)
    const {user} = useSelector(state=> state.users)
    const {loading,message, success} = useSelector(state=> state.process)
    const {Positions} = useSelector(state=> state.position)
    const dispatch =  useDispatch()
    const {id} =  useParams()
    const [GetProcessSelected, setGetProcessSelected] = useState()
     const userLogin = JSON.parse(sessionStorage.getItem("userLogin") || "") 
     const [setshowModalProcess, setSetshowModalProcess] = useState(false)

    const handleAddProcess = (data) =>{
      data.idprocess = id
      dispatch(UpdateProcess(data))
      const dataHistory = {idmodule:id,personchange:userLogin.name}
    dispatch(AddHistorial(dataHistory))
      setSetshowModalProcess(true)
        console.log(data)
    }
    const initialstate =  useCallback(()=>{
      dispatch(GetAllIsoRules())
      dispatch(GetAllUser())
      dispatch(GetAllPositions())
      dispatch(GetProcessById(id)).unwrap().then(res=> setGetProcessSelected(res))
    }, [dispatch,id])
    //Obteniendo las normas ISO
    const reloadProcess= () =>{
      dispatch(GetAllProcess())
    }
    //Cerrando el modal
    const handleOnCloseModalProcess = () => {
      setSetshowModalProcess(false)
    }
    useEffect(() => {
      initialstate()
      return () => {
      }
    }, [initialstate])
  return (
    <Fragment>
      <Form 
    buttonLabel='Actualizar el proceso'
    register={register}
    handleSubmit={handleSubmit}
    title={"Actualizar el proceso"}
    onSubmit={handleAddProcess}
    >
        <Input type={"text"} defaultValue={id || ""} name={"idprocess"}label={"ID del proceso"} placeholder={"ID del proceso"} disabled={true} readOnly={true}/>
        <Select error={errors.idRule?.message} options={isoRules} name={"idRule"}  label={"Selecione la norma ISO"}></Select>
        <Input error={errors.processname?.message} defaultValue={GetProcessSelected?.processname || ""} type={"text"} name={"processname"}label={"Escriba el título del proceso"} placeholder={"Escriba el título del proceso"}/>
        <SelectPersonal error={errors.charge_Person?.message} options={user} name={"charge_Person"}  label={"Selecione la persona encargada"}></SelectPersonal>
        <Select error={errors.role_Involves?.message} name={"role_Involves"}  label={"Selecione el rol implicado"} options={Positions}></Select>
    </Form>
    <Modal
        size={"modal-dialog-centered"}
        title="Actualizar proceso"
        showModal={setshowModalProcess}
        onClose={handleOnCloseModalProcess}
        children={loading ? <Spinner /> : <p className="text-center">{message}</p>}
        footer={success && success ? (
          <ButtonLink
            name={"OK!"}
            onClick={reloadProcess}
            className="btn btn-success"
            to={"/process"} />
        ) : (
          <ButtonLink
            className="btn btn-danger"
            name={"Error"}
            to={"/process/updateProcess"} />
        )} />
    </Fragment>
  )
}

export default FormProcessUpdate