import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import { ValidationRisk } from '../../Validation/ValidationForms'

const FormRisksAdd = () => {
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
        <Select error={errors.idRule?.message} options={["Interna","Externa"]} name={"idRule"}  label={"Selecione la norma ISO"}></Select>
        <Input error={errors.nameRisks?.message} type={"text"} name={"nameRisks"}label={"Escriba el riesgo"} placeholder={"Escriba el riesgo"}/>
        <Input error={errors.consequense?.message} type={"text"} name={"consequense"}label={"Digite la consecuencia"} placeholder={"Digite la consecuencia"}/>
        <Input error={errors.sourceRisk?.message} type={"text"} name={"sourceRisk"}label={"Escriba la fuente del riesgo"} placeholder={"Escriba la fuente del riesgo"}/>
    </Form>
  )
}

export default FormRisksAdd