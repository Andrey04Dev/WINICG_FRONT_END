import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DeleteNoAccordance, GetAllNoAccordance, GetNoAccordanceById } from '../../../redux/noAccordanceSlice'
import { Button, ButtonLink } from '../../common/Button'
import { Modal } from '../../common/Modal'

const DeleteNoAccordanceSelect = () => {
    const dispatch =  useDispatch()
    const { message} =  useSelector(state => state.isoRule)
    const [deleteAccordanceInfo, setDeleteAccordanceInfo] = useState()
    const [setshowModaldeleteAccordance, setSetshowModaldeleteAccordance] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState(false)
    const{id} = useParams();

    const initialization = useCallback(() => {
        dispatch(GetNoAccordanceById(id))
          .unwrap()
          .then((res) => setDeleteAccordanceInfo(res));
      }, [dispatch, id]);

    const handleDeleteNoAccordance =() =>{
        dispatch(DeleteNoAccordance(id))
        setDeleteMessage(!deleteMessage)
    }
      const reloadNoAccordance = () => {
        dispatch(GetAllNoAccordance())
      }

      const handleOpenModalNoAccordance = () =>{
        setSetshowModaldeleteAccordance(true)
      }
    
      const handleOnCloseModalNoAccordance = () =>{
        setSetshowModaldeleteAccordance(false)
      }
    
      useEffect(() => {
        initialization();
        return () => {};
      }, [initialization]);

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='d-flex flex-column justify-content-center'>
            <p ><b>ID de la no conformidad:</b> {deleteAccordanceInfo?.idaccordance}</p>
            <p><b>Persona a cargo:</b> {deleteAccordanceInfo?.process.processname}</p>
            <p><b>Auditoría:</b> {deleteAccordanceInfo?.audits?.audiT_NAME}</p>
            <p><b>Tarea:</b> {deleteAccordanceInfo?.tasks?.project}</p>
            <p><b>No conformidad:</b> {deleteAccordanceInfo?.namE_NO_ACCORDANCE}</p>
            <p><b>Tipo:</b> {deleteAccordanceInfo?.kind === 1 ? "Mayor": "Menor"}</p>
            <p><b>Descripción:</b> {deleteAccordanceInfo?.description}</p>
            <p><b>Estado:</b> {deleteAccordanceInfo?.state ===1 ? "Abierto" : "Cerrado"}</p>
            <p><b>Clasificación:</b> {deleteAccordanceInfo?.ranking }</p>
            <p><b>Audior/a:</b> {deleteAccordanceInfo?.audiT_DETECT }</p>
            <div className='d-flex '>
            <Button className={ "btn btn-primary me-3"} children={"Eliminar"} onClick={handleOpenModalNoAccordance}/>
            <ButtonLink to={"/isoRule"} className={"btn btn-danger"} onClick={reloadNoAccordance} name={"Cancelar"}/>
            </div>
        </div>
        <Modal
            size={"modal-dialog-centered"}
            showModal={setshowModaldeleteAccordance}
            title={"Eliminar no conformidad"}
            onClose={handleOnCloseModalNoAccordance}
            footer={
              <>
                {deleteMessage === true ? <ButtonLink
                  className={"btn btn-primary"}
                  to={"/noAccordance"}
                  onClick={reloadNoAccordance}
                  name={"Si"}
                />:<Button
                  className={"btn btn-primary"}
                  onClick={handleDeleteNoAccordance}
                  children={"Si"}
                />}
                <Button
                  className={"btn btn-danger"}
                  onClick={handleOpenModalNoAccordance}
                  children={"No"}
                />
              </>
            }
          >
            {deleteMessage === false ? `¿Está seguro que desea eliminar esta no conformidad?`:<p className="text-center">{message}</p> }
          </Modal>
    </div>
  )
}

export default DeleteNoAccordanceSelect