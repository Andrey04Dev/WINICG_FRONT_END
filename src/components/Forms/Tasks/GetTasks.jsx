import React from 'react'
import Table from '../../common/Table'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { GetAllTask } from '../../../redux/taskSlice';
import { Button, Modal } from 'bootstrap';
import FormTaskUpdate from './FormTaskUpdate';
import { ButtonLink } from '../../common/Button';

const GetTasks = () => {
  const arrayHeaderTareas = ["idrole", "role", "createdate", "updatedate"];
  const {id} = useParams()
  const dispatch = useDispatch();
  const { Task } = useSelector((state) => state.tasks);
  const [setshowModalupdateTask, setSetshowModalupdateTask] = useState(false);
  const [setshowModaldeleteTask, setSetshowModaldeleteTask] = useState(false);

  const handleOpenUpdateForm = ()=>{
    setSetshowModalupdateTask(true)
  }
  const handleOpenDeleteForm = ()=>{
    setSetshowModaldeleteTask(true)
  }
  const handleCloseModal = () => {
    setshowModalupdateTask(false);
    setshowModaldeleteTask(false)
  };

  const initialState = useCallback(() => {
    dispatch(GetAllTask());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <div>
      <Table
        title={"Lista de Tareas"}
        data={Task}
        arrayHeader={arrayHeaderTareas}
        handleUpdate={handleOpenUpdateForm}
        handleDelete={handleOpenDeleteForm}
        updateRoute={"/"}
        deleteRoute={"/"}
      />
      <Modal
        showModal={setshowModalupdateTask}
        title={"Actualizar tarea"}
        onClose={handleCloseModal}
        children={ <><p>{id}</p><FormTaskUpdate /></>}
        footer={<><ButtonLink className={"btn btn-primary"} to={"/"} name={"Actualizar"}/><Button className={"btn btn-danger"} onClick={handleCloseModal} children={"Cancelar"}/></>}
      />
      <Modal
        showModal={setshowModaldeleteTask}
        title={"Actualizar tarea"}
        onClose={handleCloseModal}
        footer={<><ButtonLink className={"btn btn-primary"} to={"/"} name={"Actualizar"}/><Button className={"btn btn-danger"} onClick={handleCloseModal} children={"Cancelar"}/></>}
      >
        <p>¿Desea el eliminar la tarea con el{id}?</p>
      </Modal>
    </div>
  );
}

export default GetTasks