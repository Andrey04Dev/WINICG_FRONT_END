import React, { Fragment, useCallback, useEffect } from "react";
import Table from "../../common/Table";
import { useDispatch, useSelector } from "react-redux";
import { GetAllRoles } from "../../../redux/rolesSlice";
import { Outlet, useLocation } from "react-router-dom";
import { ButtonLink } from "../../common/Button";

const GetRoles = () => {
  const arrayHeaderRoles = ["idrole", "role", "createdate", "updatedate"];
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
          {Roles ? null : (
            <ButtonLink
              name={"Agregar role"}
              className="btn btn-success"
              to={"/roles/addRoles"}
            />
          )}
          <Table
            title={"Lista de roles"}
            data={Roles}
            arrayHeader={arrayHeaderRoles}
            addRoute={"addRoles"}
            deleteRoute={"deleteRoles/"}
            updateRoute={"updateRoles/"}
          />
        </Fragment>
      ) : (
        <Outlet />
      )}
    </Fragment>
  );
};

export default GetRoles;
