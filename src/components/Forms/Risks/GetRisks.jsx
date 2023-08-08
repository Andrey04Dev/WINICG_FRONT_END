import React from 'react'
import Table from '../../common/Table'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Button, ButtonLink } from '../../common/Button';
import { Modal } from '../../common/Modal';
import { useEffect } from 'react';
import { useCallback } from 'react';
import FormRisksUpdate from './FormRisksUpdate';
import { GetAllRisk } from '../../../redux/risksSlice';

const GetRisks = () => {
  const arrayHeaderRiesgo = ["idrole", "role", "createdate", "updatedate"];
  const {id} = useParams()
  const dispatch = useDispatch();
  const { Risk } = useSelector((state) => state.risk);
  const [setshowModalupdateRisk, setSetshowModalupdateRisk] = useState(false);
  const [setshowModaldeleteRisk, setSetshowModaldeleteRisk] = useState(false);

  const handleOpenUpdateForm = ()=>{
    setSetshowModalupdateRisk(true)
  }
  const handleOpenDeleteForm = ()=>{
    setSetshowModaldeleteRisk(true)
  }
  const handleCloseModal = () => {
    setshowModalupdateRisk(false);
    setshowModaldeleteRisk(false)
  };

  const initialState = useCallback(() => {
    dispatch(GetAllRisk());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <div>
      <Table
        title={"Lista de Riesgos"}
        data={Risk}
        arrayHeader={arrayHeaderRiesgo}
        handleUpdate={handleOpenUpdateForm}
        handleDelete={handleOpenDeleteForm}
        updateRoute={"/"}
        deleteRoute={"/"}
      />
      <Modal
        showModal={setshowModalupdateRisk}
        title={"Actualizar riesgo"}
        onClose={handleCloseModal}
        children={ <><p>{id}</p><FormRisksUpdate /></>}
        footer={<><ButtonLink className={"btn btn-primary"} to={"/"} name={"Actualizar"}/><Button className={"btn btn-danger"} onClick={handleCloseModal} children={"Cancelar"}/></>}
      />
      <Modal
        showModal={setshowModaldeleteRisk}
        title={"Actualizar riesgo"}
        onClose={handleCloseModal}
        footer={<><ButtonLink className={"btn btn-primary"} to={"/"} name={"Actualizar"}/><Button className={"btn btn-danger"} onClick={handleCloseModal} children={"Cancelar"}/></>}
      >
        <p>¿Desea el eliminar el riesgo con el{id}?</p>
      </Modal>
    </div>
  );
}

export default GetRisks