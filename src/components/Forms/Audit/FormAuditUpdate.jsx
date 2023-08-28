import React, { Fragment, useCallback, useEffect, useState } from 'react'
import Form from '../../FormFields/Form'
import Input from '../../FormFields/Input'
import Select from '../../FormFields/Select'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ValidationAudit } from '../../Validation/ValidationForms'
import { Modal } from '../../common/Modal'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'
import { GetAllAudits, GetAuditById, UpdateAudit } from '../../../redux/auditSlice'
import { useParams } from 'react-router-dom'
import { GetAllIsoRules } from '../../../redux/isoRuleSlice'
import SelectPersonal from '../../FormFields/SelectPersonal'

const FormAuditUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationAudit)})
    const [showModalAuditoria, setShowModalAuditoria] = useState(false)
    const {loading,success,message} =  useSelector(state=> state.audit)
    const {isoRules} =  useSelector(state=> state.isoRule)
    const dispatch = useDispatch()
    const {id} =  useParams()
    const [GetAudit, setGetAudit] = useState()
    const arrayAuditoria = [{id:"Interna",value:"Interna"},{id:"Externa", value:"Externa"}]

    const handleUpdateAudit = (data) =>{
        data.idaudits = id
        dispatch(UpdateAudit(data))
        setShowModalAuditoria(true)
        console.log(data)
    }

    const handleOnCloseModalAudit = () => {
        setShowModalAuditoria(false)
    }

    const initialstate =  useCallback(()=>{
        dispatch(GetAllIsoRules())
        dispatch(GetAuditById(id)).unwrap().then(res=> setGetAudit(res))
      }, [dispatch,id])
    const reloadAudit = () =>{
        dispatch(GetAllAudits())
    }
    const ConvertDate= (date) => {
      const GetDate =  new Date(date)
      const result = `${GetDate.getFullYear()}-${(GetDate.getMonth()+1).toString().padStart(2, '0')}-${GetDate.getDate()}`
     console.log("result", result)
      return result
  }
    useEffect(() => {
        initialstate()
        return () => {
        }
      }, [initialstate])
    return (
        <Fragment>
            <Form
        buttonLabel='Actualizar Auditoría'
        register={register}
        handleSubmit={handleSubmit}
        title={"Actualizar Auditoría"}
        onSubmit={handleUpdateAudit}
        >
            <Input  defaultValue={id || ""} type={"text"} name={"idaudits"}label={"ID de la auditoría"} placeholder={"ID de la auditoría"} disabled={true} readOnly={true}/>
            <Input error={errors.audit_Name?.message} defaultValue={GetAudit?.audiT_NAME || ""} type={"text"} name={"audit_Name"}label={"Nombre del auditor"} placeholder={"Nombre del auditor"}/>
            <Input error={errors.audit_Date?.message} defaultValuee={`${ConvertDate(GetAudit?.audiT_DATE)}`|| ""}type={"date"}  name={"audit_Date"}label={"Fecha de la auditoría"} placeholder={"Fecha de la auditoría"}/>
            <Input error={errors.audit_Time?.message} defaultValue={GetAudit?.audiT_TIME || ""}type={"time"} name={"audit_Time"}label={"Hora de la auditoría"} placeholder={"Hora de la auditoría"}/>
            <Input error={errors.audit_Subject?.message} defaultValue={GetAudit?.audiT_SUBJECT || ""} type={"text"} name={"audit_Subject"}label={"Tema de la auditoría"} placeholder={"Tema de la auditoría"}/>
            <Input error={errors.number_Days?.message} defaultValue={GetAudit?.numbeR_DAYS || ""} type={"number"} name={"number_Days"}label={"Cantidad de dias de auditoría"} placeholder={"Cantidad de días de auditoría"}/>
            <Select error={errors.kind_Audit?.message} defaultValue={GetAudit?.kinD_AUDIT || ""} options={arrayAuditoria} name={"kind_Audit"}  label={"Tipo de auditaria"}></Select>
            <Input error={errors.scope_Audit?.message} defaultValue={GetAudit?.scopE_AUDIT || ""} type={"text"} name={"scope_Audit"}label={"Alcance de auditoría"} placeholder={"Alcance de auditoría"}/>
            <Input error={errors.audit_Process?.message} defaultValue={GetAudit?.audiT_PROCESS || ""} type={"text"} name={"audit_Process"}label={"Proceso de auditoría"} placeholder={"Proceso de auditoría"}/>
            <SelectPersonal error={errors.audit_Rule?.message} defaultValue={""} options={isoRules} name={"audit_Rule"}  label={"Regla a auditar"}/>
        </Form>
        <Modal
    size={"modal-dialog-centered"}
    title="Actualizar auditoría"
    showModal={showModalAuditoria}
    onClose={handleOnCloseModalAudit}
    children={loading? <Spinner/>: <p className="text-center">{message}</p>}
    footer={
      success && success ? (
        <ButtonLink
          name={"OK!"}
          onClick={reloadAudit}
          className="btn btn-success"
          to={"/audit"}
        />
      ) : (
        <ButtonLink
          className="btn btn-danger"
          name={"Error"}
          to={"/audit/updateAudit"}
        />
      )
    }
  />
        </Fragment>
      )
}

export default FormAuditUpdate