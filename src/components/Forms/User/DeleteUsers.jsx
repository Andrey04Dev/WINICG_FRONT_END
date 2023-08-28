import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetUserById, DeleteUser, GetAllUser } from '../../../redux/userSlice'
import { Button, ButtonLink } from '../../common/Button'
import { Modal } from '../../common/Modal'

const DeleteUsers = () => {
    const dispatch =  useDispatch()
    const { message} =  useSelector(state => state.users)
    const [deleteUserInfo, setDeleteUserInfo] = useState()
    const [setshowModaldeleteUser, setSetshowModaldeleteUser] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState(false)
    const{id} = useParams();

    const initialization = useCallback(() => {
        dispatch(GetUserById(id))
          .unwrap()
          .then((res) => setDeleteUserInfo(res));
      }, [dispatch, id]);

    const handleDeleteUser =() =>{
        dispatch(DeleteUser(id))
        setDeleteMessage(!deleteMessage)
    }
      const reloadUser = () => {
        dispatch(GetAllUser())
      }

      const handleOpenModalUser = () =>{
        setSetshowModaldeleteUser(true)
      }
    
      const handleOnCloseModalUser = () =>{
        setSetshowModaldeleteUser(false)
      }
    
      useEffect(() => {
        initialization();
        return () => {};
      }, [initialization]);

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='d-flex flex-column justify-content-center'>
            <p><b>ID usuario:</b> {deleteUserInfo?.iduser}</p>
            <p><b>Rol:</b> {deleteUserInfo?.role.role}</p>
            <p><b>Cedula:</b> {deleteUserInfo?.cedula}</p>
            <p><b>Nombre:</b> {deleteUserInfo?.fullname}</p>
            <p><b>Estado:</b> {deleteUserInfo?.active === false? "Inactivo": "Activo"}</p>
            <div className='d-flex '>
            <Button className={ "btn btn-primary me-3"} children={"Eliminar"} onClick={handleOpenModalUser}/>
            <ButtonLink to={"/users"} className={"btn btn-danger"} onClick={reloadUser} name={"Cancelar"}/>
            </div>
        </div>
        <Modal
            size={"modal-dialog-centered"}
            showModal={setshowModaldeleteUser}
            title={"Eliminar rol"}
            onClose={handleOnCloseModalUser}
            footer={
              <>
                {deleteMessage === true ? <ButtonLink
                  className={"btn btn-primary"}
                  to={"/users"}
                  onClick={reloadUser}
                  name={"Si"}
                />:<Button
                  className={"btn btn-primary"}
                  onClick={handleDeleteUser}
                  children={"Si"}
                />}
                <Button
                  className={"btn btn-danger"}
                  onClick={handleOnCloseModalUser}
                  children={"No"}
                />
              </>
            }
          >
            {deleteMessage === false ? `¿Está seguro que desea eliminar el usuario?`:<p className="text-center">{message}</p> }
          </Modal>
    </div>
  )
}

export default DeleteUsers