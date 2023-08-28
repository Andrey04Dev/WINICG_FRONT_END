import React, { useCallback, useEffect, useState } from 'react'
import Form from '../../FormFields/Form'
import Input from '../../FormFields/Input'
import Select from '../../FormFields/Select'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ValidationAudit } from '../../Validation/ValidationForms'
import { useDispatch, useSelector } from 'react-redux'
import { AddAudit, GetAllAudits } from '../../../redux/auditSlice'
import { Modal } from '../../common/Modal'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'
import { GetAllIsoRules } from '../../../redux/isoRuleSlice'
import SelectPersonal from '../../FormFields/SelectPersonal'

const FormAuditAdd = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationAudit)})
    const {isoRules} =  useSelector(state=> state.isoRule)
    const {loading, message,success} =  useSelector(state=> state.audit)
    const dispatch = useDispatch()
    const [showModalAuditoria, setShowModalAuditoria] = useState(false)
    const arrayAuditoria = [{id:"Interna",value:"Interna"},{id:"Externa", value:"Externa"}]

    const handleAddAudit = (data) =>{
      dispatch(AddAudit(data))
      setShowModalAuditoria(true)
        console.log(data)
    }
    
    const handleOnCloseModalAudit = () => {
      setShowModalAuditoria(false)
  }

  const initialstate =  useCallback(()=>{
      dispatch(GetAllIsoRules())
    }, [dispatch,])

  const reloadAudit = () =>{
      dispatch(GetAllAudits())
  }
  useEffect(() => {
      initialstate()
      return () => {
      }
    }, [initialstate])
  return (
    <><Form
      buttonLabel='Agregar Auditoría'
      register={register}
      handleSubmit={handleSubmit}
      title={"Agregar Auditoría"}
      onSubmit={handleAddAudit}
    >
      <Input error={errors.audit_Name?.message} type={"text"} name={"audit_Name"} label={"Nombre del auditor/a"} placeholder={"Nombre del auditor"} />
      <Input error={errors.audit_Date?.message} type={"date"} name={"audit_Date"} label={"Fecha de la auditoría"} placeholder={"Fecha de la auditoría"} />
      <Input error={errors.audit_Time?.message} type={"time"} min={"00:00:00"} max={"23:59:59"} step={2} name={"audit_Time"} label={"Hora de la auditoría"} placeholder={"Hora de la auditoría"} />
      <Input error={errors.audit_Subject?.message} type={"text"} name={"audit_Subject"} label={"Tema de la auditoría"} placeholder={"Tema de la auditoría"} />
      <Input error={errors.number_Days?.message} type={"number"} name={"number_Days"} label={"Cantidad de dias de auditoría"} placeholder={"Cantidad de dias de auditoría"} />
      <Select error={errors.kind_Audit?.message} options={arrayAuditoria} name={"kind_Audit"} label={"Tipo de auditaria"}></Select>
      <Input error={errors.scope_Audit?.message} type={"text"} name={"scope_Audit"} label={"Alcance de auditoría"} placeholder={"Alcance de auditoría"} />
      <Input error={errors.audit_Process?.message} type={"text"} name={"audit_Process"} label={"Proceso de auditoría"} placeholder={"Proceso de auditoría"} />
      <SelectPersonal error={errors.audit_Rule?.message} options={isoRules} name={"audit_Rule"} label={"Regla a auditar"}></SelectPersonal>
    </Form><Modal
        size={"modal-dialog-centered"}
        title="Agregar auditoría"
        showModal={showModalAuditoria}
        onClose={handleOnCloseModalAudit}
        children={loading ? <Spinner /> : <p className="text-center">{message}</p>}
        footer={success && success ? (
          <ButtonLink
            name={"OK!"}
            onClick={reloadAudit}
            className="btn btn-success"
            to={"/audit"} />
        ) : (
          <ButtonLink
            className="btn btn-danger"
            name={"Error"}
            to={"/audit/addAudit"} />
        )} /></>
  )
}

export default FormAuditAdd