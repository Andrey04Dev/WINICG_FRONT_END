import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { ValidationUser } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'

const FormUserUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationUser)})

    const handleAddRisks = (data) =>{
        console.log(data)
    }
  return (
    <Form
    buttonLabel='Agregar el riesgo'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar el riesgo"}
    onSubmit={handleAddRisks}
    >
        <Select error={errors.idRole?.message} defaultValue={""} options={["Interna","Externa"]} name={"idRole"}  label={"Selecione el role"}></Select>
        <Input error={errors.id?.message} defaultValue={""} type={"text"} name={"id"}label={"Escriba la cédula del usuario"} placeholder={"Escriba la cédula del usuario"}/>
        <Input error={errors.email?.message} defaultValue={""} type={"email"} name={"email"}label={"Digite el email"} placeholder={"Digite el email"}/>
    </Form>
  )
}

export default FormUserUpdate