import React from 'react'
import Navbar from '../../common/Navbar'
import GetRoles from '../../Forms/Roles/GetRoles'

const RolesPage = () => {
  return (
    <div className='row vw-100'>
        <div className="col-md-2">
        <Navbar/>
        </div>
        <div className="col-md-10">
        <GetRoles />
        </div>
    </div>
  )
}

export default RolesPage