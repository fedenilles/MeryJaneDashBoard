import React, { Component } from "react";
import './totales.css';
import UserTotal from "./subcomponents/UserTotal"

function Totales () {

    return(
        <div className="totales">
            <div className="totalProductos">

                <h2>Total de Productos</h2>
                <h2>52</h2>
        
            </div>
            <UserTotal/>
            <div className="totalFamilias">
                <h2>Total de Familias de Productos</h2>
                <h2>4</h2>
        
            </div>
      </div>
    )
}

export default Totales