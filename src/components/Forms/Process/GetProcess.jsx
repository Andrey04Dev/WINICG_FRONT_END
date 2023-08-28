import React, { useCallback, useEffect } from 'react'
import Table from '../../common/Table'
import { Outlet, useLocation } from 'react-router-dom';
import { ButtonLink } from '../../common/Button';
import { GetAllProcess } from '../../../redux/processSlice';
import { useDispatch, useSelector } from 'react-redux';

const GetProcess = () => {
  const arrayHeaderPosiiion = ["idprocess","namerule","codeprocess","charge_person", "role_involves","createdate", "updatedate"];
  const location =  useLocation()
  const dispatch = useDispatch();
  const { Process } = useSelector((state) => state.process);

  const initialState = useCallback(() => {
    dispatch(GetAllProcess());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <div>
        {location.pathname && location.pathname === "/process" ? (
        <>
        {Process=== "" ? null : (
            <ButtonLink
              name={"Agregar proceso"}
              className="btn btn-success float-end"
              to={"/process/addProcess"}
            />
          )}
          <Table
            title={"Lista de procesos"}
            data={Process}
            arrayHeader={arrayHeaderPosiiion}
            addRoute={"addProcess"}
            updateRoute={"updateProcess/"}
            deleteRoute={"deleteProcess/"}
          />
        </>
      ) : (
        <Outlet/>
      )}
    </div>
  )
}

export default GetProcess