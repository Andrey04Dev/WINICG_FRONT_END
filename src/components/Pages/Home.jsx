import React from 'react'
import Navbar from '../common/Navbar'
import GetRoles from '../Forms/Roles/GetRoles'

const Home = () => {
  return (
    <div className='row justify-content-center p-0'>
        <div className="col-md-3">
        <Navbar/>
        </div>
        <div className="col-md-8">
        <GetRoles />
        </div>
    </div>
  )
}

export default Home