import { yupResolver } from "@hookform/resolvers/yup";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../FormFields/Input";
import { ValidationRole } from "../../Validation/ValidationForms";
import Form from "../../FormFields/Form";
import { useDispatch, useSelector } from "react-redux";
import { AddRoles, GetAllRoles } from "../../../redux/rolesSlice";
import { Modal } from "../../common/Modal";
import { ButtonLink } from "../../common/Button";
import Spinner from "../../common/Spinner";

const FormRolesAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationRole) });
  const dispatch = useDispatch();
  const [showModalRoles, setshowModalRoles] = useState(false)
  const {success, message, loading} =  useSelector(state=> state.roles)

  const handleAddRoles = (data) => {
    dispatch(AddRoles(data));
    setshowModalRoles(!showModalRoles)
    console.log(data);
  };

  const handleOnCloseModalRole = () =>{
    setshowModalRoles(false)
  }

  const reloadRole = () => {
    dispatch(GetAllRoles())
  }

  return (
    <Fragment>
      <Form
        buttonLabel="Agregar roles"
        register={register}
        handleSubmit={handleSubmit}
        title={"Agregar roles"}
        onSubmit={handleAddRoles}
      >
        <Input name={"id"} className={"d-none"} type={"text"} />
        <Input
          name={"role"}
          type={"text"}
          error={errors.role?.message}
          placeholder={"Escriba el rol"}
          label={"Escriba el rol"}
        />
      </Form>
      <Modal
        size={"modal-dialog-centered"}
        title="Agregar Rol"
        showModal={showModalRoles}
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
              to={"/roles/addRoles"}
            />
          )
        }
      />
    </Fragment>
  );
};

export default FormRolesAdd;
