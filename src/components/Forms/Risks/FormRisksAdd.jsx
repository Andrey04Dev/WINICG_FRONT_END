import { yupResolver } from "@hookform/resolvers/yup";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "../../FormFields/Select";
import Input from "../../FormFields/Input";
import { ValidationRisk } from "../../Validation/ValidationForms";
import Form from "../../FormFields/Form";
import { useDispatch, useSelector } from "react-redux";
import { AddRisk, GetAllRisk } from "../../../redux/risksSlice";
import { Modal } from "../../common/Modal";
import Spinner from "../../common/Spinner";
import { ButtonLink } from "../../common/Button";
import { GetAllIsoRules } from "../../../redux/isoRuleSlice";

const FormRisksAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationRisk) });
  const { isoRules } = useSelector((state) => state.isoRule);
  const { loading, message, success } = useSelector((state) => state.risk);
  const dispatch = useDispatch();
  const [showModalRisk, setShowModalRisk] = useState(false);
  const arrayEstadoRiesgo = [
    { id: "0", value: "Mitigado" },
    { id: "1", value: "No mitigado" },
  ];

  const handleAddRisks = (data) => {
  dispatch(AddRisk(data))
    setShowModalRisk(true);
    console.log(data);
  };

  const initialstate = useCallback(() => {
    dispatch(GetAllIsoRules());
  }, [dispatch]);
  //Obteniendo las normas ISO
  const reloadIsoRule = () => {
    dispatch(GetAllRisk());
  };
  //Cerrando el modal
  const handleOnCloseModalRule = () => {
    setShowModalRisk(false);
  };

  useEffect(() => {
    initialstate();
    return () => {};
  }, [initialstate]);

  return (
    <Fragment>
      <Form
        buttonLabel="Agregar el riesgo"
        register={register}
        handleSubmit={handleSubmit}
        title={"Agregar el riesgo"}
        onSubmit={handleAddRisks}
      >
        {/* <ContainerFileUpload>
          {files.length === 0 ? (
            <label className="btn btn-danger">
              <span>Seleccionar archivos </span>
              <InputFile
                className={"btn btn-danger"}
                multiple={true}
                hidden={true}
                name={"filesGet"}
                register={register}
                onChange={changeInputFiles}
              />
            </label>
          ) : (
            <div className="row justify-content-center align-items-center w-100">
              {files.map((file) => (
                <div
                  className="col-2"
                  key={file.index}
                >
                    <ShowFileType file={file} onClick={changeInputFiles}/>
                  </div>
              ))}
            </div>
          )}
        </ContainerFileUpload> */}
        <Select
          error={errors.idRule?.message}
          options={isoRules}
          name={"idRule"}
          label={"Selecione la norma ISO"}
        ></Select>
        <Input
          error={errors.nameRisks?.message}
          type={"text"}
          name={"nameRisks"}
          label={"Escriba el riesgo"}
          placeholder={"Escriba el riesgo"}
        />
        <Input
          error={errors.origen?.message}
          type={"text"}
          name={"origen"}
          label={"Escriba el origen del riesgo"}
          placeholder={"Escriba el origen del riesgo"}
        />
        <Input
          error={errors.consequense?.message}
          type={"text"}
          name={"consequense"}
          label={"Digite la consecuencia"}
          placeholder={"Digite la consecuencia"}
        />
        <Input
          error={errors.source_risk?.message}
          type={"text"}
          name={"source_risk"}
          label={"Escriba la fuente del riesgo"}
          placeholder={"Escriba la fuente del riesgo"}
        />
        <Select
          error={errors.state?.message}
          options={arrayEstadoRiesgo}
          name={"state"}
          label={"Selecione el estado"}
        ></Select>
      </Form>
      <Modal
        size={"modal-dialog-centered"}
        title="Agregar riesgo"
        showModal={showModalRisk}
        onClose={handleOnCloseModalRule}
        children={
          loading ? <Spinner /> : <p className="text-center">{message}</p>
        }
        footer={
          success && success ? (
            <ButtonLink
              name={"OK!"}
              onClick={reloadIsoRule}
              className="btn btn-success"
              to={"/risks"}
            />
          ) : (
            <ButtonLink
              className="btn btn-danger"
              name={"Error"}
              to={"/risks/addRisks"}
            />
          )
        }
      />
    </Fragment>
  );
};

export default FormRisksAdd;
