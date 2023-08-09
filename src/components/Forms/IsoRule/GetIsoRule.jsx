import React, { useCallback, useEffect, useState } from 'react'
import Table from '../../common/Table'
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllIsoRules } from '../../../redux/isoRuleSlice';
import { Button, ButtonLink } from '../../common/Button';
import { Modal } from '../../common/Modal';
import FormIsoRuleUpdate from './FormIsoRuleUpdate';

const GetIsoRule = () => {
  const arrayHeaderRiesgo = ["idrole", "role", "createdate", "updatedate"];
  const location =  useLocation()
  const {id} = useParams()
  const dispatch = useDispatch();
  const { isoRules } = useSelector((state) => state.isoRule);
  const [setshowModalupdateIsoRule, setSetshowModalupdateIsoRule] = useState(false);
  const [setshowModaldeleteIsoRule, setSetshowModaldeleteIsoRule] = useState(false);

  const handleOpenUpdateForm = ()=>{
    setSetshowModalupdateIsoRule(true)
  }
  const handleOpenDeleteForm = ()=>{
    setSetshowModaldeleteIsoRule(true)
  }
  const handleCloseModal = () => {
    setshowModalupdateIsoRule(false);
    setshowModaldeleteIsoRule(false)
  };

  const initialState = useCallback(() => {
    dispatch(GetAllIsoRules());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <div>
      {location.pathname && location.pathname === "/isoRule" ? (
      <><Table
          title={"Lista de las Norma ISO"}
          data={isoRules ? isoRules : ""}
          arrayHeader={arrayHeaderRiesgo}
          handleUpdate={handleOpenUpdateForm}
          handleDelete={handleOpenDeleteForm}
          updateRoute={"/"}
          deleteRoute={"/"} /><Modal
            showModal={setshowModalupdateIsoRule}
            title={"Actualizar regla"}
            onClose={handleCloseModal}
            children={<><p>{id}</p><FormIsoRuleUpdate /></>}
            footer={<><ButtonLink className={"btn btn-primary"} to={"/"} name={"Actualizar"} /><Button className={"btn btn-danger"} onClick={handleCloseModal} children={"Cancelar"} /></>} /><Modal
              showModal={setshowModaldeleteIsoRule}
              title={"Actualizar regla"}
              onClose={handleCloseModal}
              footer={<><ButtonLink className={"btn btn-primary"} to={"/"} name={"Actualizar"} /><Button className={"btn btn-danger"} onClick={handleCloseModal} children={"Cancelar"} /></>}
            >
            <p>¿Desea el eliminar la norma ISO con el{id}?</p>
          </Modal></>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default GetIsoRule