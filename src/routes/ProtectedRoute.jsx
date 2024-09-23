import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    
    const estaAutenticado = localStorage.getItem('Autenticado') === 'true'; 

    if (!estaAutenticado ) {
       
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;