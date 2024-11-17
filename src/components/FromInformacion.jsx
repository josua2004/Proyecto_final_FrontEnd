import React from 'react';
import casa1 from '../img/casa1.jpg';
import casa2 from '../img/casa2.jpg';
import casa3 from '../img/casa3.jpg';
import casa4 from '../img/casa4.jpg';

function FromInformacion() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.heading}>Casa Prueba</h1>
        <p style={styles.subheading}>Casa para prueba de página</p>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.imageGallery}>
          <img src={casa1} alt="Vista de la playa" style={styles.image}/>
          <img src={casa2} alt="Habitación principal" style={styles.image}/>
          <img src={casa3} alt="Sala de estar" style={styles.image}/>
          <img src={casa4} alt="Terraza al aire libre" style={styles.image}/>
        </div>

        <div style={styles.bookingSection}>
          <div style={styles.priceInfo}>
            <h2 style={styles.price}>₡125,481 / noche</h2>
            <p style={styles.selectedDates}>Fechas seleccionadas</p>
          </div>
          <form style={styles.bookingForm}>
            <label style={styles.label}>Fecha de entrada</label>
            <input type="date" style={styles.input} />
            <label style={styles.label}>Fecha de salida</label>
            <input type="date" style={styles.input} />
            <label style={styles.label}>Huéspedes</label>
            <select style={styles.select}>
              <option>1 huésped</option>
              <option>2 huéspedes</option>
              <option>3 huéspedes</option>
              <option>4 huéspedes</option>
            </select>
            <button type="submit" style={styles.button}>Reservar ahora</button>
          </form>
          <p style={styles.noCharge}>No se hará ningún cargo aún</p>
        </div>
      </main>

      <section style={styles.additionalInfo}>
        <div style={styles.description}>
          <h2 style={styles.sectionHeading}>Alojamiento entero</h2>
          <p>10 huéspedes · 3 habitaciones · 4 camas · 2.5 baños</p>
          <p>Una experiencia perfecta para desconectarte, rodeado de naturaleza y comodidad.</p>
        </div>

        <div style={styles.reviewsSection}>
          <h2 style={styles.rating}>4.9</h2>
          <p>Favorito entre huéspedes</p>
          <div style={styles.review}>
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Increíble experiencia, el lugar es tal cual se muestra en las fotos. Muy limpio y cómodo." - Juan P.</p>
          </div>
          <div style={styles.review}>
            <p>⭐⭐⭐⭐</p>
            <p>"Hermosa vista y muy cerca de la playa. Definitivamente volvería." - María L.</p>
          </div>
          <button style={styles.button}>Mostrar más reseñas</button>
        </div>

        <div style={styles.hostInfo}>
          <h2 style={styles.sectionHeading}>Conoce a tu anfitrión</h2>
          <p style={styles.hostName}>Maria Laura, Superanfitrión</p>
          <p style={styles.hostDescription}>Experiencia en la atención de huéspedes y con un índice de respuesta del 100%.</p>
          <button style={styles.contactButton}>Contactar al anfitrión</button>
        </div>

        <div style={styles.propertyPolicies}>
          <h2 style={styles.sectionHeading}>Lo que debes saber</h2>
          <ul style={styles.policyList}>
            <li>Check-in después de las 3:00 PM</li>
            <li>No se permiten mascotas</li>
            <li>Check-out antes de las 11:00 AM</li>
            <li>No fumar en la propiedad</li>
          </ul>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerColumns}>
          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Soporte</h3>
            <ul style={styles.linkList}>
              <li><a href="#" style={styles.footerLink}>Centro de ayuda</a></li>
              <li><a href="#" style={styles.footerLink}>Opciones de cancelación</a></li>
              <li><a href="#" style={styles.footerLink}>Seguridad</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Acerca de</h3>
            <ul style={styles.linkList}>
              <li><a href="#" style={styles.footerLink}>Carreras</a></li>
              <li><a href="#" style={styles.footerLink}>Sostenibilidad</a></li>
              <li><a href="#" style={styles.footerLink}>Inversiones</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Políticas</h3>
            <ul style={styles.linkList}>
              <li><a href="#" style={styles.footerLink}>Política de privacidad</a></li>
              <li><a href="#" style={styles.footerLink}>Términos del servicio</a></li>
              <li><a href="#" style={styles.footerLink}>Política de reembolso</a></li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Síguenos</h3>
            <ul style={styles.socialLinks}>
              <li><a href="#" style={styles.footerLink}>Facebook</a></li>
              <li><a href="#" style={styles.footerLink}>Instagram</a></li>
              <li><a href="#" style={styles.footerLink}>Twitter</a></li>
            </ul>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>© 2024 Casa Prueba. Todos los derechos reservados.</p>
          <p><a href="#" style={styles.footerLink}>Mapa del sitio</a></p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'linear-gradient(to right, #ff9a8b, #ff6a88)',
    color: '#333',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
  },
  header: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#fff',
    color: '#ff385c',
    borderRadius: '0 0 25px 25px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    animation: 'fadeInDown 1.5s ease-out',
  },
  heading: {
    fontSize: '3.5em',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '3px',
  },
  subheading: {
    fontSize: '1.5em',
    color: '#717171',
  },
  mainContent: {
    display: 'flex',
    gap: '20px',
    padding: '40px 20px',
    flex: 1,
    justifyContent: 'space-between',
  },
  imageGallery: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    width: '60%',
  },
  image: {
    width: '100%',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    transition: 'transform 0.4s, box-shadow 0.4s',
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
    },
  },
  bookingSection: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    width: '35%',
    animation: 'slideInLeft 1.2s ease',
  },
  priceInfo: {
    textAlign: 'center',
    marginBottom: '25px',
  },
  price: {
    fontSize: '2.5em',
    color: '#ff385c',
  },
  selectedDates: {
    fontSize: '1em',
    color: '#717171',
  },
  bookingForm: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '15px',
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
  },
  input: {
    padding: '12px',
    borderRadius: '7px',
    border: '1px solid #ddd',
    backgroundColor: '#f8f8f8',
    fontSize: '1em',
    transition: 'background-color 0.3s',
    ':focus': {
      backgroundColor: '#ff385c',
      color: '#fff',
      borderColor: '#ff385c',
    },
  },
  select: {
    padding: '12px',
    borderRadius: '7px',
    border: '1px solid #ddd',
    backgroundColor: '#f8f8f8',
    fontSize: '1em',
    transition: 'background-color 0.3s',
    ':focus': {
      backgroundColor: '#ff385c',
      color: '#fff',
      borderColor: '#ff385c',
    },
  },
  button: {
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: '#ff385c',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    ':hover': {
      backgroundColor: '#ff577c',
      transform: 'scale(1.05)',
    },
  },
  noCharge: {
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '1em',
    color: '#717171',
  },
  additionalInfo: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 0 25px rgba(0,0,0,0.15)',
    marginBottom: '50px',
  },
  description: {
    marginBottom: '30px',
  },
  sectionHeading: {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#ff385c',
  },
  reviewsSection: {
    marginBottom: '30px',
  },
  review: {
    marginBottom: '15px',
    color: '#444',
  },
  rating: {
    fontSize: '2.5em',
    color: '#ff385c',
  },
  hostInfo: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  hostName: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  hostDescription: {
    color: '#717171',
  },
  contactButton: {
    padding: '12px 20px',
    borderRadius: '7px',
    backgroundColor: '#ff385c',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    ':hover': {
      backgroundColor: '#ff577c',
      transform: 'scale(1.05)',
    },
  },
  propertyPolicies: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  },
  policyList: {
    listStyleType: 'none',
    padding: '0',
  },
  footer: {
    backgroundColor: '#f8f8f8',
    padding: '30px 20px',
    color: '#717171',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    borderTop: '1px solid #ddd',
    animation: 'fadeInUp 1.5s ease-out',
  },
  footerText: {
    fontSize: '1em',
  },
  footerLinks: {
    display: 'flex',
    gap: '15px',
  },
  footerLink: {
    color: '#ff385c',
    textDecoration: 'none',
    transition: 'color 0.3s',
    ':hover': {
      color: '#ff577c',
    },
  },
  '@keyframes fadeInDown': {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  '@keyframes slideInLeft': {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
  '@keyframes fadeInUp': {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  footer: {
    backgroundColor: '#f8f8f8',
    padding: '40px 20px',
    color: '#717171',
  },
  footerColumns: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  column: {
    flex: 1,
    padding: '0 15px',
  },
  columnHeading: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#444',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
  },
  footerLink: {
    color: '#ff385c',
    textDecoration: 'none',
    fontSize: '0.9em',
    transition: 'color 0.3s',
    ':hover': {
      color: '#ff577c',
    },
  },
  footerBottom: {
    textAlign: 'center',
    borderTop: '1px solid #ddd',
    paddingTop: '20px',
    fontSize: '0.85em',
  },
};

export default FromInformacion;
