import React, {useEffect, useState, useRef} from "react";
import Header from "../HeaderYFooter/Header";
import Footer from "../HeaderYFooter/Footer";
import Ultimos from "../../Components/Ultimos/Ultimos"
import Familias from "../../Components/FamiliasProducto/FamiliasProducto";
import TablaProductos from "../../Components/TablaProductos/TablaProductos"
import Totales from "../../Components/Totales/Totales";


    


function ConCucharaGral () {

    const [usuarios, setUsuarios] = useState([]);
    const [productos, setProductos] = useState([]);
    const [familias, setFamilias] = useState([]);


    useEffect ( () => {

        const fetchUsers = async () => {
            const response = await fetch('http://localhost:3001/api/users')
            const users = await response.json();
            setUsuarios(users.data);
        }
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:3001/api/products')
            const products = await response.json();
            setProductos(products.data);
            setFamilias(products.meta.Categorias)
        }
        fetchUsers()
        fetchProducts()
            
    }, [])

    return (
        <div className= "main-content position-relative h-100 border-radius-lg">

        <Header/>
  
        <Totales productos={productos} usuarios={usuarios} familias={familias}/>
      
        <Ultimos productos={productos} usuarios={usuarios} familias={familias}/>
  
        <Familias productos={productos} usuarios={usuarios} familias={familias}/>
  
        <TablaProductos productos={productos} usuarios={usuarios} familias={familias}/>
  
        <Footer/>
        </div>
    )
}

export default ConCucharaGral