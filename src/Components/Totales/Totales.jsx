import React, {useEffect, useState, useRef} from "react";


function Totales (props) {
  const {productos, familias, usuarios} = props


    return(
        <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">Products</i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Total Products</p>
                <h4 className="mb-0">{ productos.length }</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">Users</i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Total Users</p>
                <h4 className="mb-0"> {usuarios.length} </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-header p-3 pt-2">
              <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                <i className="material-icons opacity-10">Families</i>
              </div>
              <div className="text-end pt-1">
                <p className="text-sm mb-0 text-capitalize">Total Families</p>
                <h4 className="mb-0"> {familias.length} </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default Totales