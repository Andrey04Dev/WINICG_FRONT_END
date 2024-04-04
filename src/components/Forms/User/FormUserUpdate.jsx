import { yupResolver } from "@hookform/resolvers/yup";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ValidationUser } from "../../Validation/ValidationForms";
import Select from "../../FormFields/Select";
import Input from "../../FormFields/Input";
import { GetAllUser, GetUserById, UpdateUser } from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Modal } from "../../common/Modal";
import Spinner from "../../common/Spinner";
import { ButtonLink } from "../../common/Button";
import { GetAllRoles } from "../../../redux/rolesSlice";
import Form from "../../FormFields/Form";
import { AddHistorial } from "../../../redux/historialSlice";

const FormUserUpdate = () => {
  //Inicializacion de variables
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationUser) });
  const { Roles } = useSelector((state) => state.roles);
  const { loading, success, message } = useSelector((state) => state.users);
  const {Positions} =  useSelector(state=> state.position)
  const dispatch = useDispatch();
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [updateUsers, setUpdateUsers] = useState()
  const {id} =  useParams()
  const arrayEstado = [{id:true,value:"Activo"},{id:false, value:"Inactivo"}]
  const userLogin = JSON.parse(sessionStorage.getItem("userLogin") || "") 

  //Funcion para agregar los usuarios
  const handleAddUser = (data) => {
    data.iduser =  id
    data.active  = JSON.parse(data.active )
    const dataHistory = {idmodule:id,personchange:userLogin.name}
    dispatch(AddHistorial(dataHistory))
    dispatch(UpdateUser(data));
    setShowModalUpdateUser(true);
  };

  //Funcion para obtener los usuarios
  const initialization = useCallback(() => {
    dispatch(GetAllRoles());
    dispatch(GetUserById(id)).unwrap().then(res=>setUpdateUsers(res))
  }, [dispatch,id]);

  //Cargar los ususarios
  const reloadUsers = () => {
    dispatch(GetAllUser());
  };

  //Cerrar el modal
  const handleOnCloseModalRole = () => {
    setShowModalUpdateUser(false);
  };

  useEffect(() => {
    initialization();
    return () => {};
  }, [initialization]);

  return (
    <Fragment>
      <Form
        buttonLabel="Actualizar usuarios"
        register={register}
        handleSubmit={handleSubmit}
        title={"Actualizar usuario"}
        onSubmit={handleAddUser}
      >
        <Input
          name={"iduser"}
          type={"text"}
          disabled={true}
          readOnly={true}
          placeholder={"ID usuario"}
          label={"ID usuario"}
          defaultValue={id || ""}
        />
        <Select
          label={"Rol"}
          name={"idRole"}
          options={Roles}
          error={errors?.idRole?.message}
          defaultValue={updateUsers?.idRole || ""}
        />
        <Select label={"Posición"} name={"idPosition"} options={Positions} error={errors?.idPosition?.message}/>
        <Input
          type={"text"}
          label={"Cedula"}
          placeholder={"Cedula"}
          name={"cedula"}
          error={errors?.cedula?.message}
          defaultValue={updateUsers?.cedula || ""}
        />
        <Input
          type={"text"}
          label={"Nombre completo"}
          placeholder={"Nombre completo"}
          name={"fullname"}
          error={errors?.fullname?.message}
          defaultValue={updateUsers?.fullname || ""}
        />
        <Input
          type={"email"}
          label={"Correo"}
          placeholder={"Correo"}
          name={"email"}
          error={errors?.email?.message}
          defaultValue={updateUsers?.email || ""}
        />
        <Input
          type={"password"}
          label={"Contraseña"}
          placeholder={"Contraseña"}
          name={"password"}
        />
        <Select
          label={"Estado"}
          name={"active"}
          options={arrayEstado}
        />
      </Form>
      <Modal
        size={"modal-dialog-centered"}
        title="Actualizar usuario"
        showModal={showModalUpdateUser}
        onClose={handleOnCloseModalRole}
        children={
          loading ? <Spinner /> : <p className="text-center">{message}</p>
        }
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
              to={"/users/updateUsers"}
            />
          )
        }
      />
    </Fragment>
  );
};
export default FormUserUpdate;
