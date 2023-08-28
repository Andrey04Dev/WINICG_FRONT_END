import React, { useCallback, useEffect } from 'react'
import Table from '../../common/Table'
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCompanyPosition } from '../../../redux/companyPositionSlice'
import {  ButtonLink } from '../../common/Button'

const GetCompanyPosition = () => {
  const arrayHeaderPosiiion = ["idcompany_position","iduser","idprocess","lider", "description", "responsabilities","profile_position", "createdate", "updatedate"];
  const location =  useLocation()
  const dispatch = useDispatch();
  const { companyPosition } = useSelector((state) => state.companyPosition);

  const initialState = useCallback(() => {
    dispatch(GetAllCompanyPosition());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <div>
        {location.pathname && location.pathname === "/company_position" ? (
        <>
        {companyPosition=== "" ? null : (
            <ButtonLink
              name={"Agregar position de la compañia"}
              className="btn btn-success float-end"
              to={"/company_position/addCompanyPosition"}
            />
          )}
          <Table
            title={"Lista de certificaciones"}
            data={companyPosition}
            arrayHeader={arrayHeaderPosiiion}
            addRoute={"addCompanyPosition"}
            updateRoute={"updateCompanyPosition/"}
            deleteRoute={"deleteCompanyPosition/"}
          />
        </>
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default GetCompanyPosition