import React, { Fragment, useCallback, useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import { ButtonLink } from '../../common/Button'
import Input from '../../FormFields/Input'
import Textarea from '../../FormFields/Textarea'
import { Modal } from '../../common/Modal'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ValidationPosition } from '../../Validation/ValidationForms'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../common/Spinner'
import { GetAllPositions, GetPositionById, UpdatePosition } from '../../../redux/positionSlice'
import Form from '../../FormFields/Form'
import SelectPersonal from '../../FormFields/SelectPersonal'
import { AddHistorial } from '../../../redux/historialSlice'

const FormPositionUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationPosition)})
    const {loading,message, success} = useSelector(state=> state.position)
    const dispatch =  useDispatch()
    const [showModalPosition, setShowModalPosition] = useState(false)
    const {id} = useParams()
    const [getInfoPosition, setGetInfoPosition] = useState()
    const arrayArea = ["Desarrollador", "QA","Administrador", "RH", "Secretaría"]
    const userLogin = JSON.parse(sessionStorage.getItem("userLogin") || "") 
    const handleUpdatePosition = (data) =>{
        data.idposition = id
        dispatch(UpdatePosition(data))
        const dataHistory = {idmodule:id,personchange:userLogin.name}
    dispatch(AddHistorial(dataHistory))
        setShowModalPosition(true)
          console.log(data)
      }
      const initialstate =  useCallback(()=>{
        dispatch(GetPositionById(id)).unwrap().then(res=> setGetInfoPosition(res))
      }, [dispatch,id])
      //Obteniendo las normas ISO
      const reloadIsoRule = () =>{
        dispatch(GetAllPositions())
      }
      //Cerrando el modal
      const handleOnCloseModalPosition = () => {
        setShowModalPosition(false)
      }

      useEffect(() => {
        initialstate()
        return () => {
        }
      }, [initialstate])

  return (
    <Fragment>
      <Form
    buttonLabel='Actualizar posición'
    register={register}
    handleSubmit={handleSubmit}
    title={"Actualizar posición"}
    onSubmit={handleUpdatePosition}
    >
        <Input defaultValue={id || ""} type={"text"} name={"idposition"}label={"ID de la posición"} placeholder={"ID de la posición"}/>
        <Input defaultValue={getInfoPosition?.positionjob || ""} error={errors.positionjob?.message} type={"text"} name={"positionjob"}label={"Escriba la posición"} placeholder={"Escriba la posición"}/>
        <Textarea defaultValue={getInfoPosition?.description || ""} error={errors.description?.message} type={"text"} name={"description"}label={"Escriba la descripción de la posición"} placeholder={"Escriba la descripción de la posición"}/>
        <SelectPersonal error={errors.area?.message} options={arrayArea} name={"area"} label={"Selecione la área"}></SelectPersonal>
    </Form>
    <Modal
    size={"modal-dialog-centered"}
    title="Actualizar posición"
    showModal={showModalPosition}
    onClose={handleOnCloseModalPosition}
    children={loading? <Spinner/>: <p className="text-center">{message}</p>}
    footer={
      success && success ? (
        <ButtonLink
          name={"OK!"}
          onClick={reloadIsoRule}
          className="btn btn-success"
          to={"/position"}
        />
      ) : (
        <ButtonLink
          className="btn btn-danger"
          name={"Error"}
          to={"/position/updatePosition"}
        />
      )
    }
  />
    </Fragment>
  )
}

export default FormPositionUpdate