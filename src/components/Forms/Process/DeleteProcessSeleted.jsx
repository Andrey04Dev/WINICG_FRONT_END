import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DeleteProcess, GetAllProcess, GetProcessById } from '../../../redux/processSlice'
import { Button, ButtonLink } from '../../common/Button'
import { Modal } from '../../common/Modal'

const DeleteProcessSeleted = () => {
    const dispatch =  useDispatch()
    const { message} =  useSelector(state => state.process)
    const [deleteProcessInfo, setDeleteProcessInfo] = useState()
    const [setshowModaldeleteProcess, setSetshowModaldeleteProcess] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState(false)
    const{id} = useParams();

    const initialization = useCallback(() => {
        dispatch(GetProcessById(id))
          .unwrap()
          .then((res) => setDeleteProcessInfo(res));
      }, [dispatch, id]);

    const handleDeleteProcess =() =>{
        dispatch(DeleteProcess(id))
        setDeleteMessage(!deleteMessage)
    }
      const reloadProcess = () => {
        dispatch(GetAllProcess())
      }

      const handleOpenModalProcess = () =>{
        setSetshowModaldeleteProcess(true)
      }
    
      const handleOnCloseModalProcess = () =>{
        setSetshowModaldeleteProcess(false)
      }
    
      useEffect(() => {
        initialization();
        return () => {};
      }, [initialization]);
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
    <div className='d-flex flex-column justify-content-center'>
        <p ><b>ID del proceso:</b> {deleteProcessInfo?.idprocess}</p>
        <p><b>Norma ISO:</b> {deleteProcessInfo?.isorule?.namerule}</p>
        <p><b>Codigo del proceso:</b> {deleteProcessInfo?.codeprocess}</p>
        <p><b>Person a cargo:</b> {deleteProcessInfo?.chargE_PERSON}</p>
        <p><b>Rol involucrado:</b> {deleteProcessInfo?.rolE_INVOLVES }</p>
        <div className='d-flex '>
        <Button className={ "btn btn-primary me-3"} children={"Eliminar"} onClick={handleOpenModalProcess}/>
        <ButtonLink to={"/process"} className={"btn btn-danger"} onClick={reloadProcess} name={"Cancelar"}/>
        </div>
    </div>
    <Modal
        size={"modal-dialog-centered"}
        showModal={setshowModaldeleteProcess}
        title={"Eliminar el proceso"}
        onClose={handleOnCloseModalProcess}
        footer={
          <>
            {deleteMessage === true ? <ButtonLink
              className={"btn btn-primary"}
              to={"/process"}
              onClick={reloadProcess}
              name={"Si"}
            />:<Button
              className={"btn btn-primary"}
              onClick={handleDeleteProcess}
              children={"Si"}
            />}
            <Button
              className={"btn btn-danger"}
              onClick={handleOnCloseModalProcess}
              children={"No"}
            />
          </>
        }
      >
        {deleteMessage === false ? `¿Está seguro que desea eliminar esta proceso?`:<p className="text-center">{message}</p> }
      </Modal>
</div>
  )
}

export default DeleteProcessSeleted