import React from 'react'
import Navbar from '../../common/Navbar'
import GetNoAccordance from '../../Forms/NoAccordance/GetNoAccordance'

const NoAccordancePage = () => {
  return (
    <div className='row vw-100'>
        <div className="col-md-2">
        <Navbar/>
        </div>
        <div className="col-md-10">
        <GetNoAccordance />
        </div>
    </div>
  )
}

export default NoAccordancePage