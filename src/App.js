import Totales from "./Components/Totales/Totales";
import './Assets/css/contenedorGral.css'
import Header from "./Views/HeaderYFooter/Header.jsx"
import Footer from "./Views/HeaderYFooter/Footer";
import Ultimos from "./Components/Ultimos/Ultimos";
import Familias from "./Components/FamiliasProducto/FamiliasProducto";
import TablaProductos from "./Components/TablaProductos/TablaProductos"
import "./Components/Totales/material-dashboard.css"

function App() {
  return (
    <div className="g-sidenav-show  bg-gray-200">

      <Header/>

      <Totales />
    
      <Ultimos/>

      <Familias/>

      <TablaProductos/>

      <Footer/>

    </div>
  );
}

export default App;
