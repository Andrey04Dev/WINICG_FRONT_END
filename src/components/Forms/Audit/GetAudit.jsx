import React, { useCallback, useEffect, useState } from "react";
import Table from "../../common/Table";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAllAudits } from "../../../redux/auditSlice";
import { Modal } from "../../common/Modal";
import { Button, ButtonLink } from "../../common/Button";
import FormIsoRuleUpdate from "../IsoRule/FormIsoRuleUpdate";

const GetAudit = () => {
  const arrayHeaderRiesgo = [
    "idaudit",
    "nameaudit",
    "audit_date",
    "audit_time",
    "topic_audit",
    "number_day",
    "kind_audit",
    "goal_audit",
    "audit_process",
    "isorule",
  ];
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { audits } = useSelector((state) => state.audit);
  const [setshowModalupdateAudit, setSetshowModalupdateAudit] = useState(false);
  const [setshowModaldeleteAudit, setSetshowModaldeleteAudit] = useState(false);

  const handleOpenUpdateForm = () => {
    setSetshowModalupdateAudit(true);
  };
  const handleOpenDeleteForm = () => {
    setSetshowModaldeleteAudit(true);
  };
  const handleCloseModalUpdate = () => {
    setSetshowModalupdateAudit(false);
  };
  const handleCloseModalDelete = () => {
    setSetshowModaldeleteAudit(false);
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
      {location.pathname && location.pathname === "/audit" ? (
        <>
          <Table
            title={"Lista de auditorías"}
            data={audits}
            arrayHeader={arrayHeaderRiesgo}
            handleUpdate={handleOpenUpdateForm}
            handleDelete={handleOpenDeleteForm}
            addRoute={"addAudit"}
            updateRoute={"/"}
            deleteRoute={"/"}
          />
          <Modal
            showModal={setshowModalupdateAudit}
            title={"Actualizar regla"}
            onClose={handleCloseModalUpdate}
            children={
              <>
                <p>{id}</p>
                <FormIsoRuleUpdate />
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
            showModal={setshowModaldeleteAudit}
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
  );
};

export default GetAudit;
