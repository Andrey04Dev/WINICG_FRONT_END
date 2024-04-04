import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DeleteFlags, GetAllFlags, GetFlagsById } from '../../../redux/flagSlice'
import { Button, ButtonLink } from '../../common/Button'
import { Modal } from '../../common/Modal'

const DeleteFlagSelect = () => {
    const dispatch =  useDispatch()
    const { message} =  useSelector(state => state.flag)
    const [deleteFlag, setDeleteFlag] = useState()
    const [setshowModaldeFlag, setSetshowModaldeFlag] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState(false)
    const{id} = useParams();

    const initialization = useCallback(() => {
        dispatch(GetFlagsById(id))
          .unwrap()
          .then((res) => setDeleteFlag(res));
      }, [dispatch, id]);

    const handleDeleteFlag =() =>{
        dispatch(DeleteFlags(id))
        setDeleteMessage(!deleteMessage)
    }
      const reloadFlag = () => {
        dispatch(GetAllFlags())
      }

      const handleOpenModalFlag = () =>{
        setSetshowModaldeFlag(true)
      }
    
      const handleOnCloseModalFlag = () =>{
        setSetshowModaldeFlag(false)
      }
    
      useEffect(() => {
        initialization();
        return () => {};
      }, [initialization]);

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='d-flex flex-column justify-content-center'>
            <Fragment >
            <p><b>ID del indicador:</b> {deleteFlag?.idflags}</p>
            <p><b>Nomra ISO:</b> {deleteFlag?.idrule}</p>
            <p><b>Nombre del indicador:</b> {deleteFlag?.flagname}</p>
            </Fragment>
            <div className='d-flex '>
            <Button className={ "btn btn-primary me-3"} children={"Eliminar"} onClick={handleOpenModalFlag}/>
            <ButtonLink to={"/flag"} className={"btn btn-danger"} onClick={reloadFlag} name={"Cancelar"}/>
            </div>
        </div>
        <Modal
            size={"modal-dialog-centered"}
            showModal={setshowModaldeFlag}
            title={"Eliminar indicador"}
            onClose={handleOnCloseModalFlag}
            footer={
              <>
                {deleteMessage === true ? <ButtonLink
                  className={"btn btn-primary"}
                  to={"/flag"}
                  onClick={reloadFlag}
                  name={"Si"}
                />:<Button
                  className={"btn btn-primary"}
                  onClick={handleDeleteFlag}
                  children={"Si"}
                />}
                <Button
                  className={"btn btn-danger"}
                  onClick={handleOnCloseModalFlag}
                  children={"No"}
                />
              </>
            }
          >
            {deleteMessage === false ? `¿Está seguro que desea eliminar este indicador?`:<p className="text-center">{message}</p> }
          </Modal>
    </div>
  )
}

export default DeleteFlagSelect