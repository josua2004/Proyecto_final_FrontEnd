import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado del componente.
//import { postUsers } from '../services/PostUsers'; // Importa la función postUsers para manejar el registro de usuarios.
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; // Importa la biblioteca SweetAlert para mostrar alertas.
import { useNavigate } from 'react-router-dom'; // Importa useNavigate de React Router para redireccionar a otras páginas.
import '../style/Register.css';  // Importa los estilos CSS para el formulario de registro.

function FormRegister() {
  // Define el estado para los campos de correo electrónico, nombre de usuario y contraseña
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Inicializa useNavigate para redireccionar a otras rutas

  // Función para manejar el cambio en el input de correo electrónico

  const cargarNombre = (event) =>
    setNombre(event.target.value);

  const cargarApellido = (event) =>
    setApellido(event.target.value)

  const cargarEmail = (event) =>
    setEmail(event.target.value); // Actualiza el estado del correo electrónico con el valor del input

  // Función para manejar el cambio en el input de nombre de usuario
  const cargaUsuario = (event) => 
    setUsername(event.target.value); // Actualiza el estado del nombre de usuario con el valor del input
  
  // Función para manejar el cambio en el input de la contraseña
  const cargaContra = (event) => 
    setPassword(event.target.value); // Actualiza el estado de la contraseña con el valor del input

  // Función que maneja la lógica del registro, incluyendo la validación
  const cargar = () => {
    // Valida si los campos están vacíos
    if (!email || !username || !password || !nombre || !apellido) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son requeridos.', // Muestra una alerta si algún campo está vacío
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return; // Detiene la ejecución si hay campos vacíos
    }

    // Realiza la acción de registro y muestra un SweetAlert en caso de éxito o error
    postUsers(email, username, password, nombre, apellido) // Llama a la función postUsers con los datos ingresados
      .then(() => {
        Swal.fire({
          title: 'Registro exitoso!', // Muestra un mensaje de éxito si el registro es exitoso
          text: '¿Quieres continuar?',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) { // Si el usuario confirma, se redirige a la página de inicio de sesión
            navigate('/login'); // Redirige a la página de inicio de sesión
          }
        });
      });
  };

  return (
    <div className="body"> {/* Contenedor principal del formulario con fondo animado */}
      <div className='control'> {/* Caja que contiene el formulario */}
        <h2 className='titulo'>Regístrate</h2> {/* Título del formulario de registro */}
        <div className='input-box'>
          <input type="text"
          id='nombre'
          name='nombre'
          placeholder=''
          value={nombre}
          onChange={cargarNombre}
          required
          />
          <label htmlFor="email">Name</label>
        </div>
        <div className='input-box'>
          <input type="text"
          id='apellido'
          nombre='apellido'
          placeholder=''
          value={apellido}
          onChange={cargarApellido}
          required
          />
          <label htmlFor="email">Last name</label>
        </div>
        <div className='input-box'> {/* Contenedor para el input del correo electrónico */}
          <input
            type="text"
            id="email"
            name='email'
            placeholder='' 
            value={email}
            onChange={cargarEmail} 
            required
          />
          <label htmlFor="email">Email</label> {/* Etiqueta para el input de correo electrónico */}
        </div>
        <div className='input-box'> {/* Contenedor para el input del nombre de usuario */}
          <input
            type="text"
            id="username"
            name="username"
            placeholder=""
            value={username}
            onChange={cargaUsuario} 
            required
          />
          <label htmlFor="username">Name</label> {/* Etiqueta para el input de nombre de usuario */}
        </div>
        <div className='input-box'> {/* Contenedor para el input de la contraseña */}
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
        <button className='button' onClick={cargar}>Registrarme</button> {/* Botón para registrarse que ejecuta la función cargar */}
        <p className='abc'>
          <a href="/login">¿Ya tengo cuenta?</a> {/* Enlace a la página de inicio de sesión para usuarios ya registrados */}
        </p>
      </div>
    </div>
  );
}

export default FormRegister;  
