import React from 'react'
import { ButtonLink } from './Button'
import { useDispatch } from 'react-redux'
import { LogoutUser } from '../../redux/userSlice'

const HeaderLogged = () => {
    const dispatch =  useDispatch()
    const userLogin = JSON.parse(sessionStorage.getItem("userLogin") || "") 
    const HandleLogOut = ()=>{
        dispatch(LogoutUser())
      }
  return (
    <div className='d-flex justify-content-between w-100 bg-danger text-white p-2'>
            <h3>WINICIG</h3>
            <div className='d-flex align-items-center justify-content-center bg-danger'><p className='my-auto'>Bienvenido, <b>{userLogin.name}</b></p>
            <ButtonLink name={"Salir"} className={"btn btn-outline-light ms-3"} to={"/"} onClick={HandleLogOut}/></div>
          </div>
  )
}

export default HeaderLogged