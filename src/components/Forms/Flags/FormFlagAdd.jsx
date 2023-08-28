import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from '../../FormFields/Form'
import { yupResolver } from '@hookform/resolvers/yup'
import Select from '../../FormFields/Select'
import Input from '../../FormFields/Input'
import { ValidationFlag } from '../../Validation/ValidationForms'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllIsoRules } from '../../../redux/isoRuleSlice'
import { AddFlags, GetAllFlags } from '../../../redux/flagSlice'
import { Modal } from '../../common/Modal'
import Spinner from '../../common/Spinner'
import { ButtonLink } from '../../common/Button'

const FormFlagAdd = () => {
    const {register, handleSubmit, formState:{errors} } =  useForm({resolver:yupResolver(ValidationFlag)})
    const {isoRules} =  useSelector(state => state.isoRule)
    const {loading, success,message} =  useSelector(state => state.flag)
    const dispatch = useDispatch()
    const [showModalFlag, setShowModalFlag] = useState(false)

    const handleAddFlag = (data) =>{
      dispatch(AddFlags(data))
      setShowModalFlag(true)
        console.log(data)
    }

     const initialstate =  useCallback(
       () => {
         dispatch(GetAllIsoRules()).then(res=> console.log(res))
       },
       [dispatch],
     )
       const reloadFlag = () =>{
        dispatch(GetAllFlags())
       }

       const handleOnCloseModalFlag = () => {
        setShowModalFlag(false)
      }
     useEffect(() => {
      initialstate()
       return () => {}
     }, [initialstate])
     
     
  return (
    <Fragment>
      <Form
    buttonLabel='Agregar Indicador'
    register={register}
    handleSubmit={handleSubmit}
    title={"Agregar indicadores"}
    onSubmit={handleAddFlag}
    >
        <Select error={errors.idrule?.message} options={isoRules} name={"idrule"}  label={"Seleccione la Norma ISO"}></Select>
        <Input error={errors.flagName?.message} type={"text"} name={"flagName"}label={"Nombre del indicador"} placeholder={"Nombre del indicador"}/>
    </Form>
    <Modal
    size={"modal-dialog-centered"}
    title="Agregar indicador"
    showModal={showModalFlag}
    onClose={handleOnCloseModalFlag}
    children={loading? <Spinner/>: <p className="text-center">{message}</p>}
    footer={
      success && success ? (
        <ButtonLink
          name={"OK!"}
          onClick={reloadFlag}
          className="btn btn-success"
          to={"/flag"}
        />
      ) : (
        <ButtonLink
          className="btn btn-danger"
          name={"Error"}
          to={"/flag/addFlag"}
        />
      )
    }
  />
    </Fragment>
  )
}

export default FormFlagAdd