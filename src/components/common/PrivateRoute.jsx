import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../common/useAuth'

const PrivateRoute = () => {
  const isAuth =  useAuth()
  return isAuth ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRoute