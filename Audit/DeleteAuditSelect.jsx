import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, ButtonLink } from '../../common/Button'
import { DeleteAudit, GetAllAudits, GetAuditById } from '../../../redux/auditSlice'
import { Modal } from '../../common/Modal'

const DeleteAuditSelect = () => {
  const dispatch =  useDispatch()
  const { message} =  useSelector(state => state.audit)
  const [deleteAuditInfo, setDeleteAudit] = useState()
  const [setshowModaldeleteAudit, setSetshowModaldeleteAudit] = useState(false)
  const [deleteMessage, setDeleteMessage] = useState(false)
  const{id} = useParams();

  const initialization = useCallback(() => {
      dispatch(GetAuditById(id))
        .unwrap()
        .then((res) => setDeleteAudit(res));
    }, [dispatch, id]);

  const handleDeleteAudit =() =>{
      dispatch(DeleteAudit(id))
      setDeleteMessage(!deleteMessage)
  }
    const reloadAudit= () => {
      dispatch(GetAllAudits())
    }

    const handleOpenModalAudit = () =>{
      setSetshowModaldeleteAudit(true)
    }
  
    const handleOnCloseModalAudit = () =>{
      setSetshowModaldeleteAudit(false)
    }
  
    const ConvertDate= (date) => {
      const GetDate =  new Date(date)
      return GetDate.toLocaleDateString("es-MX")
  }
    useEffect(() => {
      initialization();
      return () => {};
    }, [initialization]);
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
      <div className='d-flex flex-column justify-content-center'>
            <Fragment >
            <p><b>ID de la auditoría:</b> {deleteAuditInfo?.idaudits}</p>
            <p><b>Nombre de la auditoría:</b> {deleteAuditInfo?.audiT_NAME}</p>
            <p><b>Fecha:</b> {ConvertDate(deleteAuditInfo?.audiT_DATE)}</p>
            <p><b>Hora:</b> {deleteAuditInfo?.audiT_TIME}</p>
            <p><b>Asunto:</b> {deleteAuditInfo?.audiT_SUBJECT }</p>
            <p><b>Cantidad de días:</b> {deleteAuditInfo?.numbeR_DAYS }</p>
            <p><b>Tipo de auditoría:</b> {deleteAuditInfo?.kinD_AUDIT }</p>
            <p><b>Alcance de auditoría:</b> {deleteAuditInfo?.scopE_AUDIT }</p>
            <p><b>Proceso de auditoría:</b> {deleteAuditInfo?.audiT_PROCESS }</p>
            <p><b>Norma evaluada:</b> {deleteAuditInfo?.audiT_RULE }</p>
            </Fragment>
            <div className='d-flex '>
            <Button className={ "btn btn-primary me-3"} children={"Eliminar"} onClick={handleOpenModalAudit}/>
            <ButtonLink to={"/audit"} className={"btn btn-danger"} onClick={reloadAudit} name={"Cancelar"}/>
            </div>
        </div>
       <Modal
            size={"modal-dialog-centered"}
            showModal={setshowModaldeleteAudit}
            title={"Eliminar Auditoría"}
            onClose={handleOnCloseModalAudit}
            footer={
              <>
                {deleteMessage === true ? <ButtonLink
                  className={"btn btn-primary"}
                  to={"/audit"}
                  onClick={reloadAudit}
                  name={"Si"}
                />:<Button
                  className={"btn btn-primary"}
                  onClick={handleDeleteAudit}
                  children={"Si"}
                />}
                <Button
                  className={"btn btn-danger"}
                  onClick={handleOnCloseModalAudit}
                  children={"No"}
                />
              </>
            }
          >
            {deleteMessage === false ? `¿Está seguro que desea eliminar esta certificación?`:<p className="text-center">{message}</p> }
          </Modal>
    </div>
  )
}

export default DeleteAuditSelect