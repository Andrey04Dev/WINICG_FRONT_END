
import React, { Fragment } from 'react'
import { ButtonLink } from './Button'
import Icon from './Icon'
import {Tooltips} from './Tooltips'

const Table = ({arrayHeader, data,title,  handleDelete, deleteRoute,updateRoute,addRoute}) => {

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
          <th colSpan={header === "rulE_DESCRIPTION"? 4: ""} key={index}>
            {
             header === "idrole" || header === "idaudits"  || header ==="idcompany_position"
             || header ==="idflags" || header ==="idtask" || header === 'iduser' || header === "idrule"
             || header === "idrisks" || header === "idprocess" || header === "idaccordance"
               ? "Código"
               : header === "Role"
               ? "Rol"
               :header === "createdate"
               ? "Fecha de creación"
               :header === "updatedate"
               ? "Fecha de actualización"
               :header === "nameaudit"
               ? "Nombre del auditor/a"
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
               :header === "certification_name"
               ? "Nombre de la certificación"
               :header === "certification_date"
               ? "Fecha de la certificación"
               :header === "responsabilities"
               ? "Responsabilidades"
               :header === "description"
               ? "Descripción"
               :header === "profile_position"
               ? 'Position del perfil'
               :header === "flagname"
               ? 'Nombre de indicidador'
               :header === "project"
               ? 'Proyecto'
               :header === "event_task"
               ? 'Evento de tarea'
               :
               header === "fullname"
               ? 'Nombre completo'
               :header === "active"
               ? 'Estado'
               :header === "cedula"
               ? 'Cédula'
               :header === "email"
               ? 'Correo'
               : header === "namerule"
               ? 'Norma ISO'
               :header === "coderule"
               ? 'Código de Norma ISO'
               :header === "rulE_DESCRIPTION"
               ? 'Descripción de Norma ISO'
               :header === "idcertification"
               ? 'Código de certificación'
               :header === "idaudit"
               ? 'Código de auditoría'
               :header === "certification"
               ? 'Certificación'
               :header === "audits"
               ? 'Auditoría'
               :header === "idisoRule"
               ? 'Código Norma ISO'
               :header === "namerisk"
               ? 'Título de riesgo'
               :header === "consequense"
               ? 'Ccnsecuencia'
               :header === "source_risk"
               ? 'Fuente del riesgo'
               :header === "charge_person"
               ? 'Persona a cargo'
               :header === "role_involves"
               ? 'Rol implicado'
               :header === "codeprocess"
               ? 'Código del proceso'
               :header === "processname"
               ? 'Nombre del proceso'
               :header === "name_no_accordance"
               ? 'No conformidad'
               :header === "kind"
               ? 'Tipo'
               :header === "ranking"
               ? 'Grado'
               :header === "audit_detect"
               ? 'Nombre del auditor'
               :
               header[0].toUpperCase() + header.substring(1)}
          </th>
        ))}
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody className='text-center'>
      {data && Object.values(data)?.filter(data=> data !== null && data !== undefined && data !== " ").map((data, index) => (
        <tr key={index}>
          {arrayHeader && Object.values(arrayHeader).map((header, index) => {
             return( 
               <Fragment key={index}>
                 {
                   header === "idrole"?
                   (<Fragment><td key={index}>{data?.idrole }</td>
                     <td>{data?.role}</td>
                     <td>{ConvertDate(data?.createdate)}</td>
                     <td>{data?.updatedate === null ? "": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idcertification"?
                   (<Fragment><td key={index}>{data.idcertification }</td>
                     <td>{data.certificatioN_NAME}</td>
                     <td>{data.certificatioN_DATE}</td>
                     <td>{ConvertDate(data.createdate)}</td>
                     <td>{data?.updatedate === null ? "": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idaudits"?
                   (<Fragment><td key={index}>{data.idaudits }</td>
                   <td>{data.audiT_NAME}</td>
                   <td>{ConvertDate(data.audiT_DATE)}</td>
                   <td>{data.audiT_TIME}</td>
                   <td>{data.audiT_SUBJECT}</td>
                   <td>{data.numbeR_DAYS}</td>
                   <td>{data.kinD_AUDIT}</td>
                   <td>{data.scopE_AUDIT}</td>
                   <td>{data.audiT_PROCESS}</td>
                   <td>{data.audiT_RULE}</td>
                   <td>{ConvertDate(data.createdate)}</td>
                   <td>{data?.updatedate === null ? "": ConvertDate(data?.updatedate)}</td>
                 </Fragment>):
                   header === "iduser"?
                   (<Fragment><td key={index}>{data?.iduser }</td>
                     <td>{data?.cedula}</td>
                     <td>{data?.fullname}</td>
                     <td>{data?.email}</td>
                     <td>{data?.active === true ? "Activo": "Inactivo"}</td>
                     <td>{data?.role?.role}</td>
                     <td>{ConvertDate(data?.createdate)}</td>
                     <td>{data?.updatedate === null ? "": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idrule"?
                   (<Fragment><td  key={index}>{data?.idrule}</td>
                     <td >{data?.certification?.certificatioN_NAME}</td>
                     <td >{data?.audits?.audiT_NAME}</td>
                     <td >{data?.namerule}</td>
                     <td >{data?.coderule}</td>
                     <td  colSpan={4}>{data?.rulE_DESCRIPTION}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idflags"?
                   (<Fragment><td  key={index}>{data?.idflags}</td>
                     <td >{data?.isorule?.namerule}</td>
                     <td >{data?.flagname}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idrisks"?
                   (<Fragment><td  key={index}>{data?.idrisks}</td>
                     <td >{data?.isorule?.namerule}</td>
                     <td >{data?.origen}</td>
                     <td >{data?.namerisks}</td>
                     <td >{data?.consequense}</td>
                     <td >{data?.sourcE_RISK}</td>
                     <td >{data?.state}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idtask"?
                   (<Fragment><td  key={index}>{data?.idtask}</td>
                     <td >{data?.users?.fullname}</td>
                     <td >{data?.idrule}</td>
                     <td >{data?.idflags}</td>
                     <td >{data?.project}</td>
                     <td >{data?.evenT_TASK}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idprocess"?
                   (<Fragment><td  key={index}>{data?.idprocess}</td>
                     <td >{data?.isorule?.namerule}</td>
                     <td >{data?.codeprocess}</td>
                     <td >{data?.chargE_PERSON}</td>
                     <td >{data?.rolE_INVOLVES}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idaccordance"?
                   (<Fragment><td  key={index}>{data?.idaccordance}</td>
                     <td >{data?.process?.processname}</td>
                     <td >{data?.audits?.audiT_NAME}</td>
                     <td >{data?.tasks?.project}</td>
                     <td >{data?.namE_NO_ACCORDANCE}</td>
                     <td >{data?.kind === 1 ? "Mayor": "Menor"}</td>
                     <td >{data?.ranking}</td>
                     <td >{data?.description}</td>
                     <td >{data?.state ===1 ? "Abierto" : "Cerrado"}</td>
                     <td >{data?.audiT_DETECT}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idcompany_position"?
                   (<Fragment><td  key={index}>{data?.idcompanY_POSITION}</td>
                     <td >{data?.user?.fullname}</td>
                     <td >{data?.process?.processname}</td>
                     <td >{data?.mandated}</td>
                     <td >{data?.description}</td>
                     <td >{data?.responsabilities}</td>
                     <td >{data?.profilE_POSITION}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   null
                 }
             </Fragment>
          )})}
          <td className='' >
          <div className='d-flex justify-content-center align-items-center'>
          <Tooltips text={"Agregar"} ><ButtonLink to={addRoute} className={"btn btn-success me-2 my-2"}>
                  <Icon icon={["fas", "plus"]}/>
                 </ButtonLink></Tooltips>
                 <Tooltips text={"Actualizar"}><ButtonLink to={`${updateRoute}${data?.idrisks || data?.idaccordance || data?.idcompanY_POSITION  || data?.idprocess || data?.iduser || data?.idrole || data?.idflags || data?.idrule || data?.idaudits || data?.idcertification } `} className={"btn btn-warning me-2"}>
                  <Icon icon={["fas", "pen"]}/>
                 </ButtonLink></Tooltips>
                 <Tooltips text={"Eliminar"}><ButtonLink to={`${deleteRoute}${data?.idrisks || data?.idaccordance || data?.idcompanY_POSITION || data?.idprocess || data?.iduser || data?.idrole  || data?.idflags|| data?.idrule || data?.idaudits || data?.idcertification }`} onClick={handleDelete} className={"btn btn-danger"}>
                  <Icon icon={["fas", "trash"]}/>
                 </ButtonLink></Tooltips>
          </div>
          </td> 
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table