import React from 'react'
import { useForm } from 'react-hook-form'
import Form from '../../FormFields/Form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../../FormFields/Input'
import Select from '../../FormFields/Select'
import { ValidationIsoRule } from '../../Validation/ValidationForms'

const FormIsoRuleAdd = () => {
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
        <Select error={errors.idCertification?.message} options={["Interna","Externa"]} name={"idCertification"}  label={"Selecionela certificación"}></Select>
        <Select error={errors.idAudit?.message} options={["Interna","Externa"]} name={"idAudit"}  label={"Selecione la auditoria"}></Select>
        <Input error={errors.nameRule?.message} type={"text"} name={"nameRule"}label={"Nombre de la norma ISO"} placeholder={"Nombre de la norma ISO"}/>
        <Input error={errors.codeRule?.message} type={"text"} name={"codeRule"}label={"Código de la auditoria"} placeholder={"Código de la auditoria"}/>
        <Input error={errors.ruleDescription?.message} type={"text"} name={"ruleDescription"}label={"Descripción de la auditoria"} placeholder={"Descripción de la auditoria"}/>
    </Form>
  )
}

export default FormIsoRuleAdd