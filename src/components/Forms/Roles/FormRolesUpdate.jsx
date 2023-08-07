import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { ValidationRole } from '../../Validation/ValidationForms'
import Input from '../../FormFields/Input'

const FormRolesUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationRole)})

    const handleAddRisks = (data) =>{
        console.log(data)
    }
  return (
    <Form
    buttonLabel='Agregar roles'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar roles"}
    onSubmit={handleAddRisks}
    >
        <Input error={errors.role?.message} type={"text"} name={"role"}label={"Escriba el role"} placeholder={"Escriba el role"}/>
    </Form>
  )
}

export default FormRolesUpdate