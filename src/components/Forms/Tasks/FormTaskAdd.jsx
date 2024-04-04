import { yupResolver } from '@hookform/resolvers/yup'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import {useForm } from 'react-hook-form'
import { ValidationTasks } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import Form from '../../FormFields/Form'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../common/Modal'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'
import { GetAllIsoRules } from '../../../redux/isoRuleSlice'
import { GetAllUser } from '../../../redux/userSlice'
import { GetAllFlags } from '../../../redux/flagSlice'
import { AddTaskProcess, GetAllTaskProcess } from '../../../redux/taskSlice'

const FormTaskAdd = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationTasks)})
    const {isoRules} = useSelector(state=> state.isoRule)
    const {user} = useSelector(state=> state.users)
    const {flags} = useSelector(state=> state.flag)
    const {loading, success,message} = useSelector(state=> state.tasks)
    const dispatch =  useDispatch()
    const [showModalTask, setShowModalTask] = useState(false)

    const handleAddTask = (data) =>{
      dispatch(AddTaskProcess(data))
      setShowModalTask(true)
        console.log(data)
    }
    const initialstate =  useCallback(()=>{
      dispatch(GetAllIsoRules())
      dispatch(GetAllUser())
      dispatch(GetAllFlags()).then(res=> console.log("El indicador en formtask",res))
    }, [dispatch])
    //Obteniendo las normas ISO
    const reloadIsoTask = () =>{
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
    buttonLabel='Asignar tarea'
    register={register}
    handleSubmit={handleSubmit}
    title={"Asignar tarea"}
    onSubmit={handleAddTask}
    >
        <Select error={errors.idRule?.message} options={isoRules} name={"idRule"}  label={"Selecione la norma ISO"}></Select>
        <Select error={errors.idUser?.message} options={user} name={"idUser"}  label={"Selecione el usuario asignado"}></Select>
        <Select error={errors.idFlag?.message} options={flags} name={"idFlag"}  label={"Selecione el indicador"}></Select>
        <Input error={errors.project?.message} type={"text"} name={"project"}label={"Escriba el nombre del proyecto"} placeholder={"Escriba el nombre del proyecto"}/>
        <Input error={errors.event_task?.message} type={"text"} name={"event_task"}label={"Escriba el evento de la tarea"} placeholder={"Escriba el evento de la tarea"}/>
    </Form>
    <Modal
    size={"modal-dialog-centered"}
    title="Agregar tarea"
    showModal={showModalTask}
    onClose={handleOnCloseModalTask}
    children={loading? <Spinner/>: <p className="text-center">{message}</p>}
    footer={
      success && success ? (
        <ButtonLink
          name={"OK!"}
          onClick={reloadIsoTask}
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

export default FormTaskAdd