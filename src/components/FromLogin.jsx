import React, { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; // Import SweetAlert
import { postUsers } from '../services/PostUsers';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css'; // Updated styles

// Function for the login form
function FormLogin() {

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
      confirmButtonText: 'Ok'
    });
    return;
  }

  if (username.trim()=== "") {
    Swal.fire({
      title: 'Error',
      text: 'Este Nombre no es valido.',
      icon: 'error',
    });
  }if (password.trim()==="") {
    Swal.fire({
      title: 'Error',
      text: 'Esta contraseña no es valida',
      icon: 'error',
    });
  }

  

  // Perform login action and show SweetAlert on success or error
  postUsers(username, password)
    .then(() => {
      Swal.fire({
        title: 'Logueaste exitosamente!',
        text: '¿Quieres continuar?',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/principal');
          localStorage.setItem("Autenticado", "true");
        }
      });
    })
    .catch((error) => {
      // Debug: Check what the error contains
      console.error('Error response:', error);

      // Handle errors, e.g. if the user is already registered or data is incorrect
      if (error.response) {
        switch (error.response.status) {
          case 400:
            Swal.fire({
              title: 'Datos incorrectos',
              text: 'Por favor, verifica tu usuario o contraseña.',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
            break;
          case 409:
            Swal.fire({
              title: 'Usuario ya registrado',
              text: 'El usuario que intentas usar ya está registrado.',
              icon: 'warning',
              confirmButtonText: 'Ok'
            });
            break;
          default:
            Swal.fire({
              title: 'Error',
              text: 'Algo salió mal, intenta de nuevo más tarde.',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
        }
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Algo salió mal, intenta de nuevo más tarde.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    });

  // Log the data for testing purposes
  console.log('Nombre:', username);
  console.log('Contraseña:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
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
          <a href="/Register">¿No tienes cuenta? Registrate</a>
        </p>
        <button className="login-button" onClick={cargar}>Login</button>

        {/* Ionicons script */}
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </div>
    </div>
  );
}

// Export the login form function
export default FormLogin;
