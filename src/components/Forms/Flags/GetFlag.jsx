import React, { useCallback, useEffect } from 'react'
import Table from '../../common/Table'
import { Outlet, useLocation } from 'react-router-dom';
import {  ButtonLink } from '../../common/Button';
import { GetAllFlags } from '../../../redux/flagSlice';
import { useDispatch, useSelector } from 'react-redux';

const GetFlag = () => {
  const arrayHeaderPosiiion = ["idflags","namerule","flagname", "createdate", "updatedate"];
  const location =  useLocation()
  const dispatch = useDispatch();
  const { flags } = useSelector((state) => state.flag);



  const initialState = useCallback(() => {
    dispatch(GetAllFlags());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <div>
        {location.pathname && location.pathname === "/flag" ? (
        <>
        {flags === "" ?null: (<ButtonLink name={"Agregar indicaodor"}  className="btn btn-success mt-3 float-end" to={"/flag/addFlag"} />)}
          <Table
            title={"Lista de indicadores"}
            data={flags}
            arrayHeader={arrayHeaderPosiiion}
            addRoute={"addFlag"}
            updateRoute={"updateFlag/"}
            deleteRoute={"deleteFlag/"}
          />
        </>
      ) : (
        <Outlet/>
      )}
    </div>
  )
}

export default GetFlag