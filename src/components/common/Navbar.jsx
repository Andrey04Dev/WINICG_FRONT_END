import React from "react";
import { Link } from "react-router-dom";
import logoCRAtesa from "../../assets/img/logo_crAtesa.png";
import Icon from "./Icon";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 me-5">
      <Link className="navbar-brand h-50 d-flex align-items-center" to="#">
          <img className="" src={logoCRAtesa} alt="Logo de Cr Atesa Software" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item" >
            <Link className="nav-link" to="/audit">
            <Icon className={"me-3"} icon={["fas", "user-tie"]}/>Auditoría
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/certification">
            <Icon className={"me-3"} icon={["fas", "certificate"]}/>Certificación
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/company_position">
            <Icon className={"me-3"} icon={["fas", "briefcase"]}/>Posición
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/flag">
            <Icon className={"me-3"} icon={["fas", "flag"]}/>Indicador
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/noAccordance">
            <Icon className={"me-3"} icon={["fas", "file-circle-xmark"]}/>No conformidad
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/isoRule">
              <Icon className={"me-3"} icon={["fas", "ruler"]}/>Normas ISO 
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/process">
              <Icon className={"me-3"} icon={["fas", "arrow-trend-up"]}/>Procesos
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/risks">
              <Icon className={"me-3"} icon={["fas", "triangle-exclamation"]}/>Riesgos
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/roles">
              <Icon className={"me-3"} icon={["fas", "user-gear"]}/>Roles
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/tasks">
              <Icon className={"me-3"} icon={["fas", "list-check"]}/>Tareas
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/users">
              <Icon className={"me-3"} icon={["fas", "user"]}/>Usuarios
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
