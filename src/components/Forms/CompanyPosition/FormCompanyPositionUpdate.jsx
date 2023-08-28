import { yupResolver } from '@hookform/resolvers/yup'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ValidationCompanyPosition } from '../../Validation/ValidationForms'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import Form from '../../FormFields/Form'
import { useDispatch, useSelector } from 'react-redux'
import SelectPersonal from '../../FormFields/SelectPersonal'
import { GetAllCompanyPosition, GetCompanyPositionById, UpdateCompanyPosition } from '../../../redux/companyPositionSlice'
import { useParams } from 'react-router-dom'
import { GetAllProcess } from '../../../redux/processSlice'
import { GetAllUser } from '../../../redux/userSlice'
import { Modal } from '../../common/Modal'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'

const FormCompanyPositionUpdate = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationCompanyPosition)})
    const {user} = useSelector(state=> state.users)
    const {Process} = useSelector(state=> state.process)
    const {loading,message, success} = useSelector(state=> state.companyPosition)
    const dispatch =  useDispatch()
    const [showModalCompany, setShowModalCompany] = useState(false)
    const [getInforCompany, setGetInforCompany] = useState()
    const {id} =  useParams()

    const handleUpdateCompanyPosition = (data) =>{
      data.idcomapnY_POSITION = id
      dispatch(UpdateCompanyPosition(id))
      setShowModalCompany(true)
        console.log(data)
    }

    const initialstate =  useCallback(()=>{
      dispatch(GetAllProcess())
      dispatch(GetAllUser())
      dispatch(GetCompanyPositionById(id)).unwrap().then(res=>setGetInforCompany(res))
    }, [dispatch,id])
    //Obteniendo las normas ISO
    const reloadComapnyPosition = () =>{
      dispatch(GetAllCompanyPosition())
    }
    //Cerrando el modal
    const handleOnCloseModalRule = () => {
      setShowModalCompany(false)
    }
    useEffect(() => {
      initialstate()
      return () => {
      }
    }, [initialstate])
  return (
    <><Form
      buttonLabel='Actualizar position de la compañia'
      register={register}
      handleSubmit={handleSubmit}
      title={"Actualizar posición en la compañía"}
      onSubmit={handleUpdateCompanyPosition}
    >
      <Select error={errors.idUser?.message} defaultValue={""} options={user} name={"idUser"} label={"Seleccione el usuario"}></Select>
      <Select error={errors.idProcess?.message} defaultValue={""} options={Process} name={"idProces"} label={"Seleccione el proceso"}></Select>
      <SelectPersonal error={errors.mandated?.message} defaultValue={""} options={user} name={"mandated"} label={"Seleccione el acesor"}></SelectPersonal>
      <Input error={errors.description?.message} defaultValue={getInforCompany?.description || ""} type={"text"} name={"description"} label={"Descripcion del puesto"} placeholder={"Descripción del puesto"} />
      <Input error={errors.responsabilities?.message} defaultValue={getInforCompany?.responsabilities || ""} type={"text"} name={"responsabilities"} label={"Responsabilidades del puesto"} placeholder={"Responsabilidades del puesto"} />
      <Input error={errors.profile_Position?.message} defaultValue={getInforCompany?.profilE_POSITION || ""} type={"text"} name={"profile_Position"} label={"Perfil de usuario"} placeholder={"Perfil del usuario"} />
      <Input error={errors.responsabilities?.message} defaultValue={getInforCompany?.responsabilities || ""} type={"text"} name={"responsabilities"} label={"Responsabilidades del puesto"} placeholder={"Responsabilidades del puesto"} />
    </Form><Modal
        size={"modal-dialog-centered"}
        title="Actualizar posición en la compañía"
        showModal={showModalCompany}
        onClose={handleOnCloseModalRule}
        children={loading ? <Spinner /> : <p className="text-center">{message}</p>}
        footer={success && success ? (
          <ButtonLink
            name={"OK!"}
            onClick={reloadComapnyPosition}
            className="btn btn-success"
            to={"/company_position"} />
        ) : (
          <ButtonLink
            className="btn btn-danger"
            name={"Error"}
            to={"/company_position/updateCompanyPosition"} />
        )} /></>
  )
}

export default FormCompanyPositionUpdate