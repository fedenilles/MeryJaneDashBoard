import React from "react";
import imageDefault from "../../Assets/images/img.png"

function Ultimos(props) {
  const { productos, usuarios } = props

  return (
    
    <div className="row mt-4">

      <div className="col-lg-4 col-md-6 mt-4 mb-4">
        {  productos.length === 0 && <h2>Cargando</h2>}
        {  productos.length !== 0 && 
        
        <div className="card z-index-2 ">

          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent card-header-center">
            <img src={ productos[productos.length - 1].imagen !=='N/A'? productos[productos.length - 1].imagen : imageDefault} style={{ width: "80%" }} alt="Logo Mary Jane" />
          </div>
          <div className="card-body">
            <h6 className="mb-0 ">Ultimo Producto</h6>
            <p className="text-sm ">{productos[productos.length - 1].Nombre}</p>
            <p className="text-sm ">{productos[productos.length - 1].Precio}</p>
            <hr className="dark horizontal" />
            <div className="d-flex ">
              <i className="material-icons text-sm my-auto me-1">Fecha de Creación</i>
              <p className="mb-0 text-sm"> 15/09/2022 </p>
            </div>
          </div>
        </div>
        }
        
      </div>


      <div className="col-lg-4 col-md-6 mt-4 mb-4">
      {  usuarios.length === 0 && <h2>Cargando</h2>}
        {  usuarios.length !== 0 &&
        <div className="card z-index-2 ">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent card-header-center">
            <img src={ usuarios[usuarios.length - 1].Avatar !== "N/A" ? usuarios[usuarios.length - 1].Avatar : imageDefault} style={{ width: "90%" }} alt="Logo Mary Jane" />
          </div>
          <div className="card-body">
            <h6 className="mb-0 ">Ultimo Usuario</h6>
            <p className="text-sm ">{usuarios[usuarios.length - 1].Nombre + " " + usuarios[usuarios.length - 1].Apellido }</p>
            <p className="text-sm ">{usuarios[usuarios.length - 1].Email}</p>
            <hr className="dark horizontal" />
            <div className="d-flex ">
              <i className="material-icons text-sm my-auto me-1">Fecha de Creación</i>
              <p className="mb-0 text-sm"> 15/09/2022 </p>
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Ultimos