
import React, { Fragment } from 'react'

const Table = ({arrayHeader, data, handleDeleteRoom,deleteRoute,updateRoute,addRoute}) => {

    const ConvertDate= (date) => {
        const GetDate =  new Date(date)
        return GetDate.toLocaleDateString("es-MX")
    }
  return (
    <table className="table table-bordered table-hover table-responsive table-striped">
    <caption className="caption-top text-center">List of room</caption>
    <thead className='table-info'>
      <tr>
        {arrayHeader?.map((header, index) => (
          <th key={index}>
            {
             header === "idroom"
               ? "Room Code"
               : header === "nameroom"
               ? "Room"
               :header === "idreservation"
               ? "Reservation Code"
               :header === "startreserve"
               ? "Check-in"
               :header === "endreserve"
               ? "Check-out"
               :header === "bookperson"
               ? "Booker"
               :header === "iduser"
               ? "ID"
               :
               header[0].toUpperCase() + header.substring(1)}
          </th>
        ))}
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {data && Object.values(data)?.map((data, index) => (
        <tr key={index}>
          {arrayHeader && Object.values(arrayHeader).map((header, index) => {
             return( 
               <Fragment key={index}>
                 {
                   header === "idroom"?
                   (<><td key={index}>{data.idroom }</td>
                     <td>{data.nameroom}</td>
                     <td>{data.capacity}</td>
                     <td>{data.price}</td>
                     <td>{data.information}</td>
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
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table