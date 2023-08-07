import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { ValidationCertification } from '../../Validation/ValidationForms'
import Input from '../../FormFields/Input'

const FormCertificationUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationCertification)})
    
    const handleUpdateCertification = (data) =>{
        console.log(data)
    }
  return (
    <Form
    buttonLabel='Agregar Rol'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar la certificación"}
    onSubmit={handleUpdateCertification}
    >
        <Input error={errors.certificationName?.message} defaultValue={""} type={"text"} name={"certificationName"}label={"Nombre de la certificacion"} placeholder={"Nombre de la certificación"}/>
        <Input error={errors.certificationDate?.message} defaultValue={""} type={"date"} name={"certificationDate"}label={"Fecha de la certificación"} placeholder={"Fecha de la certificación"}/>
    </Form>
  )
}

export default FormCertificationUpdate