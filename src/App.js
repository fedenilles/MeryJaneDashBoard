import SideBar from "./Components/SideBar/SideBar";
import "./Assets/css/material-dashboard.css"
import ConCucharaGral from './Views/ConCucharaGral/ConCucharaGral';
import { Switch, Route } from 'react-router-dom'
import Totales from "./Components/Totales/Totales";
import Ultimos from "./Components/Ultimos/Ultimos";
import Familias from "./Components/FamiliasProducto/FamiliasProducto";
import TablaProductos from "./Components/TablaProductos/TablaProductos";

function App() {

  return (
    <div className="g-sidenav-show  bg-gray-200">
      
      <SideBar/>

      <ConCucharaGral/>

      <Switch>
        <Route exact path = "/totales" component = {ConCucharaGral}/>
        <Route exact path = "/ultimos" component = {ConCucharaGral}/>
        <Route exact path = "/familias" component = {ConCucharaGral}/>
        <Route exact path = "/productos" component = {ConCucharaGral}/>
        <Route exact path = "/" component = {ConCucharaGral}/>

      </Switch>


    </div>
  );
}

export default App;
