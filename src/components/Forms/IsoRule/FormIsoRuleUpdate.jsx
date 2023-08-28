import { yupResolver } from '@hookform/resolvers/yup'
import React, { useCallback, useEffect, useState } from 'react'
import {useForm } from 'react-hook-form'
import { ValidationIsoRule } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import Form from '../../FormFields/Form'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllIsoRules, GetIsoRulesById, UpdateIsoRules } from '../../../redux/isoRuleSlice'
import Textarea from '../../FormFields/Textarea'
import { GetAllCertification } from '../../../redux/certificationSlice'
import { GetAllAudits } from '../../../redux/auditSlice'
import { useParams } from 'react-router-dom'
import Spinner from '../../common/Spinner'
import { Modal } from '../../common/Modal'
import { ButtonLink } from '../../common/Button'

const FormIsoRuleUpdate = () => {
     //Inicializacion de variables
     const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationIsoRule)})
     const {certification} = useSelector(state=> state.certification)
     const {audits} = useSelector(state=> state.audit)
     const {loading,message, success} = useSelector(state=> state.isoRule)
     const dispatch =  useDispatch()
     const [showModalRule, setShowModalRule] = useState(false)
     const [GetIsoRule, setGetIsoRule] = useState()
     const {id} =  useParams()
 
     //Agregando norma ISO
     const handleUpdateIsoRule = (data) =>{
      data.idrule = id
       dispatch(UpdateIsoRules(data))
       setShowModalRule(!showModalRule)
         console.log(data)
     }
     //Inicializacion de metodos de certificacion y auditoria
     const initialstate =  useCallback(()=>{
       dispatch(GetAllCertification())
       dispatch(GetAllAudits())
       dispatch(GetIsoRulesById(id)).unwrap().then(res=> setGetIsoRule(res))
     }, [dispatch,id])
     //Obteniendo las normas ISO
     const reloadIsoRule = () =>{
       dispatch(GetAllIsoRules())
     }
     //Cerrando el modal
     const handleOnCloseModalRule = () => {
       setShowModalRule(false)
     }
     useEffect(() => {
       initialstate()
       return () => {
       }
     }, [initialstate])
  return (
    <><Form
      buttonLabel='Actualizar norma ISO'
      register={register}
      handleSubmit={handleSubmit}
      title={"Actualizar norma ISO"}
      onSubmit={handleUpdateIsoRule}
    >
      <Input defaultValue={id || ""} type={"text"} name={"idrule"} label={"ID de norma ISO"} placeholder={"ID de norma ISO"} readOnly={true} disabled={true} />
      <Select error={errors.idCertification?.message} defaultValue={""} options={certification} name={"idCertification"} label={"Selecione la certificación"}></Select>
      <Select error={errors.idAudit?.message} defaultValue={""} options={audits} name={"idAudit"} label={"Selecione la auditoria"}></Select>
      <Input error={errors.nameRule?.message} defaultValue={GetIsoRule?.namerule || ""} type={"text"} name={"nameRule"} label={"Nombre de la norma ISO"} placeholder={"Nombre de la norma ISO"} />
      <Input error={errors.codeRule?.message} defaultValue={GetIsoRule?.coderule || ""} type={"text"} name={"codeRule"} label={"Código de la auditoria"} placeholder={"Código de la norma ISO"} />
      <Textarea error={errors.rule_description?.message} defaultValue={GetIsoRule?.rulE_DESCRIPTION || ""} type={"text"} name={"rule_description"} label={"Descripción de la auditoría"} placeholder={"Descripción de la norma ISO"} />
    </Form><Modal
        size={"modal-dialog-centered"}
        title="Actualizar norma ISO"
        showModal={showModalRule}
        onClose={handleOnCloseModalRule}
        children={loading ? <Spinner /> : <p className="text-center">{message}</p>}
        footer={success && success ? (
          <ButtonLink
            name={"OK!"}
            onClick={reloadIsoRule}
            className="btn btn-success"
            to={"/isoRule"} />
        ) : (
          <ButtonLink
            className="btn btn-danger"
            name={"Error"}
            to={"/isoRule/updateIsoRule"} />
        )} /></>
  )
}

export default FormIsoRuleUpdate