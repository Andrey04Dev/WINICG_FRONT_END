import React, { Fragment } from 'react'
import LoginForm from '../Forms/Login/LoginForm'

const Home = () => {
  //

  // const handleReduceMenu = () => {
  //   setReduceMenu(!reduceMenu);
  // };
  return (
     <Fragment>
       <LoginForm/>
     </Fragment>
    //    <div className='row '>
    //      <div className={reduceMenu ? "width_menu col-1" : "container_menu col-3"}>
    //      <Navbar onClick={handleReduceMenu} show={reduceMenu}/>
    //      </div>
    //      <div className="col-md-9">
    //       <Outlet/>
    //      </div>
    //  </div>
  )
}

export default Home