import React from 'react'
import Navbar from '../../common/Navbar'
import GetCertification from '../../Forms/Certification/GetCertification'

const CertificationPage = () => {
  return (
    <div className='row vw-100'>
        <div className="col-md-2">
        <Navbar/>
        </div>
        <div className="col-md-10">
        <GetCertification />
        </div>
    </div>
  )
}

export default CertificationPage