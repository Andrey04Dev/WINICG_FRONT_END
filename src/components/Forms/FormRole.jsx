import React from 'react'
import Form from '../FormFields/Form'
import Input from '../FormFields/Input'
import Select from '../FormFields/Select'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ValidationRoles } from '../Validation/ValidationForms'

const FormRole = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationRoles)})


    const handleAddRole = (data) =>{
        console.log(data)
    }
  return (
    <Form 
    buttonLabel='Agregar Rol'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar rol"}
    onSubmit={handleAddRole}
    >
        <Input error={errors.auditName?.message} type={"text"} name={"auditName"}label={"Nombre del auditor"} placeholder={"Nombre del auditor"}/>
        <Input error={errors.auditDate?.message} type={"date"} name={"auditDate"}label={"Fecha de la auditoria"} placeholder={"Fecha de la auditoria"}/>
        <Input error={errors.auditTime?.message} type={"time"} name={"auditTime"}label={"Hora de la auditoria"} placeholder={"Hora de la auditoria"}/>
        <Input error={errors.auditSubject?.message} type={"text"} name={"auditSubject"}label={"Tema de la auditoria"} placeholder={"Tema de la auditoria"}/>
        <Input error={errors.numberDays?.message} type={"number"} name={"numberDays"}label={"Cantidad de dias de auditoria"} placeholder={"Cantidad de dias de auditoria"}/>
        <Select error={errors.kindAudit?.message} options={["Interna","Externa"]} name={"kindAudit"}  label={"Tipo de auditaria"}></Select>
        <Input error={errors.scopeDay?.message} type={"text"} name={"scopeDay"}label={"Alcance de auditoria"} placeholder={"Alcance de auditoria"}/>
        <Input error={errors.auditProcess?.message} type={"text"} name={"auditProcess"}label={"Proceso de auditoria"} placeholder={"Proceso de auditoria"}/>
        <Select error={errors.auditRule?.message} options={[1,2]} name={"auditRule"}  label={"Regla a auditar"}></Select>
    </Form>
  )
}

export default FormRole