import React, { useState } from 'react'
import Navbar from '../../common/Navbar'
import GetAudit from '../../Forms/Audit/GetAudit'
import HeaderLogged from '../../common/HeaderLogged';

const AuditPage = () => {
  const [reduceMenu, setReduceMenu] = useState(true);

  const handleReduceMenu = () => {
    setReduceMenu(!reduceMenu);
  };
  return (
    <div className='row'>
        <div className={reduceMenu ? "width_menu col-md-1" : "container_menu col-md-3"}>
         <Navbar onClick={handleReduceMenu} show={reduceMenu}/>
        </div>
        <div className={reduceMenu ? "col-md-11" : "col-md-9"}>
        <HeaderLogged/>
        <GetAudit />
        </div>
    </div>
  )
}

export default AuditPage