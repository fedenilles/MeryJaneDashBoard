import React from "react";
import "./ultimos.css"
import "../Totales/material-dashboard.css"
import Image from "../../Assets/images/img.png"

function Ultimos () {
    return(
        <div>
            <div className="row mt-4">
        <div className="col-lg-4 col-md-6 mt-4 mb-4">
          <div className="card z-index-2 ">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
              <img src={ Image } alt="Logo Mary Jane"/>
              </div>
            </div>
            <div className="card-body">
              <h6 className="mb-0 ">Website Views</h6>
              <p className="text-sm ">Last Campaign Performance</p>
              <hr className="dark horizontal"/>
              <div className="d-flex ">
                <i className="material-icons text-sm my-auto me-1">schedule</i>
                <p className="mb-0 text-sm"> campaign sent 2 days ago </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 mb-4">
          <div className="card z-index-2  ">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div className="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                
              </div>
            </div>
            <div className="card-body">
              <h6 className="mb-0 "> Daily Sales </h6>
              <p className="text-sm ">  increase in today sales. </p>
              <hr className="dark horizontal"/>
              <div className="d-flex ">
                <i className="material-icons text-sm my-auto me-1">schedule</i>
                <p className="mb-0 text-sm"> updated 4 min ago </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-4 mb-3">
          <div className="card z-index-2 ">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">

            </div>
            <div className="card-body">
              <h6 className="mb-0 ">Completed Tasks</h6>
              <p className="text-sm ">Last Campaign Performance</p>
              <hr className="dark horizontal"/>
              <div className="d-flex ">
                <i className="material-icons text-sm my-auto me-1">schedule</i>
                <p className="mb-0 text-sm">just updated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        <div className="ultimos">
            <div className="ultimoProducto">
                <h2>Ultimo Producto</h2>
                <h3>Product Name</h3>
                <h3>Product Image</h3>
                <h3>Product Price</h3>
                <h3>Product Description</h3>
            </div>
            <div className="ultimoProducto">
                <h2>Ultimo Usuario</h2>
                <h3>User Name</h3>
                <h3>User Image</h3>
                <h3>User Price</h3>
                <h3>User Description</h3>
            </div>
        </div>
        </div>
    )
}

export default Ultimos