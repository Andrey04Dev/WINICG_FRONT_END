import React, { Fragment, useCallback, useEffect } from "react";
import Table from "../../common/Table";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUser } from "../../../redux/userSlice";
import { Outlet, useLocation } from "react-router-dom";
import { ButtonLink } from "../../common/Button";

const GetUser = () => {
  const arrayHeaderUsers = [
    "iduser",
    "id",
    "fullname",
    "email",
    "positionjob",
    "active",
    "rol",
    "createdate",
    "updatedate",
  ];
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const initialState = useCallback(() => {
    dispatch(GetAllUser());
  }, [dispatch]);

  useEffect(() => {
    initialState();
    return () => {};
  }, [initialState]);

  return (
    <Fragment>
        {location.pathname === "/users" ? (
          <Fragment>
          {user === "" ?null: (<ButtonLink name={"Agregar usuario"}  className="btn btn-success mt-3 float-end" to={"/users/addUsers"} />)}
          <Table
            title={"Lista de usuarios"}
            arrayHeader={arrayHeaderUsers}
            data={user}
            addRoute={"addUsers"}
            updateRoute={"updateUsers/"}
            deleteRoute={"deleteUsers/"}
          />
          </Fragment>
        ) : (
          <Outlet />
        )}
    </Fragment>
    
  );
};

export default GetUser;
