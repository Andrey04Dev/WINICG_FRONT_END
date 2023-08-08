import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import {useForm } from 'react-hook-form'
import { ValidationRisk } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import Form from '../../FormFields/Form'

const FormRisksUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationRisk)})

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
        <Select error={errors.idRule?.message} defaultValue={""} options={["Interna","Externa"]} name={"idRule"}  label={"Selecione la norma ISO"}></Select>
        <Input error={errors.nameRisks?.message} defaultValue={""} type={"text"} name={"nameRisks"}label={"Escriba el riesgo"} placeholder={"Escriba el riesgo"}/>
        <Input error={errors.consequense?.message} defaultValue={""} type={"text"} name={"consequense"}label={"Digite la consecuencia"} placeholder={"Digite la consecuencia"}/>
        <Input error={errors.sourceRisk?.message} defaultValue={""} type={"text"} name={"sourceRisk"}label={"Escriba la fuente del riesgo"} placeholder={"Escriba la fuente del riesgo"}/>
    </Form>
  )
}

export default FormRisksUpdate