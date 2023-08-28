import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteRoles, GetAllRoles, GetRolesById } from '../../../redux/rolesSlice'
import { useParams } from 'react-router-dom'
import { Button, ButtonLink } from '../../common/Button'
import { Modal } from '../../common/Modal'

const DeleteRole = () => {
    const dispatch =  useDispatch()
    const { message} =  useSelector(state => state.roles)
    const [deleteRoleInfo, setDeleteRoleInfo] = useState()
    const [setshowModaldeleteRole, setSetshowModaldeleteRole] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState(false)
    const{id} = useParams();

    const initialization = useCallback(() => {
        dispatch(GetRolesById(id))
          .unwrap()
          .then((res) => setDeleteRoleInfo(res));
      }, [dispatch, id]);
    const handleDeleteRole =() =>{
        dispatch(DeleteRoles(id))
        setDeleteMessage(!deleteMessage)
    }
      const reloadRole = () => {
        dispatch(GetAllRoles())
      }

      const handleOpenModalRole = () =>{
        setSetshowModaldeleteRole(true)
      }
    
      const handleOnCloseModalRole = () =>{
        setSetshowModaldeleteRole(false)
      }
    
      useEffect(() => {
        initialization();
        return () => {};
      }, [initialization]);

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='d-flex flex-column justify-content-center'>
            <p><b>ID:</b> {deleteRoleInfo?.idrole}</p>
            <p><b>Rol:</b> {deleteRoleInfo?.role}</p>
            <div className='d-flex '>
            <Button className={ "btn btn-primary me-3"} children={"Eliminar"} onClick={handleOpenModalRole}/>
            <ButtonLink to={"/roles"} className={"btn btn-danger"} name={"Cancelar"}/>
            </div>
        </div>
        <Modal
            size={"modal-dialog-centered"}
            showModal={setshowModaldeleteRole}
            title={"Eliminar rol"}
            onClose={handleOnCloseModalRole}
            footer={
              <>
                {deleteMessage === true ? <ButtonLink
                  className={"btn btn-primary"}
                  to={"/roles"}
                  onClick={reloadRole}
                  name={"Si"}
                />:<Button
                  className={"btn btn-primary"}
                  onClick={handleDeleteRole}
                  children={"Si"}
                />}
                <Button
                  className={"btn btn-danger"}
                  onClick={handleOnCloseModalRole}
                  children={"No"}
                />
              </>
            }
          >
            {deleteMessage === false ? `¿Está seguro que desea eliminar el rol?`:<p className="text-center">{message}</p> }
          </Modal>
    </div>
  )
}

export default DeleteRole