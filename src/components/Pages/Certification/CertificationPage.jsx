import React, { useState } from 'react'
import Navbar from '../../common/Navbar'
import GetCertification from '../../Forms/Certification/GetCertification'
import HeaderLogged from '../../common/HeaderLogged';

const CertificationPage = () => {
  const [reduceMenu, setReduceMenu] = useState(true);

  const handleReduceMenu = () => {
    setReduceMenu(!reduceMenu);
  };
  return (
    <div className='row'>
        <div className={reduceMenu ? "width_menu col-1" : "container_menu col-3"}>
          <Navbar onClick={handleReduceMenu} show={reduceMenu}/>
        </div>
        <div className={reduceMenu ? "col-md-11" : "col-md-9"}>
        <HeaderLogged/>
        <GetCertification />
        </div>
    </div>
  )
}

export default CertificationPage