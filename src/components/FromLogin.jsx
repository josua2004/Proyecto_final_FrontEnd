import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado del componente.
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; // Importa la biblioteca SweetAlert para mostrar alertas.
import PostUser from '../services/PostUsers' // Importa la función postUsers que se usará para enviar los datos de usuario.
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de React Router para redireccionar a otras páginas.
import '../style/Login.css'; // Importa los estilos CSS para el componente de inicio de sesión.

// Función para el formulario de inicio de sesión
function FormLogin() {

  // Define el estado para el nombre de usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate(); // Inicializa useNavigate para redireccionar a otras rutas

  // Función para manejar el cambio en el input del nombre de usuario
  function cargaUsuario(event) {
    setUsername(event.target.value); // Actualiza el estado del nombre de usuario con el valor del input
  }

  // Función para manejar el cambio en el input de la contraseña
  const cargaContra = (event) => {
    setPassword(event.target.value); // Actualiza el estado de la contraseña con el valor del input
  };

  // Función que maneja la lógica del inicio de sesión, incluyendo la validación
  const cargar = async () => {
    // Valida si los campos están vacíos
    if (!username || !password) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son requeridos.', // Muestra una alerta si algún campo está vacío
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return; // Detiene la ejecución si hay campos vacíos
    }

    // Realiza la acción de inicio de sesión y muestra un SweetAlert en caso de éxito o error
    const res = await PostUser.PostUser(username,password)  // Llama a la función postUsers con el nombre de usuario y contraseña

    alert("Login éxitoso",res);

    if (res.access) {
      navigate('/');
    }

    // Muestra los datos en la consola para pruebas
    console.log('Nombre:', username); // Imprime el nombre de usuario en la consola
    console.log('Contraseña:', password); // Imprime la contraseña en la consola
  };

  return (
    <div className="login-container"> {/* Contenedor principal del formulario de inicio de sesión */}
      <div className="login-box"> {/* Caja que contiene el formulario */}
        <h2 className="login-title">Login</h2> {/* Título del formulario de inicio de sesión */}
        <div className="input-box"> {/* Contenedor para el input del nombre de usuario */}
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
          <label htmlFor="username">Username</label> {/* Etiqueta para el input de nombre de usuario */}
          <span className="icono"><ion-icon name="mail"></ion-icon></span> {/* Ícono de usuario */}
        </div>

        <div className="input-box"> {/* Contenedor para el input de la contraseña */}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="" 
            value={password}
            onChange={cargaContra} 
            required
          />
          <label htmlFor="password">Password</label> {/* Etiqueta para el input de la contraseña */}
        </div>

        <p className="login-options">
          <label><input type="checkbox" /> Acepto las condiciones</label> {/* Checkbox para aceptar condiciones */}
          <a href="/Register">¿No tienes cuenta? Registrate</a> {/* Enlace a la página de registro */}
        </p>
        <button className="login-button" onClick={cargar}>Login</button> {/* Botón para iniciar sesión que ejecuta la función cargar */}

        {/* Script de Ionicons para cargar los iconos */}
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </div>
    </div>
  );
}

// Exporta la función del formulario de inicio de sesión
export default FormLogin;
