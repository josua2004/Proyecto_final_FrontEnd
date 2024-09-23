import React from "react";
import { Navigate } from "react-router-dom";


const RutaPrivada = ({ Children }) => {

    const EstaAutenticado = localStorage.getItem('Autenticado') === 'true';

    if (!EstaAutenticado) {

        return <Navigate to= "/" />

    }

    return Children;

}

export default RutaPrivada;