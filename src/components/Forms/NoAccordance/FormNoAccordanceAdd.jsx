import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Form, useForm } from "react-hook-form";
import Select from "../../FormFields/Select";
import Input from "../../FormFields/Input";
import { ValidationNoAccordance } from "../../Validation/ValidationForms";

const FormNoAccordanceAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationNoAccordance) });

  const handleAddNoAccordance = (data) => {
    console.log(data);
  };
  return (
    <Form
      buttonLabel="Agregar no conformidad"
      register={register}
      handleSubmit={handleSubmit}
      title={"Agregar no conformidad"}
      onSubmit={handleAddNoAccordance}
    >
      <Select
        error={errors.idProcess?.message}
        options={["Interna", "Externa"]}
        name={"idProcess"}
        label={"Selecione el proceso"}
      ></Select>
      <Input
        error={errors.nameNoAccordance?.message}
        type={"text"}
        name={"nameNoAccordance"}
        label={"Escriba el titulo de la no conformidad"}
        placeholder={"Escriba el titulo de la no conformidad"}
      />
      <Input
        error={errors.kind?.message}
        type={"text"}
        name={"kind"}
        label={"Tipo de la no conformidad"}
        placeholder={"Tipo de la no conformidad"}
      />
      <Select
        error={errors.ranking?.message}
        options={["Interna", "Externa"]}
        name={"ranking"}
        label={"Selecione la clasificación"}
      ></Select>
      <Input
        error={errors.auditDetect?.message}
        type={"text"}
        name={"auditDetect"}
        label={"Escriba el nombre de auditor"}
        placeholder={"Escriba el nombre de auditor"}
      />
    </Form>
  );
};

export default FormNoAccordanceAdd;
