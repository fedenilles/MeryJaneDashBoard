import React from "react";
import "./ultimos.css"

function Ultimos () {
    return(
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
    )
}

export default Ultimos