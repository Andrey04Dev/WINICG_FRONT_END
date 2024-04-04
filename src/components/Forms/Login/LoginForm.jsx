import React, { Fragment, useEffect } from "react";
import Form from "../../FormFields/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationLogin } from "../../Validation/ValidationForms";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../FormFields/Input";
import Logo from "../../../assets/img/logo_crAtesa.png";
import { LoginUser } from "../../../redux/userSlice";
import useAuth from "../../../common/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ValidationLogin) });
  const dispatch = useDispatch();
  const userLogged = useAuth();
  const navigate = useNavigate()
  const {isLoggedIn} = useSelector((state) => state.users);
//let isLoggedIn = false
  const handleLogin = (data) => {
    //  const {email, password} =  data
    //  if (email === "andrey.marin12net@gmail.com" && password === "1234") {
    //    isLoggedIn = true
    //    sessionStorage.setItem("userLogin", JSON.stringify(data))
    //  }
    dispatch(LoginUser(data));
    console.log(data);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard")
    }else{
      navigate("/")
    }
  }, [isLoggedIn, navigate, userLogged])
  
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
