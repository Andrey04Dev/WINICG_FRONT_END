import React, { useCallback, useEffect } from 'react'
import Table from '../../common/Table'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllRoles } from '../../../redux/rolesSlice'

const GetUser = () => {
  const dispatch  =  useDispatch()
  const {Roles} =  useSelector(state=> state.roles)
  const initialState =  useCallback(
    () => {
      dispatch(GetAllRoles())
    },
    [dispatch],
  )

  useEffect(() => {
    initialState()  
    return () => {
      
    }
  }, [initialState])
  
  
  return (
    <div><Table title={"Lista de roles"} data={Roles}/></div>
  )
}

export default GetUser