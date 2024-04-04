import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from '../../FormFields/Form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../../FormFields/Input'
import Select from '../../FormFields/Select'
import { ValidationIsoRule } from '../../Validation/ValidationForms'
import { useDispatch, useSelector } from 'react-redux'
import { AddIsoRules, GetAllIsoRules } from '../../../redux/isoRuleSlice'
import { GetAllCertification } from '../../../redux/certificationSlice'
import { GetAllAudits } from '../../../redux/auditSlice'
import Textarea from '../../FormFields/Textarea'
import { Modal } from '../../common/Modal'
import { ButtonLink } from '../../common/Button'
import Spinner from '../../common/Spinner'

const FormIsoRuleAdd = () => {
  //Inicializacion de variables
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationIsoRule)})
    const {certification} = useSelector(state=> state.certification)
    const {audits} = useSelector(state=> state.audit)
    const {loading,message, success} = useSelector(state=> state.isoRule)
    const dispatch =  useDispatch()
    const [showModalRule, setShowModalRule] = useState(false)

    //Agregando norma ISO
    const handleAddIsoRule = (data) =>{
      dispatch(AddIsoRules(data))
      setShowModalRule(!showModalRule)
        console.log(data)
    }
    //Inicializacion de metodos de certificacion y auditoria
    const initialstate =  useCallback(()=>{
      dispatch(GetAllCertification())
      dispatch(GetAllAudits())
    }, [dispatch])
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
    <Fragment>
    <Form 
    buttonLabel='Agregar norma ISO'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar norma ISO"}
    onSubmit={handleAddIsoRule}
    >
        <Select error={errors.idCertification?.message} options={certification && certification} name={"idCertification"}  label={"Selecionela certificación"}></Select>
        <Select error={errors.idAudit?.message} options={audits === null ? [] : audits} name={"idAudit"}  label={"Selecione la auditoria"}></Select>
        <Input error={errors.nameRule?.message} type={"text"} name={"nameRule"}label={"Nombre de la norma ISO"} placeholder={"Nombre de la norma ISO"}/>
        <Textarea error={errors.rule_description?.message} name={"rule_description"}label={"Descripción de la norma ISO"} placeholder={"Descripción de la norma ISO"}/>
    </Form>
    <Modal
    size={"modal-dialog-centered"}
    title="Agregar norma ISO"
    showModal={showModalRule}
    onClose={handleOnCloseModalRule}
    children={loading? <Spinner/>: <p className="text-center">{message}</p>}
    footer={
      success && success ? (
        <ButtonLink
          name={"OK!"}
          onClick={reloadIsoRule}
          className="btn btn-success"
          to={"/isoRule"}
        />
      ) : (
        <ButtonLink
          className="btn btn-danger"
          name={"Error"}
          to={"/isoRule/addIsoRule"}
        />
      )
    }
  />
  </Fragment>
  )
}

export default FormIsoRuleAdd