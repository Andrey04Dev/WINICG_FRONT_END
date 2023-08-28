import React from 'react'
import Navbar from '../../common/Navbar'
import GetCompanyPosition from '../../Forms/CompanyPosition/GetCompanyPosition'

const CompanyPositionPage = () => {
  return (
    <div className='row vw-100'>
    <div className="col-md-2">
    <Navbar/>
    </div>
    <div className="col-md-10">
    <GetCompanyPosition />
    </div>
</div>
  )
}

export default CompanyPositionPage