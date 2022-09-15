import React from "react";
import "./ultimos.css"
import Image from "../../Assets/images/img.png"

function Ultimos () {
    return(
      <div className="row mt-4">
        <div className="col-lg-4 col-md-6 mt-4 mb-4">
          <div className="card z-index-2 ">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">              
              <img src={ Image } style= { {width : "100%"}} alt="Logo Mary Jane"/>
            </div>
            <div className="card-body">
              <h6 className="mb-0 ">Ultimo Producto</h6>
              <p className="text-sm ">ProductName</p>
              <p className="text-sm ">ProductPrice</p>
              <hr className="dark horizontal"/>
              <div className="d-flex ">
                <i className="material-icons text-sm my-auto me-1">Fecha de Creación</i>
                <p className="mb-0 text-sm"> 15/09/2022 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 mb-4">
          <div className="card z-index-2 ">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">              
              <img src={ Image } style= { {width : "100%"}} alt="Logo Mary Jane"/>
            </div>
            <div className="card-body">
              <h6 className="mb-0 ">Ultimo Usuario</h6>
              <p className="text-sm ">UsuarioName</p>
              <p className="text-sm ">UsuarioEmail</p>
              <hr className="dark horizontal"/>
              <div className="d-flex ">
                <i className="material-icons text-sm my-auto me-1">Fecha de Creación</i>
                <p className="mb-0 text-sm"> 15/09/2022 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Ultimos