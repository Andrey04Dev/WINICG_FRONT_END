import React, { Fragment, useEffect, useState } from "react";
import Form from "../../FormFields/Form";
import { useForm } from "react-hook-form";
import Input from "../../FormFields/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationUser } from "../../Validation/ValidationForms";
import { useDispatch, useSelector } from "react-redux";
import Select from "../../FormFields/Select";
import { useCallback } from "react";
import { GetAllRoles } from "../../../redux/rolesSlice";
import { Modal } from "../../common/Modal";
import Spinner from "../../common/Spinner";
import { AddUser, GetAllUser } from "../../../redux/userSlice";
import { ButtonLink } from "../../common/Button";

const FormUserAdd = () => {
  //Inicializacion de variables
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationUser) });
  const {Roles} =  useSelector(state=> state.roles)
  const {loading, success, message} =  useSelector(state=> state.users)
  const dispatch =  useDispatch()
  const [showModalAddUser, setShowModalAddUser] = useState(false)

  //Funcion para agregar los usuarios
  const handleAddUser = (data) => {
    dispatch(AddUser(data))
    setShowModalAddUser(true)
  };

  //Funcion para obtener los roloes
  const initialization = useCallback(
    () => {
      dispatch(GetAllRoles())
    },
    [dispatch],
  )

  //Cargar los ususarios 
  const reloadUsers = () => {
    dispatch(GetAllUser())
  }

  //Cerrar el modal 
  const handleOnCloseModalRole = () =>{
    setShowModalAddUser(false)
  }

  useEffect(() => {
    initialization()
    return () => {
    }
  }, [initialization])
  
  
  return (
    <Fragment>
      <Form
      buttonLabel="Agregar usuarios"
      register={register}
      handleSubmit={handleSubmit}
      title={"Agregar usuario"}
      onSubmit={handleAddUser}
    >
      <Select label={"Rol"} name={"idRole"} options={Roles} error={errors?.idRole?.message}/>
      <Input type={"text"} label={"Cedula"} placeholder={"Cedula"} name={"cedula"} error={errors?.cedula?.message} />
      <Input type={"text"} label={"Nombre completo"} placeholder={"Nombre completo"} name={"fullname"} error={errors?.fullname?.message} />
      <Input type={"email"} label={"Correo"} placeholder={"Correo"} name={"email"} error={errors?.email?.message} />
      <Input type={"password"} label={"Contraseña"} placeholder={"Contraseña"} name={"password"} error={errors?.password?.message} />
    </Form>
    <Modal
        size={"modal-dialog-centered"}
        title="Agregar usuario"
        showModal={showModalAddUser}
        onClose={handleOnCloseModalRole}
        children={loading? <Spinner/>: <p className="text-center">{message}</p>}
        footer={
          success && success ? (
            <ButtonLink
              name={"OK!"}
              onClick={reloadUsers}
              className="btn btn-success"
              to={"/users"}
            />
          ) : (
            <ButtonLink
              className="btn btn-danger"
              name={"Error"}
              to={"/users/addUsers"}
            />
          )
        }
      />
    </Fragment>
  );
};

export default FormUserAdd;
