import React from 'react'
import Navbar from '../../common/Navbar'
import GetAudit from '../../Forms/Audit/GetAudit'

const AuditPage = () => {
  return (
    <div className='row vw-100'>
        <div className="col-md-2">
        <Navbar/>
        </div>
        <div className="col-md-10">
        <GetAudit />
        </div>
    </div>
  )
}

export default AuditPage