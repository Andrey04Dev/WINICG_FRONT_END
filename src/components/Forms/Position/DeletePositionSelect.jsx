import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DeletePosition, GetAllPositions, GetPositionById } from '../../../redux/positionSlice'
import { Button, ButtonLink } from '../../common/Button'
import { Modal } from '../../common/Modal'

const DeletePositionSelect = () => {
    const dispatch =  useDispatch()
    const { message} =  useSelector(state => state.position)
    const [deleteIsoPositionInfo, setDeleteIsoPositionInfo] = useState()

    const [setshowModaldeletePosition, setSetshowModaldeletePosition] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState(false)
    const{id} = useParams();

    const initialization = useCallback(() => {
        dispatch(GetPositionById(id))
          .unwrap()
          .then((res) => {
            setDeleteIsoPositionInfo(res)
            console.log(res)
          });
      }, [dispatch, id]);

    const handleDeletePosition =() =>{
        dispatch(DeletePosition(id))
        setDeleteMessage(!deleteMessage)
    }
      const reloadPosition = () => {
        dispatch(GetAllPositions())
      }

      const handleOpenModalPosition = () =>{
        setSetshowModaldeletePosition(true)
      }
    
      const handleOnCloseModalPosition = () =>{
        setSetshowModaldeletePosition(false)
      }
    
      useEffect(() => {
        initialization();
        return () => {};
      }, [initialization]);
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='d-flex flex-column justify-content-center'>
            <p ><b>ID de la posicion:</b> {deleteIsoPositionInfo?.idposition}</p>
            <p><b>Posición:</b> {deleteIsoPositionInfo?.positionjob}</p>
            <p><b>Descripción:</b> {deleteIsoPositionInfo?.description}</p>
            <p><b>Área:</b> {deleteIsoPositionInfo?.area}</p>
            <div className='d-flex '>
            <Button className={ "btn btn-primary me-3"} children={"Eliminar"} onClick={handleOpenModalPosition}/>
            <ButtonLink to={"/position"} className={"btn btn-danger"} onClick={reloadPosition} name={"Cancelar"}/>
            </div>
        </div>
        <Modal
            size={"modal-dialog-centered"}
            showModal={setshowModaldeletePosition}
            title={"Eliminar posición"}
            onClose={handleOnCloseModalPosition}
            footer={
              <>
                {deleteMessage === true ? <ButtonLink
                  className={"btn btn-primary"}
                  to={"/position"}
                  onClick={reloadPosition}
                  name={"Si"}
                />:<Button
                  className={"btn btn-primary"}
                  onClick={handleDeletePosition}
                  children={"Si"}
                />}
                <Button
                  className={"btn btn-danger"}
                  onClick={handleOnCloseModalPosition}
                  children={"No"}
                />
              </>
            }
          >
            {deleteMessage === false ? `¿Está seguro que desea eliminar el posición?`:<p className="text-center">{message}</p> }
          </Modal>
    </div>
  )
}

export default DeletePositionSelect