import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { ValidationCompanyPosition } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'

const FormCompanyPositionUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationCompanyPosition)})

    const handleUpdateCompanyPosition = (data) =>{
        console.log(data)
    }
  return (
    <Form
    buttonLabel='Agregar Rol'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar position dela compañia"}
    onSubmit={handleUpdateCompanyPosition}
    >
        <Select error={errors.idUser?.message} defaultValue={""} options={["Interna","Externa"]} name={"idUser"}  label={"Seleccione el usuario"}></Select>
        <Select error={errors.idProcess?.message} defaultValue={""} options={["Interna","Externa"]} name={"idProces"}  label={"Seleccione el proceso"}></Select>
        <Select error={errors.mandated?.message} defaultValue={""} options={["Interna","Externa"]} name={"mandated"}  label={"Seleccione el acesor"}></Select>
        <Input error={errors.description?.message}defaultValue={""} type={"text"} name={"description"}label={"Descripcion del puesto"} placeholder={"Descripción del puesto"}/>
        <Input error={errors.responsability?.message} defaultValue={""} type={"text"} name={"responsability"}label={"Responsabilidades del puesto"} placeholder={"Responsabilidades del puesto"}/>
        <Input error={errors.profilePosition?.message} defaultValue={""} type={"text"} name={"profilePosition"}label={"Perfil de usuario"} placeholder={"Perfil del usuario"}/>
    </Form>
  )
}

export default FormCompanyPositionUpdate