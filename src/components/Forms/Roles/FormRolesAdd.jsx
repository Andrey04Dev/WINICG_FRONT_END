import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import {useForm } from 'react-hook-form'
import Input from '../../FormFields/Input'
import { ValidationRole } from '../../Validation/ValidationForms'
import Form from '../../FormFields/Form'
import { useDispatch } from 'react-redux'
import { AddRoles } from '../../../redux/rolesSlice'

const FormRolesAdd = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationRole)})
    const dispatch  =  useDispatch()
    const handleAddRoles = (data) =>{
      dispatch(AddRoles(data))
        console.log(data)
    }
  return (
    <Form
    buttonLabel='Agregar roles'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar roles"}
    onSubmit={handleAddRoles}
    >
        <Input name={"id"} className={"d-none"} type={"text"} />
        <Input name={"role"} type={"text"} error={errors.role?.message} placeholder={"Escriba el rol"} label={"Escriba el rol"}/>
    </Form>
  )
}

export default FormRolesAdd