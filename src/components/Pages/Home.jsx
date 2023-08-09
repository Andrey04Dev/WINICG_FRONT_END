import React from 'react'
import Navbar from '../common/Navbar'
import GetAudit from '../Forms/Audit/GetAudit'
import FormAuditAdd from '../Forms/Audit/FormAuditAdd'
import GetIsoRule from '../Forms/IsoRule/GetIsoRule'
import FormIsoRuleAdd from '../Forms/IsoRule/FormIsoRuleAdd'

const Home = () => {
  return (
      <div className='row vw-100'>
        <div className="col-md-2">
        <Navbar/>
        </div>
        <div className="col-md-10">
          <FormIsoRuleAdd/>
        <GetIsoRule />
        </div>
    </div>
  )
}

export default Home