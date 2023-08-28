import { yupResolver } from '@hookform/resolvers/yup'
import React, { useCallback, useEffect, useState } from 'react'
import {useForm } from 'react-hook-form'
import { ValidationRisk } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import Form from '../../FormFields/Form'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllIsoRules } from '../../../redux/isoRuleSlice'
import { GetAllRisk, GetRiskById, UpdateRisk } from '../../../redux/risksSlice'
import { Modal } from '../../common/Modal'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'

const FormRisksUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationRisk)})
    const {id}= useParams()
    const {isoRules} = useSelector(state=> state.isoRule)
    const {loading,message, success} = useSelector(state=> state.risk)
    const dispatch =  useDispatch()
    const [showModalRisk, setShowModalRisk] = useState(false)
    const [getRisk, setgetRisk] = useState()
    const arrayEstadoRiesgo = [{id:"1",value:"Mitigado"},{id:"0",value:"No mitigado"}]

    const handleAddRisks = (data) =>{
      data.idrisks = id
      dispatch(UpdateRisk(data))
      setShowModalRisk(true)
        console.log(data)
    }
    const initialstate =  useCallback(()=>{
      dispatch(GetAllIsoRules())
      dispatch(GetRiskById(id)).unwrap().then(res=> setgetRisk(res))
    }, [dispatch,id])
    //Obteniendo las normas ISO
    const reloadRisk = () =>{
      dispatch(GetAllRisk())
    }
    //Cerrando el modal
    const handleOnCloseModalRisk = () => {
      setShowModalRisk(false)
    }
    useEffect(() => {
      initialstate()
      return () => {
      }
    }, [initialstate])
  return (
    <><Form
      buttonLabel='Agregar el riesgo'
      register={register}
      handleSubmit={handleSubmit}
      title={"Agregar el riesgo"}
      onSubmit={handleAddRisks}
    >
      <Input defaultValue={id || ""} type={"text"} name={"idrisks"} label={"ID del riesgo"} placeholder={"ID del riesgo"} />
      <Select error={errors.idRule?.message} options={isoRules} name={"idRule"} label={"Selecione la norma ISO"}></Select>
      <Input error={errors.nameRisks?.message} defaultValue={getRisk?.namerisks || ""} type={"text"} name={"nameRisks"} label={"Escriba el riesgo"} placeholder={"Escriba el riesgo"} />
      <Input error={errors.origen?.message} defaultValue={getRisk?.origen || ""} type={"text"} name={"origen"} label={"Escriba el origen del riesgo"} placeholder={"Escriba el origen del riesgo"} />
      <Input error={errors.consequense?.message} defaultValue={getRisk?.consequense || ""} type={"text"} name={"consequense"} label={"Digite la consecuencia"} placeholder={"Digite la consecuencia"} />
      <Input error={errors.source_risk?.message} defaultValue={getRisk?.sourcE_RISK || ""} type={"text"} name={"source_risk"} label={"Escriba la fuente del riesgo"} placeholder={"Escriba la fuente del riesgo"} />
      <Select error={errors.state?.message} options={arrayEstadoRiesgo} name={"state"} label={"Selecione el estado"}></Select>

    </Form><Modal
        size={"modal-dialog-centered"}
        title="Actualizar riesgo"
        showModal={showModalRisk}
        onClose={handleOnCloseModalRisk}
        children={loading ? <Spinner/> : <p className="text-center">{message}</p>}
        footer={success && success ? (
          <ButtonLink
            name={"OK!"}
            onClick={reloadRisk}
            className="btn btn-success"
            to={"/risks"} />
        ) : (
          <ButtonLink
            className="btn btn-danger"
            name={"Error"}
            to={"/risks/updateRisks"} />
        )} /></>
  )
}

export default FormRisksUpdate