import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { ValidationTasks } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import Form from '../../FormFields/Form'

const FormTaskUpdate = () => {
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
        <Select error={errors.idRule?.message}  defaultValue={""} options={["Interna","Externa"]} name={"idRule"}  label={"Selecione la norma ISO"}></Select>
        <Select error={errors.idUser?.message}  defaultValue={""} options={["Interna","Externa"]} name={"idUser"}  label={"Selecione el usuario asignado"}></Select>
        <Select error={errors.idFlag?.message}  defaultValue={""} options={["Interna","Externa"]} name={"idFlag"}  label={"Selecione el indicador"}></Select>
        <Input error={errors.project?.message}  defaultValue={""} type={"text"} name={"project"}label={"Escriba el nombre del proyecto"} placeholder={"Escriba el nombre del proyecto"}/>
        <Input error={errors.eventTask?.message} defaultValue={""}  type={"text"} name={"eventTask"}label={"Escriba el evento de la tarea"} placeholder={"Escriba el evento de la tarea"}/>
    </Form>
  )
}

export default FormTaskUpdate