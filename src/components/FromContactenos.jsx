import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Contactenos.css'; // Reuse the styles from Register

export const FromContactenos = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_d9eg679', 'template_v32elpg', form.current, {
        publicKey: 'beY4LXYmFVdrfIM1k',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="body">
      <div className="control">
        <h2 className="titulo">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-box">
            <input type="text" name="user_name" placeholder="" required />
            <label>Nombre</label>
          </div>
          <div className="input-box">
            <input type="email" name="user_email" placeholder="" required />
            <label>Correo</label>
          </div>
          <div className="input-box">
            <textarea className='text' name="message" placeholder="Escribe tu mensaje" required />
          </div>
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
