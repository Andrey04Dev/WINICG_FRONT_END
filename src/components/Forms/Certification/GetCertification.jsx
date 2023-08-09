import React, { useCallback, useEffect, useState } from 'react'
import Table from '../../common/Table'
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCertification } from '../../../redux/certificationSlice';
import { Button, ButtonLink } from '../../common/Button';
import { Modal } from '../../common/Modal';
import FormCertificationUpdate from '../Certification/FormCertificationUpdate';

const GetCertification = () => {
  const arrayHeaderRiesgo = ["idaudit", "nameaudit", "audit_date", "audit_time", "topic_audit", "number_day","kind_audit","goal_audit","audit_process","isorule"];
  const location =  useLocation()
  const {id} = useParams()
  const dispatch = useDispatch();
  const { certification } = useSelector((state) => state.certification);
  const [setshowModalupdateCertification, setSetshowModalupdateCertification] = useState(false);
  const [setshowModaldeleteCertification, setSetshowModaldeleteCertification] = useState(false);

  const handleOpenUpdateForm = ()=>{
    setSetshowModalupdateCertification(true)
  }
  const handleOpenDeleteForm = ()=>{
    setSetshowModaldeleteCertification(true)
  }
  const handleCloseModalUpdate = () => {
    setSetshowModalupdateCertification(false)
  };
  const handleCloseModalDelete = () => {
    setSetshowModaldeleteCertification(false)
  };

  const initialState = useCallback(() => {
    dispatch(GetAllCertification());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <div>
        {location.pathname && location.pathname === "/certification" ? (
        <>
          <Table
            title={"Lista de certificaciones"}
            data={certification}
            arrayHeader={arrayHeaderRiesgo}
            handleUpdate={handleOpenUpdateForm}
            handleDelete={handleOpenDeleteForm}
            addRoute={"addCertification"}
            updateRoute={"/"}
            deleteRoute={"/"}
          />
          <Modal
            showModal={setshowModalupdateCertification}
            title={"Actualizar regla"}
            onClose={handleCloseModalUpdate}
            children={
              <>
                <p>{id}</p>
                <FormCertificationUpdate />
              </>
            }
            footer={
              <>
                <ButtonLink
                  className={"btn btn-primary"}
                  to={"/"}
                  name={"Actualizar"}
                />
                <Button
                  className={"btn btn-danger"}
                  onClick={handleCloseModalUpdate}
                  children={"Cancelar"}
                />
              </>
            }
          />
          <Modal
            showModal={setshowModaldeleteCertification}
            title={"Actualizar regla"}
            onClose={handleCloseModalDelete}
            footer={
              <>
                <ButtonLink
                  className={"btn btn-primary"}
                  to={"/"}
                  name={"Actualizar"}
                />
                <Button
                  className={"btn btn-danger"}
                  onClick={handleCloseModalDelete}
                  children={"Cancelar"}
                />
              </>
            }
          >
            <p>¿Desea el eliminar la auditoría con el{id}?</p>
          </Modal>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default GetCertification