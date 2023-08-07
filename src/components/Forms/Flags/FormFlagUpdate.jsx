import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { ValidationFlag } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'

const FormFlagUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationFlag)})

    const handleUpdateFlag = (data) =>{
        console.log(data)
    }
  return (
    <Form
    buttonLabel='Agregar Indicador'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar indicadores"}
    onSubmit={handleUpdateFlag}
    >
        <Select error={errors.idIsoRule?.message} defaultValue={""} options={["Interna","Externa"]} name={"idIsoRule"}  label={"Seleccione la Norma ISO"}></Select>
        <Input error={errors.flagName?.message} defaultValue={""} type={"text"} name={"flagName"}label={"Nombre del indicador"} placeholder={"Nombre del indicador"}/>
    </Form>
  )
}

export default FormFlagUpdate