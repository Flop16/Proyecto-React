import logo from './logo.svg';
import './App.css';


import InicioPage from './pages/InicioPage';
import ContactoPage from './pages/ContactoPage'; 
import TratamientosPage from './pages/TratamientosPage';
import EquipoPage from './pages/EquipoPage';
import UbicaciónPage from './pages/UbicaciónPage';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Menu from './componentes/Menu'

function App() {
  return (
    <>
             
      <Router> 
      <Menu />
      <div className="container pt-5 mt-5">

         
        <Routes>
            <Route path="/" element={<InicioPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/tratamientos" element={<TratamientosPage />} />
            <Route path="/equipo" element={<EquipoPage />} />
            <Route path="/ubicacion" element={<UbicaciónPage />} />
        </Routes>
  
      </div>
      
      </Router>
      
    </>
  );
}

export default App;


