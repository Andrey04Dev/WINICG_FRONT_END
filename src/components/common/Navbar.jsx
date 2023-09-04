import React from "react";
import { Link } from "react-router-dom";
import logoCRAtesa from "../../assets/img/logo_crAtesa.png";
import Icon from "./Icon";
import { ButtonIcon } from "./Button";
import { Tooltips } from "./Tooltips";

const Navbar = ({onClick, show}) => {
  
  return (
      <><div className="d-flex flex-column justify-content-center align-items-center mt-2" id="containerMenu" >
      <Tooltips text={"Mostrar menu"} position={"right"} id="btnHamburger">
        <ButtonIcon
          icon={["fas", "bars"]}
          className="btn btn-transparent opacity-75 "
          onClick={onClick} />
      </Tooltips>
      <Link className="" to="/">
        <img
          className={show ? "d-none" : "mx-3"}
          src={logoCRAtesa}
          alt="Logo de Cr Atesa Software" />
      </Link>
    </div><nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light me-5">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link d-flex" to="/audit">
              <Tooltips text="Auditoría" position="right">
                <Icon className={"mx-3"} icon={["fas", "user-tie"]} />
              </Tooltips>
              {/* <Tooltips text={"Auditoría"}></Tooltips> */}
              {show ? "" : "Auditoría"}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex" to="/certification">
              <Tooltips text={"Certificación"} position="right">
                <Icon className={"mx-3"} icon={["fas", "certificate"]} />
              </Tooltips>
              {show ? "" : "Certificación"}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex" to="/company_position">
              <Tooltips text={"Posición"} position="right">
                <Icon className={"mx-3"} icon={["fas", "briefcase"]} />
              </Tooltips>
              {show ? "" : "Posición"}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex" to="/flag">
              <Tooltips text={"Indicador"} position="right">
                <Icon className={"mx-3"} icon={["fas", "flag"]} />
              </Tooltips>
              {show ? "" : "Indicador"}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex" to="/noAccordance">
              <Tooltips text={"No conformidad"} position="right">
                <Icon className={"mx-3"} icon={["fas", "file-circle-xmark"]} />
              </Tooltips>
              {show ? "" : "No conformidad"}
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link d-flex" to="/isoRule">
              <Tooltips text={"Normas ISO"} position="right">
                <Icon className={"mx-3"} icon={["fas", "ruler"]} />
              </Tooltips>
              {show ? "" : "Normas ISO"}
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link d-flex" to="/position">
              <Tooltips text={"Posición"} position="right">
                <Icon className={"mx-3"} icon={["fas", "user-tie"]} />
              </Tooltips>
              {show ? "" : "Posición"}
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link d-flex" to="/process">
              <Tooltips text={"Procesos"} position="right">
                <Icon className={"mx-3"} icon={["fas", "arrow-trend-up"]} />
              </Tooltips>
              {show ? "" : "Procesos"}
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link d-flex" to="/risks">
              <Tooltips text={"Riesgos"} position="right">
                <Icon
                  className={"mx-3"}
                  icon={["fas", "triangle-exclamation"]} />
              </Tooltips>
              {show ? "" : "Riesgos"}
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link d-flex" to="/roles">
              <Tooltips text={"Roles"} position="right">
                <Icon className={"mx-3"} icon={["fas", "user-gear"]} />
              </Tooltips>
              {show ? "" : "Roles"}
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link d-flex" to="/tasks">
              <Tooltips text={"Tareas"} position="right">
                <Icon className={"mx-3"} icon={["fas", "list-check"]} />
              </Tooltips>
              {show ? "" : "Tareas"}
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link d-flex" to="/users">
              <Tooltips text={"Usuarios"} position="right">
                <Icon className={"mx-3"} icon={["fas", "user"]} />
              </Tooltips>
              {show ? "" : "Usuarios"}
            </Link>
          </li>
        </ul>
      </nav></>
  );
};

export default Navbar;
