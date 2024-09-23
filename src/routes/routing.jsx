import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Principal from '../pages/Principal';
import SobreNosotros from '../pages/SobreNosotros';
import Contactenos from '../pages/Contactenos';
import Mapa from '../pages/Mapa';
import AdministracionLog from '../pages/AdministracionLog';
import Administracion from '../pages/Administracion'
import ProtectedRoute from './ProtectedRoute';


const Routing = () => {
  return (
    
    <Router>
     <Routes>
     <Route path="/" element={<Login />} />
       <Route path="/Register" element={<Register />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Principal" element={<ProtectedRoute><Principal /></ProtectedRoute>}/>
       <Route path="/SobreNosotros" element={<SobreNosotros/>} />
       <Route path="/Contactenos" element={<Contactenos />} />
       <Route path="/Mapa" element={<Mapa />} />
       <Route path="/AdministracionLog" element={<AdministracionLog />} />
       <Route path="/Administracion" element={<ProtectedRoute><Administracion /></ProtectedRoute>}/>

     </Routes>
    </Router>
 
   );
};
export default Routing;


