
import React, { Fragment } from 'react'
import { ButtonLink } from './Button'
import Icon from './Icon'
import {Tooltips} from './Tooltips'
import { useLocation } from 'react-router-dom'

const Table = ({arrayHeader, data,title,  handleDelete, deleteRoute,updateRoute,addRoute, uploadFiles,showFiles}) => {
  const userLogin = JSON.parse(sessionStorage.getItem("userLogin") || "") 
    const ConvertDate= (date) => {
        const GetDate =  new Date(date)
        return GetDate.toLocaleDateString("es-MX")
    }
    const navigation  = useLocation()
  return (
    <table className="table table-bordered table-hover table-responsive table-striped">
    <caption className="caption-top text-center">{title}</caption>
    <thead className='table-danger text-center'>
      <tr>
        {arrayHeader?.map((header, index) => (
          <th colSpan={header === "rulE_DESCRIPTION"? 4: ""} key={index}>
            {
             header === "idrole" || header === "idaudits"  || header ==="idcompany_position"
             || header ==="idflags" || header ==="idtask" || header === 'iduser' || header === "idrule"
             || header === "idrisks" || header === "idprocess" || header === "idaccordance"|| header === "idposition"
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
               :header === "audit_rule"
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
               :header === "id"
               ? 'Cédula'
               :header === "email"
               ? 'Correo'
               : header === "namerule"
               ? 'Norma ISO'
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
               ? 'Consecuencia'
               :header === "source_risk"
               ? 'Fuente del riesgo'
               :header === "charge_person"
               ? 'Persona a cargo'
               :header === "role_involves"
               ? 'Rol implicado'
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
               :header === "positionjob"
               ? 'Posición'
               :header === "area"
               ? 'Área'
               :header === "state"
               ? 'Estado'
               :header === "personchange"
               ? 'Usuario que actualizo'
               :header === "quantity"
               ? 'Cantidad de archivos'
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
                     <td>{data?.personchange === null ? "Ninguna persona lo ha actualizado": data?.personchange}</td>
                     <td>{ConvertDate(data?.createdate)}</td>
                     <td>{data?.updatedate === null ? "No se ha actualizado": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idcertification"?
                   (<Fragment><td key={index}>{data.idcertification }</td>
                     <td>{data.certificatioN_NAME}</td>
                     <td>{ConvertDate(data.certificacioN_DATE)}</td>
                     <td>{data?.personchange === null ? "Ninguna persona lo ha actualizado": data?.personchange}</td>
                     <td>{ConvertDate(data.createdate)}</td>
                     <td>{data?.updatedate === null ? "No se ha actualizado": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idaudits"?
                   (<Fragment><td key={index}>{data.idaudit }</td>
                   <td>{data.audiT_NAME}</td>
                   <td>{ConvertDate(data.audiT_DATE)}</td>
                   <td>{data.audiT_TIME}</td>
                   <td>{data.audiT_SUBJECT}</td>
                   <td>{data.numbeR_DAYS}</td>
                   <td>{data.kinD_AUDIT}</td>
                   <td>{data.scopE_AUDIT}</td>
                   <td>{data.audiT_PROCESS}</td>
                   <td>{data.audiT_RULE === null ? "No hay regla a evaluar": data.audiT_RULE}</td>
                   <td>{data?.personchange === null ? "Ninguna persona lo ha actualizado": data?.personchange}</td>
                   <td>{ConvertDate(data.createdate)}</td>
                   <td>{data?.updatedate === null ? "No se ha actualizado": ConvertDate(data?.updatedate)}</td>
                 </Fragment>):
                   header === "iduser"?
                   (<Fragment><td key={index}>{data?.iduser }</td>
                     <td>{data?.cedula}</td>
                     <td>{data?.fullname}</td>
                     <td>{data?.email}</td>
                     <td>{data?.position?.positionjob}</td>
                     <td>{data?.active === true ? "Activo": "Inactivo"}</td>
                     <td>{data?.role?.role}</td>
                     <td>{data?.changeperson === null ? "Ninguna persona lo ha actualizado": data?.changeperson}</td>
                     <td>{ConvertDate(data?.createdate)}</td>
                     <td>{data?.updatedate === null ? "No se ha actualizado": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idrule"?
                   (<Fragment><td  key={index}>{data?.idrule}</td>
                     <td >{data?.certification?.certificatioN_NAME}</td>
                     <td >{data?.audits?.audiT_NAME}</td>
                     <td >{data?.namerule}</td>
                     <td  colSpan={4}>{data?.rulE_DESCRIPTION}</td>
                     <td>{data?.personchange === null ? "Ninguna persona lo ha actualizado": data?.personchange}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "No se ha actualizado": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idflags"?
                   (<Fragment><td  key={index}>{data?.idflag}</td>
                     <td >{data?.isorule?.namerule}</td>
                     <td >{data?.flagname}</td>
                     <td>{data?.personchange === null ? "Ninguna persona lo ha actualizado": data?.personchange}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "No se ha actualizado": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idrisks"?
                   (<Fragment><td  key={index}>{data?.idrisks}</td>
                     <td >{data?.isorule?.namerule}</td>
                     <td >{data?.origen}</td>
                     <td >{data?.namerisks}</td>
                     <td >{data?.consequense}</td>
                     <td >{data?.sourcE_RISK}</td>
                     <td >{data?.state === 1 ? "Mitigado":"No mitigado"}</td>
                     <td >{data?.quantity}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "No se ha actualizado": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idtask"?
                   (<Fragment><td  key={index}>{data?.idtask}</td>
                     <td >{data?.users?.fullname}</td>
                     <td >{data?.isorule?.namerule}</td>
                     <td >{data?.flags?.flagname}</td>
                     <td >{data?.project}</td>
                     <td >{data?.evenT_TASK}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "No se ha actualizado": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idprocess"?
                   (<Fragment><td  key={index}>{data?.idprocess}</td>
                     <td >{data?.isorule?.namerule}</td>
                     <td >{data?.processname}</td>
                     <td >{data?.chargE_PERSON}</td>
                     <td >{data?.rolE_INVOLVES}</td>
                     <td>{data?.personchange === null ? "Ninguna persona lo ha actualizado": data?.personchange}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "No se ha actualizado": ConvertDate(data?.updatedate)}</td>
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
                     <td >{data?.quantity}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "No se ha actualizado": ConvertDate(data?.updatedate)}</td>
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
                     <td >{data?.updatedate === null ? "No se ha actualizado": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   header === "idposition"?
                   (<Fragment><td  key={index}>{data?.idposition}</td>
                     <td >{data?.positionjob}</td>
                     <td >{data?.description}</td>
                     <td >{data?.area}</td>
                     <td>{data?.personchange === null ? "Ninguna persona lo ha actualizado": data?.personchange}</td>
                     <td >{ConvertDate(data?.createdate)}</td>
                     <td >{data?.updatedate === null ? "No se ha actualizado": ConvertDate(data?.updatedate)}</td>
                   </Fragment>):
                   null
                 }
             </Fragment>
          )})}
          <td className='' >
          <div className='d-flex justify-content-center align-items-center'>
          {(userLogin.role === "Admin" && navigation.pathname === "/risks" )|| (userLogin.role === "Admin" && navigation.pathname === "/noAccordance")?(<Fragment><Tooltips text={"Agregar"} position={"top"}><ButtonLink to={addRoute} className={"btn btn-success me-2 my-2"}>
                <Icon icon={["fas", "plus"]} />
              </ButtonLink></Tooltips>
              <Tooltips text={"Subir Archivos"} position={"top"}><ButtonLink to={`${uploadFiles}${data?.idrisks || data?.idaccordance || data?.idcompanY_POSITION || data?.idprocess || data?.iduser || data?.idrole || data?.idflag || data?.idrule || data?.idaudit || data?.idcertification || data?.idposition} `} className={"btn btn-primary me-2 my-2"}>
                <Icon icon={["fas", "file"]} />
              </ButtonLink></Tooltips>
              <Tooltips text={"Mostrar Archivos"} position={"top"}><ButtonLink to={`${showFiles}${data?.idrisks || data?.idaccordance || data?.idcompanY_POSITION || data?.idprocess || data?.iduser || data?.idrole || data?.idflag || data?.idrule || data?.idaudit || data?.idcertification || data?.idposition} `} className={"btn btn-info me-2 my-2"}>
                <Icon icon={["fas", "eye"]} className={"text-white"} />
              </ButtonLink></Tooltips>
              <Tooltips text={"Actualizar"} position={"top"}><ButtonLink to={`${updateRoute}${data?.idrisks || data?.idaccordance || data?.idcompanY_POSITION || data?.idprocess || data?.iduser || data?.idrole || data?.idflag || data?.idrule || data?.idaudit || data?.idcertification || data?.idposition} `} className={"btn btn-warning me-2"}>
                <Icon icon={["fas", "pen"]} className={"text-white"} />
              </ButtonLink></Tooltips><Tooltips text={"Eliminar"} position={"top"}><ButtonLink to={`${deleteRoute}${data?.idrisks || data?.idaccordance || data?.idcompanY_POSITION || data?.idprocess || data?.iduser || data?.idrole || data?.idflag || data?.idrule || data?.idaudit || data?.idcertification || data?.idposition}`} onClick={handleDelete} className={"btn btn-danger"}>
                <Icon icon={["fas", "trash"]} />
              </ButtonLink></Tooltips></Fragment>):(<Fragment><Tooltips text={"Agregar"} position={"top"}><ButtonLink to={addRoute} className={"btn btn-success me-2 my-2"}>
                <Icon icon={["fas", "plus"]} />
              </ButtonLink></Tooltips>
              <Tooltips text={"Actualizar"} position={"top"}><ButtonLink to={`${updateRoute}${data?.idrisks || data?.idaccordance || data?.idcompanY_POSITION || data?.idprocess || data?.iduser || data?.idrole || data?.idflag || data?.idrule || data?.idaudit || data?.idcertification || data?.idposition} `} className={"btn btn-warning me-2"}>
                <Icon icon={["fas", "pen"]} className={"text-white"} />
              </ButtonLink></Tooltips>
              <Tooltips text={"Eliminar"} position={"top"}><ButtonLink to={`${deleteRoute}${data?.idrisks || data?.idaccordance || data?.idcompanY_POSITION || data?.idprocess || data?.iduser || data?.idrole || data?.idflag || data?.idrule || data?.idaudit || data?.idcertification || data?.idposition}`} onClick={handleDelete} className={"btn btn-danger"}>
                <Icon icon={["fas", "trash"]} />
              </ButtonLink></Tooltips></Fragment>)}
          {userLogin.role === "User"?((<><Tooltips text={"Agregar"} position={"top"}><ButtonLink to={addRoute} className={"btn btn-success me-2 my-2"}>
                  <Icon icon={["fas", "plus"]} />
                </ButtonLink></Tooltips><Tooltips text={"Actualizar"} position={"top"}><ButtonLink to={`${updateRoute}${data?.idrisks || data?.idaccordance || data?.idprocess || data?.idtasks } `} className={"btn btn-warning me-2"}>
                  <Icon icon={["fas", "pen"]} className={"text-white"}/>
                </ButtonLink></Tooltips><Tooltips text={"Eliminar"} position={"top"}><ButtonLink to={`${deleteRoute}${data?.idrisks || data?.idaccordance || data?.idprocess || data?.idtasks}`} onClick={handleDelete} className={"btn btn-danger"}>
                  <Icon icon={["fas", "trash"]} />
                </ButtonLink></Tooltips></>)):null}
          </div>
          </td> 
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table