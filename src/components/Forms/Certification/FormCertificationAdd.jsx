import React, { Fragment, useState } from 'react'
import Form from '../../FormFields/Form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../../FormFields/Input'
import { ValidationCertification } from '../../Validation/ValidationForms'
import { useDispatch, useSelector } from 'react-redux'
import { AddCertification, GetAllCertification } from '../../../redux/certificationSlice'
import { Modal } from '../../common/Modal'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'

const FormCertificationAdd = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationCertification)})
    const {loading,message, success} = useSelector(state=> state.certification)
    const dispatch =  useDispatch()
    const [showModalCertification, setShowModalCertification] = useState(false)
    
    const handleAddCertification = (data) =>{
      dispatch(AddCertification(data))
      setShowModalCertification(true)
        console.log(data)
    }
    const reloadIsoRule = () =>{
      dispatch(GetAllCertification())
    }
    //Cerrando el modal
    const handleOnCloseModalRule = () => {
      setShowModalCertification(false)
    }
  return (
    <Fragment>
      <Form
    buttonLabel='Agregar certificación'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar la certificación"}
    onSubmit={handleAddCertification}
    >
        <Input error={errors.certification_name?.message} type={"text"} name={"certification_name"}label={"Nombre de la certificacion"} placeholder={"Nombre de la certificación"}/>
        <Input error={errors.certificacion_date?.message} type={"date"} name={"certificacion_date"}label={"Fecha de la certificación"} placeholder={"Fecha de la certificación"}/>
    </Form>
    <Modal
    size={"modal-dialog-centered"}
    title="Agregar certificación"
    showModal={showModalCertification}
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
          to={"/certification/addCertification"}
        />
      )
    }
  />
    </Fragment>
  )
}

export default FormCertificationAdd