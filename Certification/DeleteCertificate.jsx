import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DeleteCertification, GetAllCertification, GetCertificationById } from '../../../redux/certificationSlice'
import { Button, ButtonLink } from '../../common/Button'
import { Modal } from '../../common/Modal'

const DeleteCertificate = () => {
    const dispatch =  useDispatch()
    const { message} =  useSelector(state => state.certification)
    const [deleteCertification, setDeleteCertification] = useState()
    const [setshowModaldeleteCertification, setSetshowModaldeleteCertification] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState(false)
    const{id} = useParams();

    const initialization = useCallback(() => {
        dispatch(GetCertificationById(id))
          .unwrap()
          .then((res) => setDeleteCertification(res));
      }, [dispatch, id]);

    const handleDeleteCertification =() =>{
        dispatch(DeleteCertification(id))
        setDeleteMessage(!deleteMessage)
    }
      const reloadCertification= () => {
        dispatch(GetAllCertification())
      }

      const handleOpenModalCertification = () =>{
        setSetshowModaldeleteCertification(true)
      }
    
      const handleOnCloseModalCertification = () =>{
        setSetshowModaldeleteCertification(false)
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
            <p><b>ID de la certificación:</b> {deleteCertification?.idcertification}</p>
            <p><b>Nombre de la certificación:</b> {deleteCertification?.certificatioN_NAME}</p>
            <p><b>Fecha que obtuvo:</b> {ConvertDate(deleteCertification?.certificacioN_DATE)}</p>
            </Fragment>
            <div className='d-flex '>
            <Button className={ "btn btn-primary me-3"} children={"Eliminar"} onClick={handleOpenModalCertification}/>
            <ButtonLink to={"/certification"} className={"btn btn-danger"} onClick={reloadCertification} name={"Cancelar"}/>
            </div>
        </div>
        <Modal
            size={"modal-dialog-centered"}
            showModal={setshowModaldeleteCertification}
            title={"Eliminar Certificación"}
            onClose={handleOnCloseModalCertification}
            footer={
              <>
                {deleteMessage === true ? <ButtonLink
                  className={"btn btn-primary"}
                  to={"/certification"}
                  onClick={reloadCertification}
                  name={"Si"}
                />:<Button
                  className={"btn btn-primary"}
                  onClick={handleDeleteCertification}
                  children={"Si"}
                />}
                <Button
                  className={"btn btn-danger"}
                  onClick={handleOnCloseModalCertification}
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

export default DeleteCertificate