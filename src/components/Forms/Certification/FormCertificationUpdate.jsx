import { yupResolver } from '@hookform/resolvers/yup'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ValidationCertification } from '../../Validation/ValidationForms'
import Input from '../../FormFields/Input'
import Form from '../../FormFields/Form'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCertification, GetCertificationById, UpdateCertification  } from '../../../redux/certificationSlice'
import { Modal } from '../../common/Modal'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'
import { AddHistorial } from '../../../redux/historialSlice'

const FormCertificationUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationCertification)})
    const {loading, message,success} = useSelector(state=> state.certification)
    const dispatch =  useDispatch()
    const [showModalRule, setShowModalRule] = useState(false)
    const [GetCertification, setGetCertification] = useState()
    const {id} =  useParams()
    const userLogin = JSON.parse(sessionStorage.getItem("userLogin") || "") 

    const handleUpdateCertification = (data) =>{
      data.idcertification =  id
        dispatch(UpdateCertification(data))
        const dataHistory = {idmodule:id,personchange:userLogin.name}
    dispatch(AddHistorial(dataHistory))
        setShowModalRule(true)
        console.log(data)
    }

    const initialstate =  useCallback(()=>{
      dispatch(GetCertificationById(id)).unwrap().then(res=> setGetCertification(res))
    }, [dispatch,id])
    //Obteniendo las normas ISO
    const reloadIsoRule = () =>{
      dispatch(GetAllCertification())
    }
    //Cerrando el modal
    const handleOnCloseModalRule = () => {
      setShowModalRule(false)
    }
    useEffect(() => {
      initialstate()
      return () => {
      }
    }, [initialstate])
  return (
    <Fragment>
      <Form
    buttonLabel='Agregar Rol'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar la certificación"}
    onSubmit={handleUpdateCertification}
    >
      <Input  defaultValue={id || ""} type={"text"} name={"idcertification"}label={"ID de la certificacion"} placeholder={"ID de la certificación"} disabled={true} readOnly={true}/>
        <Input error={errors.certification_name?.message} defaultValue={GetCertification?.certificatioN_NAME || ""} type={"text"} name={"certification_name"}label={"Nombre de la certificacion"} placeholder={"Nombre de la certificación"}/>
        <Input error={errors.certificacion_date?.message} defaultValue={GetCertification?.certificacioN_DATE || ""} type={"date"} name={"certificacion_date"}label={"Fecha de la certificación"} placeholder={"Fecha de la certificación"}/>
    </Form>
    <Modal
    size={"modal-dialog-centered"}
    title="Actualizar certificación"
    showModal={showModalRule}
    onClose={handleOnCloseModalRule}
    children={loading? <Spinner/>: <p className="text-center">{message}</p>}
    footer={
      success && success ? (
        <ButtonLink
          name={"OK!"}
          onClick={reloadIsoRule}
          className="btn btn-success"
          to={"/certification"}
        />
      ) : (
        <ButtonLink
          className="btn btn-danger"
          name={"Error"}
          to={"/certification/updateCertification"}
        />
      )
    }
  />
    </Fragment>
  )
}

export default FormCertificationUpdate