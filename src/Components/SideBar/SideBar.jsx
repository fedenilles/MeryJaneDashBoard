import React from "react";

function SideBar () {
    return (
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark ps bg-white" id="sidenav-main">
    <div className="sidenav-header">
      <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
        <span className="ms-1 font-weight-bold text-white">Mery Jane Dashboard</span>
      </a>
    </div>
    <hr className="horizontal light mt-0 mb-2"/>
    <div className="collapse navbar-collapse w-auto ps ps--active-x" id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white " href="/">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">Dashboard</i>
            </div>
            
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white active bg-gradient-primary" href="../pages/tables.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">Totales</i>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="../pages/billing.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">Ultimos Creados</i>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="../pages/virtual-reality.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">Tabla Productos</i>
            </div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white " href="../pages/rtl.html">
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">Tabla Familias</i>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  )
}

export default SideBar