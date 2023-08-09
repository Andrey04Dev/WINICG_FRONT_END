import React, { useCallback, useEffect, useState } from 'react'
import Table from '../../common/Table'
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllAudits } from '../../../redux/auditSlice';
import { Modal } from '../../common/Modal';
import { Button, ButtonLink } from '../../common/Button';
import FormIsoRuleUpdate from '../IsoRule/FormIsoRuleUpdate';

const GetAudit = () => {
  const arrayHeaderRiesgo = ["idrole", "role", "createdate", "updatedate"];
  const location =  useLocation()
  const {id} = useParams()
  const dispatch = useDispatch();
  const { audits } = useSelector((state) => state.audit);
  const [setshowModalupdateAudit, setSetshowModalupdateAudit] = useState(false);
  const [setshowModaldeleteAudit, setSetshowModaldeleteAudit] = useState(false);

  const handleOpenUpdateForm = ()=>{
    setSetshowModalupdateAudit(true)
  }
  const handleOpenDeleteForm = ()=>{
    setSetshowModaldeleteAudit(true)
  }
  const handleCloseModal = () => {
    setshowModalupdateAudit(false);
    setshowModaldeleteAudit(false)
  };

  const initialState = useCallback(() => {
    dispatch(GetAllAudits());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <div>
      <Table
        title={"Lista de auditorías"}
        data={audits}
        arrayHeader={arrayHeaderRiesgo}
        handleUpdate={handleOpenUpdateForm}
        handleDelete={handleOpenDeleteForm}
        updateRoute={"/"}
        deleteRoute={"/"}
      />
      <Modal
        showModal={setshowModalupdateAudit}
        title={"Actualizar regla"}
        onClose={handleCloseModal}
        children={ <><p>{id}</p><FormIsoRuleUpdate /></>}
        footer={<><ButtonLink className={"btn btn-primary"} to={"/"} name={"Actualizar"}/><Button className={"btn btn-danger"} onClick={handleCloseModal} children={"Cancelar"}/></>}
      />
      <Modal
        showModal={setshowModaldeleteAudit}
        title={"Actualizar regla"}
        onClose={handleCloseModal}
        footer={<><ButtonLink className={"btn btn-primary"} to={"/"} name={"Actualizar"}/><Button className={"btn btn-danger"} onClick={handleCloseModal} children={"Cancelar"}/></>}
      >
        <p>¿Desea el eliminar la auditoría con el{id}?</p>
      </Modal>
    </div>
  );
}

export default GetAudit