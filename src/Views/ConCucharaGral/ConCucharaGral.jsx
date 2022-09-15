import React, {useEffect, useState, useRef} from "react";
import Header from "../HeaderYFooter/Header";
import Footer from "../HeaderYFooter/Footer";
import Ultimos from "../../Components/Ultimos/Ultimos"
import Familias from "../../Components/FamiliasProducto/FamiliasProducto";
import TablaProductos from "../../Components/TablaProductos/TablaProductos"
import Totales from "../../Components/Totales/Totales";


    


function ConCucharaGral () {

    const [usuarios, setUsuarios] = useState([]);
    console.log(usuarios);


    useEffect ( () => {

        const FetchData = async () => {

            const response = await fetch('http://localhost:3001/api/users')
            const usuarios = await response.json


        }
        FetchData()
            .catch(console.error);
    }, [])

    return (
        <div className= "main-content position-relative h-100 border-radius-lg">

        <Header/>
  
        <Totales />
      
        <Ultimos/>
  
        <Familias/>
  
        <TablaProductos/>
  
        <Footer/>
        </div>
    )
}

export default ConCucharaGral