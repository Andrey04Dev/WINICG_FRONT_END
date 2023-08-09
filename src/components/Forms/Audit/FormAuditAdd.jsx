import React from 'react'
import Form from '../../FormFields/Form'
import Input from '../../FormFields/Input'
import Select from '../../FormFields/Select'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ValidationAudit } from '../../Validation/ValidationForms'
import { useDispatch } from 'react-redux'
import { AddAudit } from '../../../redux/auditSlice'

const FormAuditAdd = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationAudit)})
    const dispatch = useDispatch()

    const handleAddAudit = (data) =>{
      dispatch(AddAudit(data))
        console.log(data)
    }
  return (
    <Form 
    buttonLabel='Agregar Auditoría'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar Auditoría"}
    onSubmit={handleAddAudit}
    >
        <Input error={errors.auditName?.message} type={"text"} name={"auditName"}label={"Nombre del auditor"} placeholder={"Nombre del auditor"}/>
        <Input error={errors.auditDate?.message} type={"date"} name={"auditDate"}label={"Fecha de la auditoría"} placeholder={"Fecha de la auditoría"}/>
        <Input error={errors.auditTime?.message} type={"time"} name={"auditTime"}label={"Hora de la auditoría"} placeholder={"Hora de la auditoría"}/>
        <Input error={errors.auditSubject?.message} type={"text"} name={"auditSubject"}label={"Tema de la auditoría"} placeholder={"Tema de la auditoría"}/>
        <Input error={errors.numberDays?.message} type={"number"} name={"numberDays"}label={"Cantidad de dias de auditoría"} placeholder={"Cantidad de dias de auditoría"}/>
        <Select error={errors.kindAudit?.message} options={["Interna","Externa"]} name={"kindAudit"}  label={"Tipo de auditaria"}></Select>
        <Input error={errors.scopeDay?.message} type={"text"} name={"scopeDay"}label={"Alcance de auditoría"} placeholder={"Alcance de auditoría"}/>
        <Input error={errors.auditProcess?.message} type={"text"} name={"auditProcess"}label={"Proceso de auditoría"} placeholder={"Proceso de auditoría"}/>
        <Select error={errors.auditRule?.message} options={[1,2]} name={"auditRule"}  label={"Regla a auditar"}></Select>
    </Form>
  )
}

export default FormAuditAdd