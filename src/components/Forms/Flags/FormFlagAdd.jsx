import React from 'react'
import { useForm } from 'react-hook-form'
import Form from '../../FormFields/Form'
import { yupResolver } from '@hookform/resolvers/yup'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import { ValidationFlag } from '../../Validation/ValidationForms'

const FormFlagAdd = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationFlag)})

    const handleAddFlag = (data) =>{
        console.log(data)
    }
  return (
    <Form
    buttonLabel='Agregar Indicador'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar indicadores"}
    onSubmit={handleAddFlag}
    >
        <Select error={errors.idIsoRule?.message} options={["Interna","Externa"]} name={"idIsoRule"}  label={"Seleccione la Norma ISO"}></Select>
        <Input error={errors.flagName?.message} type={"text"} name={"flagName"}label={"Nombre del indicador"} placeholder={"Nombre del indicador"}/>
    </Form>
  )
}

export default FormFlagAdd