import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DeleteTaskProcess, GetAllTaskProcess, GetTaskByIdProcess } from '../../../redux/taskSlice'
import { Button, ButtonLink } from '../../common/Button'
import { Modal } from '../../common/Modal'

const DeletTaskSelectec = () => {
    const dispatch =  useDispatch()
    const { message} =  useSelector(state => state.tasks)
    const [deleteTaskInfo, setDeleteTaskInfo] = useState()
    const [setshowModaldeleteTask, setSetshowModaldeleteTask] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState(false)
    const{id} = useParams();

    const initialization = useCallback(() => {
        dispatch(GetTaskByIdProcess(id))
          .unwrap()
          .then((res) => setDeleteTaskInfo(res));
      }, [dispatch, id]);

    const handleDeleteTask =() =>{
        dispatch(DeleteTaskProcess(id))
        setDeleteMessage(!deleteMessage)
    }
      const reloadTask = () => {
        dispatch(GetAllTaskProcess())
      }

      const handleOpenModalTask = () =>{
        setSetshowModaldeleteTask(true)
      }
    
      const handleOnCloseModalTask = () =>{
        setSetshowModaldeleteTask(false)
      }
    
      useEffect(() => {
        initialization();
        return () => {};
      }, [initialization]);

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='d-flex flex-column justify-content-center'>
            <p ><b>ID de la tarea:</b> {deleteTaskInfo?.idtask}</p>
            <p><b>Norma ISO:</b> {deleteTaskInfo?.isoRule?.namerule}</p>
            <p><b>Usuario:</b> {deleteTaskInfo?.users.fullname}</p>
            <p><b>Proyecto:</b> {deleteTaskInfo?.proyecto}</p>
            <p><b>Evento:</b> {deleteTaskInfo?.eventTask }</p>
            <div className='d-flex '>
            <Button className={ "btn btn-primary me-3"} children={"Eliminar"} onClick={handleOpenModalTask}/>
            <ButtonLink to={"/tasks"} className={"btn btn-danger"} onClick={reloadTask} name={"Cancelar"}/>
            </div>
        </div>
        <Modal
            size={"modal-dialog-centered"}
            showModal={setshowModaldeleteTask}
            title={"Eliminar tarea"}
            onClose={handleOnCloseModalTask}
            footer={
              <>
                {deleteMessage === true ? <ButtonLink
                  className={"btn btn-primary"}
                  to={"/tasks"}
                  onClick={reloadTask}
                  name={"Si"}
                />:<Button
                  className={"btn btn-primary"}
                  onClick={handleDeleteTask}
                  children={"Si"}
                />}
                <Button
                  className={"btn btn-danger"}
                  onClick={handleOnCloseModalTask}
                  children={"No"}
                />
              </>
            }
          >
            {deleteMessage === false ? `¿Está seguro que desea eliminar esta tarea?`:<p className="text-center">{message}</p> }
          </Modal>
    </div>
  )
}

export default DeletTaskSelectec