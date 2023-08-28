import React from 'react'
import Navbar from '../../common/Navbar'
import GetUser from '../../Forms/User/GetUser'

const UsersPage = () => {
  return (
    <div className='row vw-100'>
        <div className="col-md-2">
        <Navbar/>
        </div>
        <div className="col-md-10">
        <GetUser />
        </div>
    </div>
  )
}

export default UsersPage