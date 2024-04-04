import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { GetAllPositions } from '../../../redux/positionSlice';
import { ButtonLink } from '../../common/Button';
import Table from '../../common/Table';
import TableExample from '../../common/TableExample';
import { ColumnPosition } from '../../data/ColumnPosition';

const GetPosition = () => {
    const arrayHeaderPosition = ["idposition", "positionjob", "description","area","personchange","createdate", "updatedate"];
  const location = useLocation();
  const dispatch = useDispatch();
  const { Positions } = useSelector((state) => state.position);

  const initialState = useCallback(() => {
    dispatch(GetAllPositions());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <>
      {location.pathname && location.pathname === "/position" ? (
        <>
        {Positions=== "" ? null : (
            <ButtonLink
              name={"Agregar posición"}
              className="btn btn-success float-end my-3"
              to={"/position/addPosition"}
            />
          )}
          <TableExample data={Positions} column={ColumnPosition}/>
        </>
      ) : (
        <Outlet />
      )}
    </>
  )
}

export default GetPosition