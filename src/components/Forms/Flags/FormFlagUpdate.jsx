import { yupResolver } from '@hookform/resolvers/yup'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ValidationFlag } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import Form from '../../FormFields/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetAllIsoRules } from '../../../redux/isoRuleSlice'
import { GetAllFlags, GetFlagsById, UpdateFlags } from '../../../redux/flagSlice'
import Spinner from '../../common/Spinner'
import { Modal } from '../../common/Modal'
import { ButtonLink } from '../../common/Button'

const FormFlagUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationFlag)})
    const {isoRules} = useSelector(state=> state.isoRule)
    const {loading,message, success} = useSelector(state=> state.flag)
    const dispatch =  useDispatch()
    const [showModalFlag, setShowModalFlag] = useState(false)
    const [GetIsoFlag, setGetIsoFlag] = useState()
    const {id} =  useParams()
    const handleUpdateFlag = (data) =>{
      data.idflags = id
      dispatch(UpdateFlags(data))
      setShowModalFlag(true)
        console.log(data)
    }

    const initialstate =  useCallback(()=>{
      dispatch(GetAllIsoRules())
      dispatch(GetFlagsById(id)).unwrap().then(res=> setGetIsoFlag(res))
    }, [dispatch,id])
    //Obteniendo las normas ISO
    const reloadFlag = () =>{
      dispatch(GetAllFlags())
    }
    //Cerrando el modal
    const handleOnCloseModalFlag = () => {
      setShowModalFlag(false)
    }
    useEffect(() => {
      initialstate()
      return () => {
      }
    }, [initialstate])
  return (
    <Fragment>
      <Form
    buttonLabel='Actualizar Indicador'
    register={register}
    handleSubmit={handleSubmit}
    title={"Actualizar indicadores"}
    onSubmit={handleUpdateFlag}
    >
      <Input  defaultValue={id || ""} type={"text"} name={"idflags"}label={"ID del indicador"} placeholder={"ID del indicador"}/>
        <Select error={errors.idrule?.message}  options={isoRules} name={"idrule"}  label={"Seleccione la Norma ISO"}></Select>
        <Input error={errors.flagName?.message} defaultValue={GetIsoFlag?.flagname || ""} type={"text"} name={"flagName"}label={"Nombre del indicador"} placeholder={"Nombre del indicador"}/>
    </Form>
    <Modal
    size={"modal-dialog-centered"}
    title="Agregar indicador"
    showModal={showModalFlag}
    onClose={handleOnCloseModalFlag}
    children={loading? <Spinner/>: <p className="text-center">{message}</p>}
    footer={
      success && success ? (
        <ButtonLink
          name={"OK!"}
          onClick={reloadFlag}
          className="btn btn-success"
          to={"/flag"}
        />
      ) : (
        <ButtonLink
          className="btn btn-danger"
          name={"Error"}
          to={"/flag/updateFlag"}
        />
      )
    }
  />
    </Fragment>
  )
}

export default FormFlagUpdate