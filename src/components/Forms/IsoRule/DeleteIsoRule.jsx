import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DeleteIsoRules, GetAllIsoRules, GetIsoRulesById } from '../../../redux/isoRuleSlice'
import { Button, ButtonLink } from '../../common/Button'
import { Modal } from '../../common/Modal'

const DeleteIsoRule = () => {
    const dispatch =  useDispatch()
    const { message} =  useSelector(state => state.isoRule)
    const [deleteIsoRuleInfo, setDeleteIsoRuleInfo] = useState()
    const [setshowModaldeleteUser, setSetshowModaldeleteUser] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState(false)
    const{id} = useParams();

    const initialization = useCallback(() => {
        dispatch(GetIsoRulesById(id))
          .unwrap()
          .then((res) => setDeleteIsoRuleInfo(res));
      }, [dispatch, id]);

    const handleDeleteIsoRule =() =>{
        dispatch(DeleteIsoRules(id))
        setDeleteMessage(!deleteMessage)
    }
      const reloadIsoRule = () => {
        dispatch(GetAllIsoRules())
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
        {deleteIsoRuleInfo && Object.values(deleteIsoRuleInfo).map((deleteIsoRule, i)=>(
            <Fragment key={i}>
            <p ><b>ID de la Norma ISO:</b> {deleteIsoRule?.idrule}</p>
            <p><b>Certificación:</b> {deleteIsoRule?.certification.certificatioN_NAME}</p>
            <p><b>Auditoría:</b> {deleteIsoRule?.audits.audiT_NAME}</p>
            <p><b>Norma ISO:</b> {deleteIsoRule?.namerule}</p>
            <p><b>Código de la Norma ISO:</b> {deleteIsoRule?.coderule }</p>
            <p><b>Descripción</b> {deleteIsoRule?.rulE_DESCRIPTION }</p>
            </Fragment>
        ))
        }
            <div className='d-flex '>
            <Button className={ "btn btn-primary me-3"} children={"Eliminar"} onClick={handleOpenModalUser}/>
            <ButtonLink to={"/isoRule"} className={"btn btn-danger"} onClick={reloadIsoRule} name={"Cancelar"}/>
            </div>
        </div>
        <Modal
            size={"modal-dialog-centered"}
            showModal={setshowModaldeleteUser}
            title={"Eliminar Norma ISO"}
            onClose={handleOnCloseModalUser}
            footer={
              <>
                {deleteMessage === true ? <ButtonLink
                  className={"btn btn-primary"}
                  to={"/isoRule"}
                  onClick={reloadIsoRule}
                  name={"Si"}
                />:<Button
                  className={"btn btn-primary"}
                  onClick={handleDeleteIsoRule}
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
            {deleteMessage === false ? `¿Está seguro que desea eliminar esta norma ISO?`:<p className="text-center">{message}</p> }
          </Modal>
    </div>
  )
}

export default DeleteIsoRule