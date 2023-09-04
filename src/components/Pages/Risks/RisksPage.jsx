import React, { useState } from 'react'
import Navbar from '../../common/Navbar'
import GetRisks from '../../Forms/Risks/GetRisks'
import HeaderLogged from '../../common/HeaderLogged';

const RisksPage = () => {
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
        <GetRisks />
        </div>
    </div>
  )
}

export default RisksPage