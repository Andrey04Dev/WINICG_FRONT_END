import React, { useCallback, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { ButtonLink } from '../../common/Button';
import { GetAllProcess } from '../../../redux/processSlice';
import { useDispatch, useSelector } from 'react-redux';
import TableExample from '../../common/TableExample';
import { ColumnProcess } from '../../data/ColumnProcess';

const GetProcess = () => {
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
    <>
        {location.pathname && location.pathname === "/process" ? (
        <>
        {Process=== "" ? null : (
            <ButtonLink
              name={"Agregar proceso"}
              className="btn btn-success float-end my-3"
              to={"/process/addProcess"}
            />
          )}
          <TableExample data={Process} column={ColumnProcess}/>
        </>
      ) : (
        <Outlet/>
      )}
    </>
  )
}

export default GetProcess