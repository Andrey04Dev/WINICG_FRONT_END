import React from 'react'
import Navbar from '../../common/Navbar'
import GetIsoRule from '../../Forms/IsoRule/GetIsoRule'

const IsoRulePage = () => {
  return (
    <div className='row vw-100'>
        <div className="col-md-2">
        <Navbar/>
        </div>
        <div className="col-md-10">
        <GetIsoRule />
        </div>
    </div>
  )
}

export default IsoRulePage