import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { ValidationProcess } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'

const FormProcessUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationProcess)})

    const handleAddProcess = (data) =>{
        console.log(data)
    }
  return (
    <Form 
    buttonLabel='Agregar el proceso'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar el proceso"}
    onSubmit={handleAddProcess}
    >
        <Select error={errors.idRule?.message} options={["Interna","Externa"]} name={"idRule"}  label={"Selecione la norma ISO"}></Select>
        <Input error={errors.codeProcess?.message} type={"text"} name={"codeProcess"}label={"Escriba el código del proceso"} placeholder={"Escriba el código del proceso"}/>
        <Select error={errors.chargePerson?.message} options={["Interna","Externa"]} name={"chargePerson"}  label={"Selecione la persona encargada"}></Select>
        <Select error={errors.rolesInvolves?.message} options={["Interna","Externa"]} name={"rolesInvolves"}  label={"Selecione el rol implicado"}></Select>
    </Form>
  )
}

export default FormProcessUpdate