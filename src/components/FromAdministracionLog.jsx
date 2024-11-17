import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado del componente.
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; // Importa la biblioteca SweetAlert para mostrar alertas.
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de React Router para redireccionar a otras páginas.

// Definir usuario y contraseña quemados
const QuemadoUsername = 'admin'; // Define el nombre de usuario predefinido (quemado) como "admin".
const QuemadoPassword = '123456'; // Define la contraseña predefinida (quemada) como "123456".

function FromAdministracionLog() {
  // Define el estado para los campos de nombre de usuario y contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Inicializa useNavigate para redireccionar a otras rutas.

  // Función para manejar el cambio en el input del nombre de usuario
  function cargaUsuario(event) {
    setUsername(event.target.value); // Actualiza el estado del nombre de usuario con el valor del input.
  }

  // Función para manejar el cambio en el input de la contraseña
  const cargaContra = (event) => {
    setPassword(event.target.value); // Actualiza el estado de la contraseña con el valor del input.
  };

  // Función que maneja la lógica del inicio de sesión, incluyendo la validación
  const cargar = () => {
    // Valida si los campos están vacíos
    if (!username || !password) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son requeridos.', // Muestra una alerta si algún campo está vacío.
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return; // Detiene la ejecución si hay campos vacíos.
    }

    // Verificar si el usuario y la contraseña coinciden con los datos quemados
    if (username === QuemadoUsername && password === QuemadoPassword) {
      Swal.fire({
        title: 'Ingresaste exitosamente!', // Muestra un mensaje de éxito si el usuario y la contraseña coinciden.
        text: '¿Quieres continuar?',
        icon: 'success',
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) { // Si el usuario confirma, se redirige a la página de administración.
          navigate('/Administracion'); // Redirige a la página de administración.
          localStorage.setItem("Autenticado", "true"); // Guarda en el almacenamiento local que el usuario está autenticado.
        }
      });
    } else {
      // Mostrar mensaje de error si el usuario o la contraseña son incorrectos
      Swal.fire({
        title: 'Error',
        text: 'Usuario o contraseña incorrectos.', // Muestra un mensaje de error si los datos no coinciden.
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }

    // Muestra en la consola el nombre de usuario y la contraseña ingresados (solo para pruebas)
    console.log('Nombre:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-container"> {/* Contenedor principal del formulario de inicio de sesión */}
      <div className="login-box"> {/* Caja que contiene el formulario de inicio de sesión */}
        <h2 className="login-title">Administracion</h2> {/* Título del formulario de administración */}
        <div className="input-box"> {/* Contenedor para el input del nombre de usuario */}
          <input
            className="login-input"
            type="text"
            id="username"
            name="username"
            placeholder="" // Placeholder vacío (puede personalizarse)
            value={username}
            onChange={cargaUsuario} // Asigna la función para manejar cambios en el input
            required
          />
          <label htmlFor="username">Username</label> {/* Etiqueta para el input de nombre de usuario */}
          <span className="icono"><ion-icon name="mail"></ion-icon></span> {/* Ícono de correo electrónico de Ionicons */}
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

        <p className="login-options"> {/* Contenedor para opciones adicionales */}
          <label><input type="checkbox" /> Acepto las condiciones</label> {/* Checkbox para aceptar condiciones */}
        </p>
        <button className="login-button" onClick={cargar}>Login</button> {/* Botón para iniciar sesión que ejecuta la función cargar */}

        {/* Scripts para los íconos de Ionicons */}
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </div>
    </div>
  );
}

export default FromAdministracionLog; // Exporta la función del formulario de administración
