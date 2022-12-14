import React from "react";
import {useEffect, useState} from "react";

function TablaProductos () {

    const [productos, setProductos] = useState([]);

    useEffect ( () => {

        const fetchProducts = async () => {
            const response = await fetch('http://localhost:3001/api/products')
            const products = await response.json();
            setProductos(products.data);
        }
        fetchProducts()
            
    }, [])


    return (
        <div className="row mt-4">
        <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-3">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Productos en Base de Datos</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombre</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Precio</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Familia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos.map((producto) => {
                      return(
                        <tr key={producto.id}>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm"> {producto.Nombre} </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">{producto.Precio}</p>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">{producto.Family.Nombre}</p>
                      </td>
                    </tr>

                      )
                    } )}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </div>
    )
}

export default TablaProductos