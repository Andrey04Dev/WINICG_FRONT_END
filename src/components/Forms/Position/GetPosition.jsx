import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { GetAllPositions } from '../../../redux/positionSlice';
import { ButtonLink } from '../../common/Button';
import Table from '../../common/Table';

const GetPosition = () => {
    const arrayHeaderPosition = ["idposition", "positionjob", "description","area","createdate", "updatedate"];
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
    <div>
      {location.pathname && location.pathname === "/position" ? (
        <>
        {Positions=== "" ? null : (
            <ButtonLink
              name={"Agregar posición"}
              className="btn btn-success float-end"
              to={"/position/addPosition"}
            />
          )}
          <Table
            title={"Lista de pociones"}
            data={Positions}
            arrayHeader={arrayHeaderPosition}
            addRoute={"addPosition"}
            updateRoute={"updatePosition/"}
            deleteRoute={"deletePosition/"}
          />
        </>
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default GetPosition