import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home.js";
import AddCliente from "./pages/AddCliente.js";
import ViewCliente from "./pages/ViewCliente.js";
import EditCliente from "./pages/EditCliente.js";
import BarraDeNav from './pages/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <BrowserRouter>
      <BarraDeNav></BarraDeNav>
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route path="/addCliente" element={<AddCliente/>}></Route>
        <Route path="/view/:id" element={<ViewCliente/>}></Route>
        <Route path="/editar/:id" element={<EditCliente/>}></Route>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
