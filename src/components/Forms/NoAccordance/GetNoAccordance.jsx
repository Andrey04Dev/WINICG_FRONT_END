import React, { useCallback, useEffect } from 'react'
import Table from '../../common/Table'
import { Outlet, useLocation } from 'react-router-dom';
import { GetAllNoAccordance } from '../../../redux/noAccordanceSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonLink } from '../../common/Button';
const GetNoAccordance = () => {
  const arrayHeaderPosiiion = ["idaccordance","processname","audit_name","project","name_no_accordance","kind","ranking","description","state","audit_detect","quantity", "createdate", "updatedate"];
  const location =  useLocation()
  const dispatch = useDispatch();
  const { NoAccordance } = useSelector((state) => state.noAccordance);

  const initialState = useCallback(() => {
    dispatch(GetAllNoAccordance());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <div className='position-relative mt-5'>
        {location.pathname && location.pathname === "/noAccordance" ? (
        <>
        {NoAccordance=== "" ? null : (
            <ButtonLink
              name={"Agregar no conformidad"}
              className="btn btn-success float-end mt-3"
              to={"/noAccordance/addNoAccordance"}
            />
          )}
          <Table
            title={"Lista de no conformidades"}
            data={NoAccordance}
            arrayHeader={arrayHeaderPosiiion}
            addRoute={"addNoAccordance"}
            updateRoute={"updateNoAccordance/"}
            deleteRoute={"deleteNoAccordance/"}
          />
        </>
      ) : (
        <Outlet/>
      )}
    </div>
  )
}

export default GetNoAccordance