import React, { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; // Import SweetAlert
import { useNavigate } from 'react-router-dom';

// Definir usuario y contraseña quemados
const QuemadoUsername = 'admin';
const QuemadoPassword = '123456';

function FromAdministracionLog() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle username input change
  function cargaUsuario(event) {
    setUsername(event.target.value);
  }

  // Function to handle password input change
  const cargaContra = (event) => {
    setPassword(event.target.value);
  };

  // Function to handle login logic, including validation
  const cargar = () => {
    // Validate if fields are empty
    if (!username || !password) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son requeridos.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    // Verificar si el usuario y la contraseña coinciden con el usuario quemado
    if (username === QuemadoUsername && password === QuemadoPassword) {
      Swal.fire({
        title: 'Ingresaste exitosamente!',
        text: '¿Quieres continuar?',
        icon: 'success',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/Administracion');
          localStorage.setItem("Autenticado", "true");
        }
      });
    } else {
      // Mostrar mensaje de error si los datos no son correctos
      Swal.fire({
        title: 'Error',
        text: 'Usuario o contraseña incorrectos.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    // Log the data for testing purposes
    console.log('Nombre:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Administracion</h2>
        <div className="input-box">
          <input
            className="login-input"
            type="text"
            id="username"
            name="username"
            placeholder=""
            value={username}
            onChange={cargaUsuario}
            required
          />
          <label htmlFor="username">Username</label>
          <span className="icono"><ion-icon name="mail"></ion-icon></span>
        </div>

        <div className="input-box">
          <input
            type="password"
            id="password"
            name="password"
            placeholder=""
            value={password}
            onChange={cargaContra}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        <p className="login-options">
          <label><input type="checkbox" /> Acepto las condiciones</label>
        
        </p>
        <button className="login-button" onClick={cargar}>Login</button>

        {/* Ionicons script */}
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </div>
    </div>
  );
}

export default FromAdministracionLog;
