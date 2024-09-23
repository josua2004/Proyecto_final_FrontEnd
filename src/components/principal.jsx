import React from "react";
import { Form, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import '../style/Principal.css';
import casa from '../img/alquiler-casas-lujo.jpg'
import rurales from '../img/casas-rurales.jpg'

const FromPrincipal = () => {

 
   
  const navigate = useNavigate(); // Hook para la navegación

  // Función para manejar el cierre de sesión
  const handleLogout = () => {

    Swal.fire({
      title: 'Cerraste sesion exitosamente!',
      text: 'Gracias por cumplir con nuestros requerimientos.',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    // Aquí puedes agregar cualquier lógica adicional de cierre de sesión, como limpiar tokens o sesiones
    navigate('/login'); // Redirigir al usuario al login
  };

  const rentals = [
    {
      id: 1,
      title: "Casa en peladas nosara",
      location: "Nosara, Guanacaste Province, Costa Rica",
      price: "355mil colones por mes",
      date: "Marzo 8 - abril 9",
      guests: "6 cuartos · 3 baños",
      rating: "4.8",
      reviews: "17",
      imgSrc: "URL_DE_LA_IMAGEN1", 
    },
    {
      id: 2,
      title: "Casa en arenales",
      location: "Nosara, Guanacaste Province, Costa Rica",
      price: "281mil colones por mes",
      date: "Marzo 29 - Abril 5",
      guests: "3 cuartos · 2 baños",
      rating: "5.0",
      reviews: "84",
      imgSrc: "URL_DE_LA_IMAGEN2", 
    },
    {
      id: 3,
      title: "Villa en Nosara con aire acondicionado",
      location: "Nosara, Guanacaste Province, Costa Rica",
      price: "250mil colones por mes",
      date: "Noviembre 25 - Diciembre 2",
      guests: "2 cuartos · 2 baños",
      rating: "5.0",
      reviews: "2",
      imgSrc: "URL_DE_LA_IMAGEN3", 
    },
    {
      id: 4,
      title: "Casa en nosara centro",
      location: "Nosara, Guanacaste Province, Costa Rica",
      price: "150mil colones por mes",
      date: "marzo 8 - noviembre 23",
      guests: "2 cuartos . 1 baño",
      rating: "4.5",
      reviews: "2",
      imgSrc: "URL_DE_LA_IMAGEN4", 
    },
    {
      id: 5,
      title: "Casa En frente del gollo nosara",
      location: "Nosara, Guanacaste Province, Costa Rica",
      price: "180mil colones por mes",
      date: "Agosto 13 - Septiembre 14",
      guests: "2 cuartos . 2 baños",
      rating: "4.5",
      reviews: "3",
      imgSrc: "casas-rurales.jpg",
    },
    {
      id: 6,
      title: "Casa a los 100mtrs del cementerio de nosara",
      location: "Nosara, Guanacaste Province, Costa Rica",
      price: "150mil colones por mes",
      date: "Septiembre 1 - 2 Noviembre",
      guests: "2 cuatros . 1 baño",
      rating: "4.5",
      reviews: "2",
      imgSrc: "alquiler-casas-lujo.jpg",
    },

  ];

  return (
    <div className="vacation-container">
      {/* Header */}
      <header className="header">
        <div className="logo">home to go</div>
        <div className="header-buttons">
          <Link to="/Mapa" className="header-btn">Ubicacion</Link>
          <Link to="/SobreNosotros" className="header-btn">Sobre nosotros</Link>
          <Link to="/AdministracionLog" className="header-btn">Administracion</Link>
        </div>
        <div className="customer-service">El mejor cliente de Nosara· 2024</div>
      </header>

      {/* Floating Cerrar Sesión Button */}
      <button className="logout-btn" onClick={handleLogout}>Cerrar Sesión</button>

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Nosara Alquiler</h1>
          <h3>Encuentra 15 ofertas disponibles de 3 socios</h3>
          <div className="search-bar">
            
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="filters">
        <div className="filter-buttons">
          <button className="buton22">Adultos</button>
          <button className="buton22">Aire acondicionado</button>
          <button className="buton22">Mascotas</button>
          <button className="buton22">Mantenimiento</button>
          <button className="buton22">Adultos mayores</button>
          <button className="buton22">Casas Economicas</button>
          <button className="buton22">Servicios</button>
        </div>
      </section>

      {/* Rental Listings Section */}
      <section className="rental-container">
        {rentals.map((rental) => (
          <div className="rental-card" key={rental.id}>
            <img src={casa} alt={rental.title} className="rental-img" />
            <div className="rental-info">
              <h3>{rental.price}</h3>
              <p>{rental.date}</p>
              <p>{rental.guests}</p>
              <h4>{rental.title}</h4>
              <p>{rental.rating} ⭐ - {rental.reviews} opiniones</p>
              <p>{rental.location}</p>
              <Link to="/Contactenos" className="toHover"><button className="view-deal-btn">Disponible / Ocupada</button></Link>
            </div>
          </div>
        ))}
      </section>

      {/* Highlight Section */}
      <section className="highlight-section">
        <div className="highlight-content">
          <h1 className="highlight-title">2024 el mejor servicio de nosara</h1>
          <p className="highlight-text">
            HomeToGo recibió el Cuarto lugar en la categoría de alquileres economicos y serviciales en nosara.
          </p>
        </div>
        <div className="highlight-badge">
        <img src={rurales} />
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities-section">
        <h2 className="section-title">Algunas de las maravillas que contiene las casas</h2>
        <div className="amenities-list">
          {['Piscina', 'Aire acondicionado', 'WiFi', 'Cocina', 'Balcón', 'patio', 'Lavadora', 'TV', 'Parrilla', 'Microondas', 'Lavavajillas', 'Apto para mascotas'].map((amenity, index) => (
            <span className="amenity" key={index}>{amenity}</span>
          ))}
        </div>
      </section>

      {/* Ideas Section */}
      <section className="ideas-section">
        <h2 className="section-title">Explora Más Ideas para alquileres</h2>
        <div className="ideas-list">
          {['Luna de miel en Costa Rica', 'Vacaciones de primavera en Costa Rica', 'Alquileres de vacaciones en la playa', 'B’n’Bs en la provincia de Guanacaste', 'Vacaciones familiares'].map((idea, index) => (
            <p key={index} className="idea">{idea}</p>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Términos del Servicio, Política de Privacidad y Legal</p>
        <div className="social-links">
          <a href="https://www.instagram.com/gomez._evans/" className="social-icon">Instagram</a>
          <a href="https://www.facebook.com/evans.porrasgomes/?locale=es_LA" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">LinkedIn</a>
          <a href="https://www.tiktok.com/@evansporrasgomez" className="social-icon">TikTok</a>
        </div>
      </footer>
    </div>
  );
};


export default FromPrincipal; 