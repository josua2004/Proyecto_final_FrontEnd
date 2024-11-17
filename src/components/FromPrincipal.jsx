import React, { useEffect, useState } from 'react'; // Importa React y hooks useEffect y useState
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate para la navegación
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; // Importa Swal para mostrar alertas
import '../style/Principal.css'; // Importa los estilos CSS para el componente
import { getAdmin } from '../services/GetAdmin'; // Importa la función para obtener datos del servicio de administración
import rurales from '../img/casas-rurales.jpg'; // Importa una imagen de casas rurales


const FromPrincipal = () => { // Declara el componente funcional FromPrincipal
    const [rentals, setRentals] = useState([]); // Define un estado para almacenar las casas en alquiler
    const navigate = useNavigate(); // Inicializa el hook para navegar entre rutas

    useEffect(() => { // Efecto que se ejecuta al montar el componente
        const fetchRentals = async () => { // Función asíncrona para obtener los alquileres
            const data = await getAdmin(); // Llama a la función getAdmin para obtener las casas
            setRentals(data); // Actualiza el estado con los datos obtenidos
        };
        fetchRentals(); // Llama a la función fetchRentals
    }, []); // Dependencias vacías, se ejecuta solo al montar el componente

    const handleLogout = () => { // Función para manejar el cierre de sesión
        Swal.fire({ // Muestra una alerta con SweetAlert
            title: 'Cerraste sesión exitosamente!', // Título de la alerta
            text: 'Gracias por cumplir con nuestros requerimientos.', // Texto de la alerta
            icon: 'success', // Icono de la alerta
            confirmButtonText: 'Ok' // Texto del botón de confirmación
        });
        navigate('/login'); // Redirige a la página de inicio de sesión
        localStorage.removeItem('Autenticado'); // Elimina el elemento 'Autenticado' del localStorage
    };

    return ( // Devuelve el JSX del componente
        <div className="vacation-container"> 
            {/* Header */}
            <header className="header"> 
                <div className="logo">hogar al que ir</div> 
                <div className="header-buttons"> 
                    <Link to="/Mapa" className="header-btn">Ubicacion</Link> 
                    <Link to="/SobreNosotros" className="header-btn">Sobre nosotros</Link> 
                    <Link to="/AdministracionLog" className="header-btn">Administracion</Link>
                </div>
                <div className="customer-service">El mejor cliente de Nosara· 2024</div> 
            </header>

            <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button> 

            {/* Hero Section */}
          <section className="hero"> 
           <div className="overlay"></div> 
            <div className="hero-content"> 
            <h1>Nosara Alquiler</h1> 
            <h3>Encuentra 15 ofertas disponibles de 3 socios</h3> 

            {/* Reserva Formulario */}

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

            {/* Rental Cards Section */}
            <section className="rental-container"> 
                {rentals.map((casa) => ( 
                   <div className="card">
                   {/* Mostrar la imagen */}
                   <img 
                       src={casa.nombre} 
                       width="100" 
                   />
                   <h3>{casa.img}</h3> {/* Nombre de la casa */}
                   <p>{casa.precio}</p> {/* Precio de la casa */}
          
                   <p>{casa.rating} ★</p> {/* Calificación de la casa */}
                   <p>{casa.reviews} Reseñas</p> {/* Número de reseñas */}
                 
                   <Link to="/InformacionCasa" className="toHover"><button className="view-deal-btn">Mas informacion..</button></Link> 
               </div>
                ))} 
            </section>

            {/* Highlight Section */}
            <section className="highlight-section"> 
                <div className="highlight-content"> 
                    <h1 className="highlight-title">2024 el mejor servicio de nosara</h1> 
                    <p className="highlight-text">
                        Homes-A/E recibió el Cuarto lugar en la categoría de alquileres economicos y serviciales en nosara. 
                    </p>
                </div>
                <div className="highlight-badge">
                    <img src={rurales} alt="casas rurales" /> 
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
                    {['Luna de miel en Costa Rica', 'Vacaciones de primavera en Costa Rica', 'Alquileres de vacaciones en la playa', 'B’n’Bs en la provincia de Guanacaste', 'Vacaciones familiares'].map((idea, index) => ( // Mapea sobre un arreglo de ideas
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

export default FromPrincipal; // Exporta el componente para que se pueda usar en otras partes de la aplicación
