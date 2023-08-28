import React from 'react'
import Navbar from '../../common/Navbar'
import GetFlag from '../../Forms/Flags/GetFlag'

const FlagPage = () => {
  return (
    <div className='row vw-100'>
    <div className="col-md-2">
    <Navbar/>
    </div>
    <div className="col-md-10">
    <GetFlag />
    </div>
</div>
  )
}

export default FlagPage