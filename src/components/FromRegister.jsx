import React, { useState } from 'react';
import { postUsers } from '../services/PostUsers';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import { useNavigate } from 'react-router-dom';
import '../style/Register.css';  // Import the styles

function FormRegister() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const cargarEmail = (event) =>
  setEmail(event.target.value);

  const cargaUsuario = (event) => 
  setUsername(event.target.value);
  
  const cargaContra = (event) => 
  setPassword(event.target.value);

  const cargar = () => {
    if (!email || !username || !password) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son requeridos.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }
    postUsers(email, username, password)
      .then(() => {
        Swal.fire({
          title: 'Registro exitoso!',
          text: '¿Quieres continuar?',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login');
          }
        });
      });
  };

  return (
    <div className="body"> {/* Wrapper with animated background */}
      <div className='control'>
        <h2 className='titulo'>Regístrate</h2>
        <div className='input-box'>
          <input
            type="text"
            id="email"
            name='email'
            placeholder=''
            value={email}
            onChange={cargarEmail}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className='input-box'>
          <input
            type="text"
            id="username"
            name="username"
            placeholder=""
            value={username}
            onChange={cargaUsuario}
            required
          />
          <label htmlFor="username">Name</label>
        </div>
        <div className='input-box'>
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
        <button className='button' onClick={cargar}>Registrarme</button>
        <p className='abc'>
          <a href="/login">¿Ya tengo cuenta?</a>
        </p>
      </div>
    </div>
  );
}

export default FormRegister;
