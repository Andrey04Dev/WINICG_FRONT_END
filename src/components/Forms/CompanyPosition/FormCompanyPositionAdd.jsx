import React, { useCallback, useEffect, useState } from 'react'
import Form from '../../FormFields/Form'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ValidationCompanyPosition } from '../../Validation/ValidationForms'
import Input from '../../FormFields/Input'
import Select from '../../FormFields/Select'
import Textarea from '../../FormFields/Textarea'
import { useDispatch, useSelector } from 'react-redux'
import SelectPersonal from '../../FormFields/SelectPersonal'
import { AddCompanyPosition, GetAllCompanyPosition } from '../../../redux/companyPositionSlice'
import { GetAllProcess } from '../../../redux/processSlice'
import { GetAllUser } from '../../../redux/userSlice'
import { Modal } from '../../common/Modal'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'

const FormCompanyPositionAdd = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationCompanyPosition)})
    const {user} = useSelector(state=> state.users)
    const {Process} = useSelector(state=> state.process)
    const {loading,message, success} = useSelector(state=> state.companyPosition)
    const dispatch =  useDispatch()
    const [showModalCompany, setShowModalCompany] = useState(false)

    const handleAddCompanyPosition = (data) =>{
      dispatch(AddCompanyPosition(data))
      setShowModalCompany(true)
        console.log(data)
    }

    const initialstate =  useCallback(()=>{
      dispatch(GetAllProcess())
      dispatch(GetAllUser())
    }, [dispatch])
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
      buttonLabel='Agregar Rol'
      register={register}
      handleSubmit={handleSubmit}
      title={"Agregar posición en la compañía"}
      onSubmit={handleAddCompanyPosition}
    >
      <Select error={errors.idUser?.message} options={user} name={"idUser"} label={"Seleccione el usuario"}></Select>
      <Select error={errors.idProcess?.message} options={Process} name={"idProces"} label={"Seleccione el proceso"}></Select>
      <SelectPersonal error={errors.mandated?.message} options={user} name={"mandated"} label={"Seleccione el acesor"}></SelectPersonal>
      <Input error={errors.description?.message} type={"text"} name={"description"} label={"Descripcion del puesto"} placeholder={"Descripción del puesto"} />
      <Textarea error={errors.responsabilities?.message} type={"text"} name={"responsabilities"} label={"Responsabilidades del puesto"} placeholder={"Responsabilidades del puesto"} />
      <Input error={errors.profile_Position?.message} type={"text"} name={"profile_Position"} label={"Perfil de usuario"} placeholder={"Perfil del usuario"} />
    </Form><Modal
        size={"modal-dialog-centered"}
        title="Agregar posición en la compañía"
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
            to={"/company_position/addCompanyPosition"} />
        )} /></>
  )
}

export default FormCompanyPositionAdd