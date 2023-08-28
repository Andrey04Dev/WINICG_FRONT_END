import { yupResolver } from "@hookform/resolvers/yup";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "../../FormFields/Select";
import Input from "../../FormFields/Input";
import { ValidationNoAccordance } from "../../Validation/ValidationForms";
import Form from "../../FormFields/Form";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProcess } from "../../../redux/processSlice";
import { AddNoAccordance, GetAllNoAccordance } from "../../../redux/noAccordanceSlice";
import { Modal } from "../../common/Modal";
import Spinner from "../../common/Spinner";
import { ButtonLink } from "../../common/Button";
import { GetAllAudits } from "../../../redux/auditSlice";
import { GetAllTaskProcess } from "../../../redux/taskSlice";

const FormNoAccordanceAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationNoAccordance) });
  const {Process} = useSelector(state=> state.process)
  const {Tasks} = useSelector(state=> state.tasks)
    const {Audits} = useSelector(state=> state.audit)
    const {loading,message, success} = useSelector(state=> state.noAccordance)
    const dispatch =  useDispatch()
    const [showModalRule, setShowModalRule] = useState(false)
    const arrayRanking = [{id:"Baja",value:"Baja"},{id:"Media",value:"Media"}, {id:"Alta",value:"Alta"}]
    const arrayStateAccordarce = [{id:"1",value:"Abierto"},{id:"0",value:"Cerrado"}]
    const arrayTipoAccordarce = [{id:"1",value:"Mayor"},{id:"0",value:"Menor"}]

  const handleAddNoAccordance = (data) => {
    dispatch(AddNoAccordance(data))
    setShowModalRule(true)
    console.log(data);
  };

  const initialstate =  useCallback(()=>{
    dispatch(GetAllProcess())
      dispatch(GetAllAudits())
      dispatch(GetAllTaskProcess())
  }, [dispatch])
  //Obteniendo las normas ISO
  const reloadNoAccordance = () =>{
    dispatch(GetAllNoAccordance())
  }
  //Cerrando el modal
  const handleOnCloseModalRule = () => {
    setShowModalRule(false)
  }
  useEffect(() => {
    initialstate()
    return () => {
    }
  }, [initialstate])
  return (
    <Fragment>
      <Form
      buttonLabel="Agregar no conformidad"
      register={register}
      handleSubmit={handleSubmit}
      title={"Agregar no conformidad"}
      onSubmit={handleAddNoAccordance}
    >
      <Select
        error={errors.idProcess?.message}
        options={Process}
        name={"idProcess"}
        label={"Selecione el proceso"}
      ></Select>
      <Select
        error={errors.idaudit?.message}
        options={Audits}
        name={"idaudit"}
        label={"Selecione la auditoría"}
      ></Select>
      <Select
        error={errors.idtask?.message}
        options={Tasks}
        name={"idtask"}
        label={"Selecione la tarea"}
      ></Select>
      <Input
        error={errors.name_No_Accordance?.message}
        type={"text"}
        name={"name_No_Accordance"}
        label={"Escriba el titulo de la no conformidad"}
        placeholder={"Escriba el titulo de la no conformidad"}
      />
      <Select
        error={errors.kind?.message}
        options={arrayTipoAccordarce}
        name={"kind"}
        label={"Selecione el estado"}
      ></Select>
      <Select
        error={errors.ranking?.message}
        options={arrayRanking}
        name={"ranking"}
        label={"Selecione la clasificación"}
      ></Select>
      <Input
        error={errors.description?.message}
        type={"text"}
        name={"description"}
        label={"Describa la no conformidad"}
        placeholder={"Describa la no conformidad"} />
        <Select
        error={errors.state?.message}
        options={arrayStateAccordarce}
        name={"state"}
        label={"Selecione el estado"}
      ></Select>
      <Input
        error={errors.audit_Detect?.message}
        type={"text"}
        name={"audit_Detect"}
        label={"Escriba el nombre de auditor/a"}
        placeholder={"Escriba el nombre de auditor"}
      />
    </Form>
    <Modal
    size={"modal-dialog-centered"}
    title="Agregar no conformidad"
    showModal={showModalRule}
    onClose={handleOnCloseModalRule}
    children={loading? <Spinner/>: <p className="text-center">{message}</p>}
    footer={
      success && success ? (
        <ButtonLink
          name={"OK!"}
          onClick={reloadNoAccordance}
          className="btn btn-success"
          to={"/noAccordance"}
        />
      ) : (
        <ButtonLink
          className="btn btn-danger"
          name={"Error"}
          to={"/noAccordance/addNoAccordance"}
        />
      )
    }
  />
    </Fragment>
  );
};

export default FormNoAccordanceAdd;
