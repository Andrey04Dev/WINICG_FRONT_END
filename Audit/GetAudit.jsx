import React, { useCallback, useEffect } from "react";
import Table from "../../common/Table";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAllAudits } from "../../../redux/auditSlice";
import {  ButtonLink } from "../../common/Button";
import TableExample from "../../common/TableExample";
import { ColumnAudit } from "../../data/ColumnAudits";

const GetAudit = () => {
  // const arrayHeaderRiesgo = [
  //   "idaudits",
  //   "nameaudit",
  //   "audit_date",
  //   "audit_time",
  //   "topic_audit",
  //   "number_day",
  //   "kind_audit",
  //   "goal_audit",
  //   "audit_process",
  //   "audit_rule",
  //   "personchange",
  //   "fecha de creación", 
  //   "fecha de actualización", 
  // ];
  const location = useLocation();
  const dispatch = useDispatch();
  const { audits } = useSelector((state) => state.audit);
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
        {audits === "" ?null: (<ButtonLink name={"Agregar auditoría"}  className="btn btn-success mt-3 float-end" to={"/audit/addAudit"} />)}
          {/* <Table
            title={"Lista de auditorías"}
            data={audits}
            arrayHeader={arrayHeaderRiesgo}
            addRoute={"addAudit"}
            updateRoute={"updateAudit/"}
            deleteRoute={"deleteAudit/"}
          /> */}
          <TableExample data={audits} column={ColumnAudit}/>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default GetAudit;
