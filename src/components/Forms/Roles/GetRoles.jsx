import React, { useCallback, useEffect } from 'react'
import Table from '../../common/Table'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllRoles } from '../../../redux/rolesSlice'

const GetRoles = () => {
  const arrayHeaderRoles = [
    "idrole",
    "role",
    "createdate",
    "updatedate"
  ];
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
    console.log(Roles)
    return () => {
      
    }
  }, [initialState])
  return (
    <div><Table title={"Lista de roles"} data={Roles} arrayHeader={arrayHeaderRoles}/></div>
  )
}

export default GetRoles