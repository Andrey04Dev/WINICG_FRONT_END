import React, { useCallback, useEffect } from 'react'
import Table from '../../common/Table'
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCertification } from '../../../redux/certificationSlice';
import { ButtonLink } from '../../common/Button';
import { ColumnCertification } from '../../data/ColumnCertification';
import TableExample from '../../common/TableExample';

const GetCertification = () => {
  // const arrayHeaderRiesgo = ["idcertification", "certification_name", "certification_date", "personchange","createdate", "updatedate"];
  const location =  useLocation()
  const dispatch = useDispatch();
  const { certification } = useSelector((state) => state.certification);

  const initialState = useCallback(() => {
    dispatch(GetAllCertification());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <div>
        {location.pathname && location.pathname === "/certification" ? (
        <>
        {certification === "" ?null: (<ButtonLink name={"Agregar certificación"}  className="btn btn-success mt-3 float-end" to={"/certification/addCertification"} />)}
          {/* <Table
            title={"Lista de certificaciones"}
            data={certification}
            arrayHeader={arrayHeaderRiesgo}
            addRoute={"addCertification"}
            updateRoute={"updateCertification/"}
            deleteRoute={"deleteCertification/"}
          /> */}
          <TableExample data={certification} column={ColumnCertification}/>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default GetCertification