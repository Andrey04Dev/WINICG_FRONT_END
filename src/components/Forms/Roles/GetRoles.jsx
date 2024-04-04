import React, { Fragment, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllRoles } from "../../../redux/rolesSlice";
import { Outlet, useLocation } from "react-router-dom";
import { ButtonLink } from "../../common/Button";
import TableExample from "../../common/TableExample";
import { ColumnRoles } from "../../data/ColumnRoles";

const GetRoles = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { Roles } = useSelector((state) => state.roles);
  const initialState = useCallback(() => {
    dispatch(GetAllRoles()).then((res) =>
      console.log("SIempre que carga roles", res.payload)
    );
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);
  return (
    <Fragment>
      {location.pathname === "/roles" ? (
        <Fragment>
          {Roles === "" ? null : (
            <ButtonLink
              name={"Agregar role"}
              className="btn btn-success float-end mt-3"
              to={"/roles/addRoles"}
            />
          )}
          <TableExample data={Roles} column={ColumnRoles }/>
        </Fragment>
      ) : (
        <Outlet />
      )}
    </Fragment>
  );
};

export default GetRoles;
