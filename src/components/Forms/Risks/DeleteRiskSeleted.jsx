import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DeleteRisk, GetAllRisk, GetRiskById } from '../../../redux/risksSlice'
import { Button, ButtonLink } from '../../common/Button'
import { Modal } from '../../common/Modal'

const DeleteRiskSeleted = () => {
    const dispatch =  useDispatch()
    const { message} =  useSelector(state => state.risk)
    const [deleteIsoRiskInfo, setDeleteIsoRiskInfo] = useState()

    const [setshowModaldeleteRisk, setSetshowModaldeleteRisk] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState(false)
    const{id} = useParams();

    const initialization = useCallback(() => {
        dispatch(GetRiskById(id))
          .unwrap()
          .then((res) => {
            setDeleteIsoRiskInfo(res)
            console.log(res)
          });
      }, [dispatch, id]);

    const handleDeleteRisk =() =>{
        dispatch(DeleteRisk(id))
        setDeleteMessage(!deleteMessage)
    }
      const reloadRisk = () => {
        dispatch(GetAllRisk())
      }

      const handleOpenModalRisk = () =>{
        setSetshowModaldeleteRisk(true)
      }
    
      const handleOnCloseModalRisk = () =>{
        setSetshowModaldeleteRisk(false)
      }
    
      useEffect(() => {
        initialization();
        return () => {};
      }, [initialization]);

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='d-flex flex-column justify-content-center'>
            <Fragment >
            <p ><b>ID del riesgo:</b> {deleteIsoRiskInfo?.idrisks}</p>
            <p><b>Norma ISO:</b> {deleteIsoRiskInfo?.isorule?.namerule}</p>
            <p><b>Origen:</b> {deleteIsoRiskInfo?.origen}</p>
            <p><b>Título del riesgo:</b> {deleteIsoRiskInfo?.namerisks}</p>
            <p><b>Consecuencia:</b> {deleteIsoRiskInfo?.consequense }</p>
            <p><b>Fuente:</b> {deleteIsoRiskInfo?.sourcE_RISK }</p>
            <p><b>Estado:</b> {deleteIsoRiskInfo?.state }</p>
            </Fragment>
            <div className='d-flex '>
            <Button className={ "btn btn-primary me-3"} children={"Eliminar"} onClick={handleOpenModalRisk}/>
            <ButtonLink to={"/risks"} className={"btn btn-danger"} onClick={reloadRisk} name={"Cancelar"}/>
            </div>
        </div>
        <Modal
            size={"modal-dialog-centered"}
            showModal={setshowModaldeleteRisk}
            title={"Eliminar riesgo"}
            onClose={handleOnCloseModalRisk}
            footer={
              <>
                {deleteMessage === true ? <ButtonLink
                  className={"btn btn-primary"}
                  to={"/risks"}
                  onClick={reloadRisk}
                  name={"Si"}
                />:<Button
                  className={"btn btn-primary"}
                  onClick={handleDeleteRisk}
                  children={"Si"}
                />}
                <Button
                  className={"btn btn-danger"}
                  onClick={handleOnCloseModalRisk}
                  children={"No"}
                />
              </>
            }
          >
            {deleteMessage === false ? `¿Está seguro que desea eliminar el riesgo?`:<p className="text-center">{message}</p> }
          </Modal>
    </div>
  )
}

export default DeleteRiskSeleted