import React from 'react'
import Navbar from '../../common/Navbar'
import GetProcess from '../../Forms/Process/GetProcess'

const ProcessPage = () => {
  return (
    <div className='row vw-100'>
        <div className="col-md-2">
        <Navbar/>
        </div>
        <div className="col-md-10">
        <GetProcess />
        </div>
    </div>
  )
}

export default ProcessPage