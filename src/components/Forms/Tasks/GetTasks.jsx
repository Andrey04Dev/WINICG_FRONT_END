import React from 'react'
import Table from '../../common/Table'
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useEffect } from 'react';
import {  GetAllTaskProcess } from '../../../redux/taskSlice';
import { ButtonLink } from '../../common/Button';

const GetTasks = () => {
  const arrayHeaderTareas = ["idtask", "fullname", "idrule","idflags","project", "event_task","createdate", "updatedate"];
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
    <div>
      {location.pathname && location.pathname === "/tasks" ? (
      <>
      {Task=== "" ? null : (
            <ButtonLink
              name={"Agregar tarea"}
              className="btn btn-success float-end"
              to={"/tasks/addTasks"}
            />
          )}
      <Table
          title={"Lista de Tareas"}
          data={Task}
          arrayHeader={arrayHeaderTareas}
          addRoute={"addTasks"}
          updateRoute={"updateTasks/"}
          deleteRoute={"deleteTasks/"} /></>
      ) : (
        <Outlet/>
      )}
    </div>
  );
}

export default GetTasks