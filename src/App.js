import Totales from "./Components/Totales/Totales";
import './Assets/css/contenedorGral.css'
import Header from "./Views/HeaderYFooter/Header.jsx"
import Footer from "./Views/HeaderYFooter/Footer";
import Ultimos from "./Components/Ultimos/Ultimos";
import Familias from "./Components/FamiliasProducto/FamiliasProducto";

function App() {
  return (
    <div className="contenedorGral">

      <Header/>


      <Totales />
    
      <Ultimos/>
      <Familias/>
      <div className="productosEnDb">

      </div>
      <Footer/>

    </div>
  );
}

export default App;
