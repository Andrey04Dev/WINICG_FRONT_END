import React, { useState } from 'react'
import Navbar from '../../common/Navbar'
import GetNoAccordance from '../../Forms/NoAccordance/GetNoAccordance'
import HeaderLogged from '../../common/HeaderLogged';

const NoAccordancePage = () => {
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
        <GetNoAccordance />
        </div>
    </div>
  )
}

export default NoAccordancePage