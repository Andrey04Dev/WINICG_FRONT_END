import { yupResolver } from "@hookform/resolvers/yup";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { ValidationPosition } from "../../Validation/ValidationForms";
import Form from "../../FormFields/Form";
import Input from "../../FormFields/Input";
import SelectPersonal from "../../FormFields/SelectPersonal";
import { ButtonLink } from "../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { AddPosition, GetAllPositions } from "../../../redux/positionSlice";
import { Modal } from "../../common/Modal";
import Spinner from "../../common/Spinner";

const FormPositionAdd = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationPosition) });
  const { loading, message, success } = useSelector((state) => state.position);
  const dispatch = useDispatch();
  const [showModalPosition, setShowModalPosition] = useState(false);
  const arrayArea = [
    "Desarrollador",
    "QA",
    "Administrador",
    "RH",
    "Secretaría",
  ];

  const handleAddPostion = (data) => {
    dispatch(AddPosition(data))
    setShowModalPosition(true)
  };

  const reloadIsoRule = () => {
    dispatch(GetAllPositions());
  };
  //Cerrando el modal
  const handleOnCloseModalPosition = () => {
    setShowModalPosition(false);
  };

  return (
    <Fragment>
      <Form
        buttonLabel="Agregar posición"
        title={"Agregar posición"}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={handleAddPostion}
      >
        <Input
          error={errors?.positionjob?.message}
          label={"Escriba la posición"}
          placeholder={"Escriba la posición"}
          name={"positionjob"}
        />
        <Input
          error={errors?.description?.message}
          label={"Escriba la descripción"}
          placeholder={"Escriba la descripción"}
          name={"description"}
        />
        <SelectPersonal
          error={errors?.area?.message}
          label={"Selecione la area"}
          options={arrayArea}
          placeholder={"Selecione la area"}
          name={"area"}
        />
      </Form>
      <Modal
        size={"modal-dialog-centered"}
        title="Actualizar posición"
        showModal={showModalPosition}
        onClose={handleOnCloseModalPosition}
        children={
          loading ? <Spinner /> : <p className="text-center">{message}</p>
        }
        footer={
          success && success ? (
            <ButtonLink
              name={"OK!"}
              onClick={reloadIsoRule}
              className="btn btn-success"
              to={"/position"}
            />
          ) : (
            <ButtonLink
              className="btn btn-danger"
              name={"Error"}
              to={"/position/addPosition"}
            />
          )
        }
      />
    </Fragment>
  );
};

export default FormPositionAdd;
