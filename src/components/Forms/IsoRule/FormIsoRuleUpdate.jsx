import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { ValidationIsoRule } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'

const FormIsoRuleUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationIsoRule)})

    const handleAddIsoRule = (data) =>{
        console.log(data)
    }
  return (
    <Form
    buttonLabel='Agregar norma ISO'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar norma ISO"}
    onSubmit={handleAddIsoRule}
    >
        <Select error={errors.idCertification?.message} defaultValue={""} options={["Interna","Externa"]} name={"idCertification"}  label={"Selecionela certificación"}></Select>
        <Select error={errors.idAudit?.message} defaultValue={""}  options={["Interna","Externa"]} name={"idAudit"}  label={"Selecione la auditoria"}></Select>
        <Input error={errors.nameRule?.message} defaultValue={""} type={"text"} name={"nameRule"}label={"Nombre de la norma ISO"} placeholder={"Nombre de la norma ISO"}/>
        <Input error={errors.codeRule?.message} defaultValue={""}  type={"text"} name={"codeRule"}label={"Código de la auditoria"} placeholder={"Código de la auditoria"}/>
        <Input error={errors.ruleDescription?.message} defaultValue={""} type={"text"} name={"ruleDescription"}label={"Descripción de la auditoria"} placeholder={"Descripción de la auditoria"}/>
    </Form>
  )
}

export default FormIsoRuleUpdate