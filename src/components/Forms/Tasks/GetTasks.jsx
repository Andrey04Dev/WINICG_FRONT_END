import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useEffect } from 'react';
import {  GetAllTaskProcess } from '../../../redux/taskSlice';
import { ButtonLink } from '../../common/Button';
import TableExample from "../../common/TableExample";
import { ColumnTask } from '../../data/ColumnTask';

const GetTasks = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { Task } = useSelector((state) => state.tasks);
  const initialState = useCallback(() => {
    dispatch(GetAllTaskProcess());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <>
      {location.pathname && location.pathname === "/tasks" ? (
      <>
      {Task=== "" ? null : (
            <ButtonLink
              name={"Agregar tarea"}
              className="btn btn-success float-end my-3"
              to={"/tasks/addTasks"}
            />
          )}
          <TableExample data={Task} column={ColumnTask}/>
          </>
      ) : (
        <Outlet/>
      )}
    </>
  );
}

export default GetTasks