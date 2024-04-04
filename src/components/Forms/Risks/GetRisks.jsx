import React from "react";
import Table from "../../common/Table";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useCallback } from "react";
import { GetAllRisk } from "../../../redux/risksSlice";
import { ButtonLink } from "../../common/Button";

const GetRisks = () => {
  const arrayHeaderRiesgo = ["idrisks", "namerule", "origen","namerisk","consequense",'source_risk',"state", "quantity","createdate", "updatedate"];
  const location = useLocation();
  const dispatch = useDispatch();
  const { Risk } = useSelector((state) => state.risk);

  const initialState = useCallback(() => {
    dispatch(GetAllRisk());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <div>
      {location.pathname && location.pathname === "/risks" ? (
        <>
        {Risk=== "" ? null : (
            <ButtonLink
              name={"Agregar riesgo"}
              className="btn btn-success float-end my-3"
              to={"/risks/addRisks"}
            />
          )}
          <Table
            title={"Lista de Riesgos"}
            data={Risk}
            arrayHeader={arrayHeaderRiesgo}
            addRoute={"addRisks"}
            updateRoute={"updateRisks/"}
            deleteRoute={"deleteRisks/"}
            uploadFiles={"addFilesRisks/"}
            showFiles={"showFilesRisk/"}
          />
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default GetRisks;
