import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { ValidationTasks } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'

const FormTaskAdd = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationTasks)})

    const handleAddTask = (data) =>{
        console.log(data)
    }
  return (
    <Form
    buttonLabel='Asignar tarea'
    register={register}
    handleSubmit={handleSubmit}
    title={"Asignar tarea"}
    onSubmit={handleAddTask}
    >
        <Select error={errors.idRule?.message} options={["Interna","Externa"]} name={"idRule"}  label={"Selecione la norma ISO"}></Select>
        <Select error={errors.idUser?.message} options={["Interna","Externa"]} name={"idUser"}  label={"Selecione el usuario asignado"}></Select>
        <Select error={errors.idFlag?.message} options={["Interna","Externa"]} name={"idFlag"}  label={"Selecione el indicador"}></Select>
        <Input error={errors.project?.message} type={"text"} name={"project"}label={"Escriba el nombre del proyecto"} placeholder={"Escriba el nombre del proyecto"}/>
        <Input error={errors.eventTask?.message} type={"text"} name={"eventTask"}label={"Escriba el evento de la tarea"} placeholder={"Escriba el evento de la tarea"}/>
    </Form>
  )
}

export default FormTaskAdd