import React from 'react'
import Form from '../../FormFields/Form'
import Input from '../../FormFields/Input'
import Select from '../../FormFields/Select'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ValidationAudit } from '../../Validation/ValidationForms'

const FormAuditUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationAudit)})

    const handleUpdateAudit = (data) =>{
        console.log(data)
    }
    return (
        <Form
        buttonLabel='Agregar Rol'
        register={register}
        handleSubmit={handleSubmit}
        title={"Agregar rol"}
        onSubmit={handleUpdateAudit}
        >
            <Input error={errors.auditName?.message} defaultValue={""} type={"text"} name={"auditName"}label={"Nombre del auditor"} placeholder={"Nombre del auditor"}/>
            <Input error={errors.auditDate?.message} defaultValue={""}type={"date"} name={"auditDate"}label={"Fecha de la auditoria"} placeholder={"Fecha de la auditoria"}/>
            <Input error={errors.auditTime?.message} defaultValue={""}type={"time"} name={"auditTime"}label={"Hora de la auditoria"} placeholder={"Hora de la auditoria"}/>
            <Input error={errors.auditSubject?.message} defaultValue={""} type={"text"} name={"auditSubject"}label={"Tema de la auditoria"} placeholder={"Tema de la auditoria"}/>
            <Input error={errors.numberDays?.message} defaultValue={""} type={"number"} name={"numberDays"}label={"Cantidad de dias de auditoria"} placeholder={"Cantidad de dias de auditoria"}/>
            <Select error={errors.kindAudit?.message} defaultValue={""} options={["Interna","Externa"]} name={"kindAudit"}  label={"Tipo de auditaria"}></Select>
            <Input error={errors.scopeDay?.message} defaultValue={""} type={"text"} name={"scopeDay"}label={"Alcance de auditoria"} placeholder={"Alcance de auditoria"}/>
            <Input error={errors.auditProcess?.message} defaultValue={""} type={"text"} name={"auditProcess"}label={"Proceso de auditoria"} placeholder={"Proceso de auditoria"}/>
            <Select error={errors.auditRule?.message} defaultValue={""} options={[1,2]} name={"auditRule"}  label={"Regla a auditar"}></Select>
        </Form>
      )
}

export default FormAuditUpdate