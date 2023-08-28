import { yupResolver } from '@hookform/resolvers/yup'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ValidationNoAccordance } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import Form from '../../FormFields/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetAllNoAccordance, GetNoAccordanceById, UpdateNoAccordance } from '../../../redux/noAccordanceSlice'
import { Modal } from '../../common/Modal'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'
import { GetAllProcess } from '../../../redux/processSlice'
import { GetAllTaskProcess } from '../../../redux/taskSlice'
import { GetAllAudits } from '../../../redux/auditSlice'

const FormNoAccordanceUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationNoAccordance)})
    const {Process} = useSelector(state=> state.process)
    const {Tasks} = useSelector(state=> state.tasks)
    const {Audits} = useSelector(state=> state.audit)
    const {loading,message, success} = useSelector(state=> state.noAccordance)
    const dispatch =  useDispatch()
    const [showModalAccordance, setShowModalAccordance] = useState(false)
    const [GetAccordance, setGetAccordance] = useState()
    const {id} =  useParams()
    const arrayRanking = [{id:"Baja",value:"Baja"},{id:"Media",value:"Media"}, {id:"Alta",value:"Alta"}]
    const arrayStateAccordarce = [{id:"1",value:"Abierto"},{id:"0",value:"Cerrado"}]
    const arrayTipoAccordarce = [{id:"1",value:"Mayor"},{id:"0",value:"Menor"}]

    const handleAddNoAccordance = (data) =>{
      data.idaccordance = id
      dispatch(UpdateNoAccordance(data))
      setShowModalAccordance(true)
        console.log(data)
    }
    const initialstate =  useCallback(()=>{
      dispatch(GetAllProcess())
      dispatch(GetAllAudits())
      dispatch(GetAllTaskProcess())
      dispatch(GetNoAccordanceById(id)).unwrap().then(res=> setGetAccordance(res))
    }, [dispatch,id])
    //Obteniendo las normas ISO
    const reloadNoAccordance = () =>{
      dispatch(GetAllNoAccordance())
    }
    //Cerrando el modal
    const handleOnCloseModalRule = () => {
      setShowModalAccordance(false)
    }
    useEffect(() => {
      initialstate()
      return () => {
      }
    }, [initialstate])
  return (
    <><Form
      buttonLabel='Actualizar la no conformidad'
      register={register}
      handleSubmit={handleSubmit}
      title={"Actualizar la no conformidad"}
      onSubmit={handleAddNoAccordance}
    >
      <Input
        type={"text"}
        defaultValue={id||""}
        readOnly={true}
        disabled={true}
        name={"idaccordance"}
        label={"ID de la no conformidad"}
        placeholder={"ID de la no conformidad"} />
      <Select
        error={errors.idProcess?.message}
        options={Process}
        name={"idProcess"}
        label={"Selecione el proceso"}
      ></Select>
      <Select
        error={errors.idaudit?.message}
        options={Audits}
        name={"idaudit"}
        label={"Selecione la auditoría"}
      ></Select>
      <Select
        error={errors.idtask?.message}
        options={Tasks}
        name={"idtask"}
        label={"Selecione la tarea"}
      ></Select>
      <Input
        error={errors.name_No_Accordance?.message}
        type={"text"}
        defaultValue={GetAccordance?.namE_NO_ACCORDANCE || ""}
        name={"name_No_Accordance"}
        label={"Escriba el titulo de la no conformidad"}
        placeholder={"Escriba el titulo de la no conformidad"} />
      <Select
        error={errors.kind?.message}
        options={arrayTipoAccordarce}
        name={"kind"}
        label={"Selecione el estado"}
      ></Select>
      <Select
        error={errors.ranking?.message}
        options={arrayRanking}
        name={"ranking"}
        label={"Selecione la clasificación"}
      ></Select>
       <Input
        error={errors.description?.message}
        type={"text"}
        name={"description"}
        defaultValue={GetAccordance?.description || ""}
        label={"Describa la no conformidad"}
        placeholder={"Describa la no conformidad"} />
        <Select
        error={errors.state?.message}
        options={arrayStateAccordarce}
        name={"state"}
        label={"Selecione el estado"}
      ></Select>
      <Input
        error={errors.audit_Detect?.message}
        type={"text"}
        defaultValue={GetAccordance?.audiT_DETECT}
        name={"audit_Detect"}
        label={"Escriba el nombre de auditor/a"}
        placeholder={"Escriba el nombre de auditor"} />
    </Form><Modal
        size={"modal-dialog-centered"}
        title="Actualizar la no conformidad"
        showModal={showModalAccordance}
        onClose={handleOnCloseModalRule}
        children={loading ? <Spinner /> : <p className="text-center">{message}</p>}
        footer={success && success ? (
          <ButtonLink
            name={"OK!"}
            onClick={reloadNoAccordance}
            className="btn btn-success"
            to={"/noAccordance"} />
        ) : (
          <ButtonLink
            className="btn btn-danger"
            name={"Error"}
            to={"/noAccordance/updateNoAccordance"} />
        )} /></>
  )
}

export default FormNoAccordanceUpdate