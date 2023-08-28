import React from 'react'
import Navbar from '../../common/Navbar'
import GetRisks from '../../Forms/Risks/GetRisks'

const RisksPage = () => {
  return (
    <div className='row vw-100'>
        <div className="col-md-2">
        <Navbar/>
        </div>
        <div className="col-md-10">
        <GetRisks />
        </div>
    </div>
  )
}

export default RisksPage