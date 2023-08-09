
import React, { Fragment } from 'react'
import { ButtonLink } from './Button'
import Icon from './Icon'
import {Tooltips} from './Tooltips'

const Table = ({arrayHeader, data,title,  handleDelete,handleUpdate, deleteRoute,updateRoute,addRoute}) => {

    const ConvertDate= (date) => {
        const GetDate =  new Date(date)
        return GetDate.toLocaleDateString("es-MX")
    }
  return (
    <table className="table table-bordered table-hover table-responsive table-striped">
    <caption className="caption-top text-center">{title}</caption>
    <thead className='table-info text-center'>
      <tr>
        {arrayHeader?.map((header, index) => (
          <th key={index}>
            {
             header === "idrole" || header === "idaudit" || header === "idcertification"
               ? "Código"
               : header === "Role"
               ? "Rol"
               :header === "createdate"
               ? "Fecha de creación"
               :header === "updatedate"
               ? "Fecha de actualización"
               :header === "endreserve"
               ? "Check-out"
               :header === "bookperson"
               ? "Booker"
               :header === "iduser"
               ? "ID"
               :header === "nameaudit"
               ? "Nombre del auditor"
               :
               header === "audit_date"
               ? "Fecha de auditoría"
               :
               header === "audit_time"
               ? "Hora de auditoría"
               :
               header === "topic_audit"
               ? "Tema de auditoría"
               :header === "number_day"
               ? "Cantidad de días"
               :header === "kind_audit"
               ? "Tipo de auditoría"
               :header === "goal_audit"
               ? "Meta de auditoría"
               :header === "audit_process"
               ? "Proceso de auditoría"
               :header === "isorule"
               ? "Norma a evaluar"
               :header === "name_certification"
               ? "Nombre de la certificación"
               :header === "certifcation_date"
               ? "Fecha de la certificación"
               :
               header[0].toUpperCase() + header.substring(1)}
          </th>
        ))}
        <th>Actions</th>
      </tr>
    </thead>
    <tbody className='text-center'>
      {data && Object.values(data)?.map((data, index) => (
        <tr key={index}>
          {arrayHeader && Object.values(arrayHeader).map((header, index) => {
             return( 
               <Fragment key={index}>
                 {
                   header === "idrole"?
                   (<><td key={index}>{data.idrole }</td>
                     <td>{data.role}</td>
                     <td>{ConvertDate(data.createdate)}</td>
                     <td>{data.updatedate === null ? "": ConvertDate(data.updatedate)}</td>
                   </>):
                   header === "idreservation"?
                   (<><td key={index}>{data.idreservation }</td>
                     <td>{data.bookperson}</td>
                     <td>{data.rooms.nameroom}</td>
                     <td>{ConvertDate(data.startreserve)}</td>
                     <td>{ConvertDate(data.endreserve)}</td>
                   </>):
                   header === "idcategory"?
                   (<><td key={index}>{data.idcategory }</td>
                     <td>{data.category}</td>
                   </>):
                   header === "iduser"?
                   (<><td key={index}>{data.iduser }</td>
                     <td>{data.firstname}</td>
                     <td>{data.lastname}</td>
                     <td>{data.email}</td>
                     <td>{data.active === true ? "Activo": "Inactivo"}</td>
                   </>):
                   null
                 }
             </Fragment>
          )})}
          <td className='d-flex justify-content-center'>
          <Tooltips text={"Agregar"}><ButtonLink to={addRoute} className={"btn btn-success me-2"}>
                  <Icon icon={["fas", "plus"]}/>
                 </ButtonLink></Tooltips>
                 <Tooltips text={"Actualizar"}><ButtonLink to={`${updateRoute}/${data.idrole}`} onClick={handleUpdate} className={"btn btn-warning me-2"}>
                  <Icon icon={["fas", "pen"]}/>
                 </ButtonLink></Tooltips>
                 <Tooltips text={"Eliminar"}><ButtonLink to={``} onClick={handleDelete} className={"btn btn-danger"}>
                  <Icon icon={["fas", "trash"]}/>
                 </ButtonLink></Tooltips>
          </td> 
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table