import React, { useCallback, useEffect, useState } from "react";
import Table from "../../common/Table";
import { useDispatch, useSelector } from "react-redux";
import { GetAllRoles } from "../../../redux/rolesSlice";
import { Modal } from "../../common/Modal";
import FormRolesAdd from "./FormRolesAdd";
import { useParams } from "react-router-dom";
import FormRolesUpdate from "./FormRolesUpdate";

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
  const handleCloseModal = () => {
    setSetshowModalupdateRole(false);
  };

  const initialState = useCallback(() => {
    dispatch(GetAllRoles());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    console.log(Roles);
    return () => {};
  }, [initialState]);
  return (
    <div>
      <Table
        title={"Lista de roles"}
        data={Roles}
        arrayHeader={arrayHeaderRoles}
        handleUpdate={handleOpenUpdateForm}
        updateRoute={"/"}
      />
      <Modal
        showModal={setshowModalupdateRole}
        title={"Actualizar rol"}
        onClose={handleCloseModal}
      >
        <p>{id}</p>
        <FormRolesUpdate/>
      </Modal>
    </div>
  );
};

export default GetRoles;
