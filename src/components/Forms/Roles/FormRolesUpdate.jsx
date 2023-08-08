import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Form, useForm } from "react-hook-form";
import { ValidationRole } from "../../Validation/ValidationForms";
import Input from "../../FormFields/Input";

const FormRolesUpdate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationRole) });

  const handleUpdateRole = (data) => {
    console.log(data);
  };
  return (
    <Form
      buttonLabel="Actualizar roles"
      register={register}
      handleSubmit={handleSubmit}
      title={"Actualizar roles"}
      onSubmit={handleUpdateRole}
    >
        <Input name={"role"} type={"text"} error={errors.role?.message} placeholder={"Escriba el rol"} label={"Escriba el rol"}/>
    </Form>
  );
};

export default FormRolesUpdate;
