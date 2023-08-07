import React from 'react'
import Form from '../../FormFields/Form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../../FormFields/Input'
import { ValidationCertification } from '../../Validation/ValidationForms'

const FormCertificationAdd = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationCertification)})
    
    const handleAddCertification = (data) =>{
        console.log(data)
    }
  return (
    <Form
    buttonLabel='Agregar Rol'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar la certificación"}
    onSubmit={handleAddCertification}
    >
        <Input error={errors.certificationName?.message} type={"text"} name={"certificationName"}label={"Nombre de la certificacion"} placeholder={"Nombre de la certificación"}/>
        <Input error={errors.certificationDate?.message} type={"date"} name={"certificationDate"}label={"Fecha de la certificación"} placeholder={"Fecha de la certificación"}/>
    </Form>
  )
}

export default FormCertificationAdd