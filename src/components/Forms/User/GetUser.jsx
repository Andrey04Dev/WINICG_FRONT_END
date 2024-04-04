import React, { Fragment, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUser } from "../../../redux/userSlice";
import { Outlet, useLocation } from "react-router-dom";
import { ButtonLink } from "../../common/Button";
import TableExample from "../../common/TableExample";
import { ColumnDef } from "../../data/ColumnUsers";

const GetUser = () => {
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
          {user === "" ?null: (<ButtonLink name={"Agregar usuario"}  className="btn btn-success my-3 float-end" to={"/users/addUsers"} />)}
          <TableExample data={user} column={ColumnDef}/>
          </Fragment>
        ) : (
          <Outlet />
        )}
    </Fragment>
    
  );
};

export default GetUser;
