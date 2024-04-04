import { yupResolver } from "@hookform/resolvers/yup";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ValidationRole } from "../../Validation/ValidationForms";
import Input from "../../FormFields/Input";
import Form from "../../FormFields/Form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAllRoles, GetRolesById, UpdateRoles } from "../../../redux/rolesSlice";
import { ButtonLink } from "../../common/Button";
import { Modal } from "../../common/Modal";
import Spinner from "../../common/Spinner";
import { AddHistorial } from "../../../redux/historialSlice";

const FormRolesUpdate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationRole) });
  const dispatch = useDispatch();
  const { message, success, loading } = useSelector((state) => state.roles);
  const [rolesGet, setRolesGet] = useState();
  const [showModalUpdateRole, setshowModalUpdateRole] = useState(false);
  const { id } = useParams();
  const userLogin = JSON.parse(sessionStorage.getItem("userLogin") || "") 

  const handleUpdateRole = (data) => {
    const {role} =  data
    const dataHistory = {idmodule:id,personchange:userLogin.name}
    dispatch(AddHistorial(dataHistory))
   dispatch(UpdateRoles({id,role}))
   setshowModalUpdateRole(true)
  };

  const initialization = useCallback(() => {
    dispatch(GetRolesById(id))
      .unwrap()
      .then((res) => setRolesGet(res));
  }, [dispatch, id]);

  const reloadRole = () => {
    dispatch(GetAllRoles())
  }

  const handleOnCloseModalRole = () =>{
    setshowModalUpdateRole(false)
  }

  useEffect(() => {
    initialization();
    return () => {};
  }, [initialization]);
  return (
    <Fragment>
      <Form
        buttonLabel="Actualizar roles"
        register={register}
        handleSubmit={handleSubmit}
        title={"Actualizar roles"}
        onSubmit={handleUpdateRole}
      >
        <Input
          name={"idrole"}
          type={"text"}
          disabled={true}
          readOnly={true}
          placeholder={"ID del rol"}
          label={"ID del rol"}
          defaultValue={id || ""}
        />
        <Input
          name={"role"}
          type={"text"}
          error={errors.role?.message}
          placeholder={"Escriba el rol"}
          label={"Escriba el rol"}
          defaultValue={rolesGet?.role || ""}
        />
      </Form>
      <Modal
        size={"modal-dialog-centered"}
        title="Actualizar Rol"
        showModal={showModalUpdateRole}
        onClose={handleOnCloseModalRole}
        children={loading? <Spinner/>: <p className="text-center">{message}</p>}
        footer={
          success && success ? (
            <ButtonLink
              name={"OK!"}
              onClick={reloadRole}
              className="btn btn-success"
              to={"/roles"}
            />
          ) : (
            <ButtonLink
              className="btn btn-danger"
              name={"Error"}
              to={"/roles/updateRoles/"}
            />
          )
        }
      />
    </Fragment>
  );
};

export default FormRolesUpdate;
