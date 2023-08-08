import React, { useCallback, useEffect, useState } from "react";
import Table from "../../common/Table";
import { useDispatch, useSelector } from "react-redux";
import { GetAllRoles } from "../../../redux/rolesSlice";
import { Modal } from "../../common/Modal";
import { useParams } from "react-router-dom";
import FormRolesUpdate from "./FormRolesUpdate";
import { Button, ButtonLink } from "../../common/Button";

const GetRoles = () => {
  const arrayHeaderRoles = ["idrole", "role", "createdate", "updatedate"];
  const {id} = useParams()
  const dispatch = useDispatch();
  const { Roles } = useSelector((state) => state.roles);
  const [setshowModalupdateRole, setSetshowModalupdateRole] = useState(false);
  const [setshowModaldeleteRole, setSetshowModaldeleteRole] = useState(false);

  const handleOpenUpdateForm = ()=>{
    setSetshowModalupdateRole(true)
  }
  const handleOpenDeleteForm = ()=>{
    setSetshowModaldeleteRole(true)
  }
  const handleCloseModal = () => {
    setSetshowModalupdateRole(false);
    setSetshowModaldeleteRole(false)
  };

  const initialState = useCallback(() => {
    dispatch(GetAllRoles());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <div>
      <Table
        title={"Lista de roles"}
        data={Roles}
        arrayHeader={arrayHeaderRoles}
        handleUpdate={handleOpenUpdateForm}
        handleDelete={handleOpenDeleteForm}
        updateRoute={"/"}
        deleteRoute={"/"}
      />
      <Modal
        showModal={setshowModalupdateRole}
        title={"Actualizar rol"}
        onClose={handleCloseModal}
        children={ <><p>{id}</p><FormRolesUpdate /></>}
        footer={<><ButtonLink className={"btn btn-primary"} to={"/"} name={"Actualizar"}/><Button className={"btn btn-danger"} onClick={handleCloseModal} children={"Cancelar"}/></>}
      />
      <Modal
        showModal={setshowModaldeleteRole}
        title={"Eliminar rol"}
        onClose={handleCloseModal}
        footer={<><ButtonLink className={"btn btn-primary"} to={"/"} name={"Eliminar"}/><Button className={"btn btn-danger"} onClick={handleCloseModal} children={"Cancelar"}/></>}
      >
        <p>¿Desea el eliminar el rol con el{id}?</p>
      </Modal>
    </div>
  );
};

export default GetRoles;
