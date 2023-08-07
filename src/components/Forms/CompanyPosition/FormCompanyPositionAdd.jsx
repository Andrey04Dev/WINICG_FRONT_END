import React from 'react'
import Form from '../../FormFields/Form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ValidationCompanyPosition } from '../../Validation/ValidationForms'
import Input from '../../FormFields/Input'
import Select from '../../FormFields/Select'

const FormCompanyPositionAdd = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationCompanyPosition)})

    const handleAddCompanyPosition = (data) =>{
        console.log(data)
    }
  return (
    <Form
    buttonLabel='Agregar Rol'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar position dela compañia"}
    onSubmit={handleAddCompanyPosition}
    >
        <Select error={errors.idUser?.message} options={["Interna","Externa"]} name={"idUser"}  label={"Seleccione el usuario"}></Select>
        <Select error={errors.idProcess?.message} options={["Interna","Externa"]} name={"idProces"}  label={"Seleccione el proceso"}></Select>
        <Select error={errors.mandated?.message} options={["Interna","Externa"]} name={"mandated"}  label={"Seleccione el acesor"}></Select>
        <Input error={errors.description?.message} type={"text"} name={"description"}label={"Descripcion del puesto"} placeholder={"Descripción del puesto"}/>
        <Input error={errors.responsability?.message} type={"text"} name={"responsability"}label={"Responsabilidades del puesto"} placeholder={"Responsabilidades del puesto"}/>
        <Input error={errors.profilePosition?.message} type={"text"} name={"profilePosition"}label={"Perfil de usuario"} placeholder={"Perfil del usuario"}/>
    </Form>
  )
}

export default FormCompanyPositionAdd