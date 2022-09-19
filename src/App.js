import SideBar from "./Components/SideBar/SideBar";
import "./Assets/css/material-dashboard.css"
import ConCucharaGral from './Views/ConCucharaGral/ConCucharaGral';


function App() {
  

  return (
    <div className="g-sidenav-show  bg-gray-200">
      
      <SideBar/>

      <ConCucharaGral/>

    </div>
  );
}

export default App;
