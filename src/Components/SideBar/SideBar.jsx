import React from "react";
import { Link } from 'react-router-dom'

function SideBar () {
    return (
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark ps bg-white" id="sidenav-main">
    <div className="sidenav-header">
      <Link className="navbar-brand m-0" to="/" target="_blank">
        <span className="ms-1 font-weight-bold text-white">Mery Jane Dashboard</span>
      </Link>
    </div>
    <hr className="horizontal light mt-0 mb-2"/>
    <div className="collapse navbar-collapse w-auto ps ps--active-x" id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-Link text-white " to="/">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">Dashboard</i>
            </div>
            
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-white active bg-gradient-primary" to="/totales">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">Totales</i>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-white " to="/ultimos">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">Ultimos Creados</i>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-white " to="/familias">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">Tabla Familias</i>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-white " to="/productos">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">Tabla Productos</i>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </aside>
  )
}

export default SideBar