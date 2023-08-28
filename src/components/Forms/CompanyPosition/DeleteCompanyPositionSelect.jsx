import React, { useCallback, useEffect, useState } from 'react'
import { DeleteCompanyPosition, GetAllCompanyPosition, GetCompanyPositionById } from '../../../redux/companyPositionSlice'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../common/Modal'
import { Button, ButtonLink } from '../../common/Button'

const DeleteCompanyPositionSelect = () => {
  const dispatch =  useDispatch()
  const { message} =  useSelector(state => state.audit)
  const [deleteComapnyposition, setDeleteComapnyposition] = useState()
  const [setshowModaldeleteCompany, setSetshowModaldeleteCompany] = useState(false)
  const [deleteMessage, setDeleteMessage] = useState(false)
  const{id} = useParams();

  const initialization = useCallback(() => {
      dispatch(GetCompanyPositionById(id))
        .unwrap()
        .then((res) => setDeleteComapnyposition(res));
    }, [dispatch, id]);

  const handleDeleteCompanyPosition =() =>{
      dispatch(DeleteCompanyPosition(id))
      setDeleteMessage(!deleteMessage)
  }
    const reloadCompanyPosition= () => {
      dispatch(GetAllCompanyPosition())
    }

    const handleOpenModalCompanyPoCompany = () =>{
      setSetshowModaldeleteCompany(true)
    }
  
    const handleOnCloseModalCompanyPoCompany = () =>{
      setSetshowModaldeleteCompany(false)
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
    <div className='d-flex justify-content-center align-items-center vh-100'><div className='d-flex flex-column justify-content-center'>
    <p><b>ID del puesto:</b> {deleteComapnyposition?.idcompanY_POSITION}</p>
    <p><b>Nombre de la persona:</b> {deleteComapnyposition?.user?.fullname}</p>
    <p><b>Proceso:</b> {ConvertDate(deleteComapnyposition?.process?.processname)}</p>
    <p><b>Lider a cargo:</b> {deleteComapnyposition?.mandated}</p>
    <p><b>Descripción:</b> {deleteComapnyposition?.description }</p>
    <p><b>Responsabilidades:</b> {deleteComapnyposition?.responsabilities }</p>
    <p><b>Perfil del puesto:</b> {deleteComapnyposition?.profilE_POSITION }</p>
    <div className='d-flex '>
    <Button className={ "btn btn-primary me-3"} children={"Eliminar"} onClick={handleOpenModalCompanyPoCompany}/>
    <ButtonLink to={"/audit"} className={"btn btn-danger"} onClick={reloadCompanyPosition} name={"Cancelar"}/>
    </div>
</div>
<Modal
    size={"modal-dialog-centered"}
    showModal={setshowModaldeleteCompany}
    title={"Eliminar posición de la compañia"}
    onClose={handleOpenModalCompanyPoCompany}
    footer={
      <>
        {deleteMessage === true ? <ButtonLink
          className={"btn btn-primary"}
          to={"/company_position"}
          onClick={reloadCompanyPosition}
          name={"Si"}
        />:<Button
          className={"btn btn-primary"}
          onClick={handleDeleteCompanyPosition}
          children={"Si"}
        />}
        <Button
          className={"btn btn-danger"}
          onClick={handleOnCloseModalCompanyPoCompany}
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

export default DeleteCompanyPositionSelect