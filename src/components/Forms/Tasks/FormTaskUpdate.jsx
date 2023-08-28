import { yupResolver } from '@hookform/resolvers/yup'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ValidationTasks } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import Form from '../../FormFields/Form'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllIsoRules } from '../../../redux/isoRuleSlice'
import { GetAllUser } from '../../../redux/userSlice'
import { GetAllFlags } from '../../../redux/flagSlice'
import { GetAllTaskProcess, GetTaskByIdProcess, UpdateTaskProcess } from '../../../redux/taskSlice'
import { Modal } from '../../common/Modal'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'

const FormTaskUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationTasks)})
    const {isoRules} = useSelector(state=> state.isoRule)
    const {user} = useSelector(state=> state.users)
    const {flags} = useSelector(state=> state.flag)
     const {loading,message, success} = useSelector(state=> state.tasks)
     const dispatch =  useDispatch()
     const [showModalTask, setShowModalTask] = useState(false)
     const [GetIsoTask, setGetIsoTask] = useState()
     const {id} =  useParams()

    const handleAddTask = (data) =>{
      data.idtask =  id
      dispatch(UpdateTaskProcess(data))
      setShowModalTask(true)
        console.log(data)
    }

    const initialstate =  useCallback(()=>{
      dispatch(GetAllIsoRules())
      dispatch(GetAllUser())
      dispatch(GetAllFlags())
      dispatch(GetTaskByIdProcess(id)).unwrap().then(res=> setGetIsoTask(res[0]))
    }, [dispatch,id])
    //Obteniendo las normas ISO
    const reloadTask = () =>{
      dispatch(GetAllTaskProcess())
    }
    //Cerrando el modal
    const handleOnCloseModalTask = () => {
      setShowModalTask(false)
    }
    useEffect(() => {
      initialstate()
      return () => {
      }
    }, [initialstate])
  return (
    <Fragment>
      <Form
    buttonLabel='Actualizar tarea'
    register={register}
    handleSubmit={handleSubmit}
    title={"Actualizar tarea"}
    onSubmit={handleAddTask}
    >
      <Input defaultValue={id ||""} type={"text"} name={"idtask"}label={"ID tarea"} placeholder={"ID Tarea"}/>
        <Select error={errors.idRule?.message}  defaultValue={""} options={isoRules} name={"idRule"}  label={"Selecione la norma ISO"}></Select>
        <Select error={errors.idUser?.message}  defaultValue={""} options={user} name={"idUser"}  label={"Selecione el usuario asignado"}></Select>
        <Select error={errors.idFlags?.message}  defaultValue={""} options={flags} name={"idFlags"}  label={"Selecione el indicador"}></Select>
        <Input error={errors.project?.message}  defaultValue={GetIsoTask?.project ||""} type={"text"} name={"project"}label={"Escriba el nombre del proyecto"} placeholder={"Escriba el nombre del proyecto"}/>
        <Input error={errors.event_task?.message} defaultValue={GetIsoTask?.evenT_TASK ||""}  type={"text"} name={"event_task"}label={"Escriba el evento de la tarea"} placeholder={"Escriba el evento de la tarea"}/>
    </Form>
    <Modal
    size={"modal-dialog-centered"}
    title="Actualizar tarea"
    showModal={showModalTask}
    onClose={handleOnCloseModalTask}
    children={loading? <Spinner/>: <p className="text-center">{message}</p>}
    footer={
      success && success ? (
        <ButtonLink
          name={"OK!"}
          onClick={reloadTask}
          className="btn btn-success"
          to={"/tasks"}
        />
      ) : (
        <ButtonLink
          className="btn btn-danger"
          name={"Error"}
          to={"/tasks/addTasks"}
        />
      )
    }
  />
    </Fragment>
  )
}

export default FormTaskUpdate