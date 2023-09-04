import React, { Fragment } from "react";
import Form from "../../FormFields/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationLogin } from "../../Validation/ValidationForms";
import { useDispatch } from "react-redux";
import Input from "../../FormFields/Input";
import Logo from "../../../assets/img/logo_crAtesa.png";
import { LoginUser } from "../../../redux/userSlice";
import useAuth from "../../../common/useAuth";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationLogin) });
  const dispatch = useDispatch();
  const userLogged = useAuth();
  //const { loading, message, success } = useSelector((state) => state.users);

  const handleLogin = (data) => {
    dispatch(LoginUser(data));
    console.log(data);
  };
  return (
    <Fragment>
      {userLogged ? (
        <Navigate to={"/dashboard"} />
      ) : (
        <div
          className="d-flex  flex-column justify-content-center  align-items-center  container-fluid "
          style={{ height: "100vh" }}
        >
          <div className="d-flex justify-content-center">
            <img
              src={Logo}
              alt="Logo de la empresa CR Atesa"
              className="img-fluid img-responsive"
            />
          </div>
          <Form
            className="form"
            buttonLabel="Login"
            title={"Login"}
            handleSubmit={handleSubmit}
            register={register}
            onSubmit={handleLogin}
          >
            <Input
              error={errors?.email?.message}
              type={"email"}
              name={"email"}
              label={"Correo"}
              placeholder={"Correo"}
            />
            <Input
              error={errors?.password?.message}
              name={"password"}
              type={"password"}
              label={"Contraseña"}
              placeholder={"Contraseña"}
            />
          </Form>
        </div>
      )}
    </Fragment>
  );
};

export default LoginForm;
