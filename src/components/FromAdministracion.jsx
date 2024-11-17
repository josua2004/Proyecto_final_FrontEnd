import React, { useState, useEffect } from 'react';
import '../style/Administracion.css';

// Importamos React y los hooks `useState` y `useEffect` para manejar el estado y los efectos secundarios.
// También importamos el archivo de estilos `Administracion.css`.

import { getAdmin } from '../services/GetAdmin';
import { postAdmin } from '../services/PostAdmin';
import { updateAdmin } from '../services/UpdateAdmin'; 
import { deleteAdmin } from '../services/DeleteAdmin';

// Importamos las funciones para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) desde servicios externos.

function FormAdministracion() {
    // Definimos estados usando el hook `useState`.
    const [nombre, setNombre] = useState(''); // Estado para el nombre de la casa.
    const [precios, setPrecios] = useState(''); // Estado para el precio de la casa.
    const [img, setImg] = useState(''); // Estado para almacenar la imagen en formato base64.
    const [previewImg, setPreviewImg] = useState(null); // Estado para la vista previa de la imagen seleccionada.
    const [datoscasa, setDatosCasa] = useState([]); // Estado que almacena la lista de casas.
    const [editId, setEditId] = useState(null); // Estado para almacenar el ID de la casa que se está editando.

    // `formValues` almacena los valores del formulario que se utilizarán para crear o editar una casa.
    const [formValues, setFormValues] = useState({
        title: '',
        location: '',
        price: '',
        date: '',
        guests: '',
        rating: '',
        reviews: '',
        imgSrc: ''
    });

    // Hook `useEffect` para obtener datos de las casas cuando el componente se monta.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAdmin(); // Llamada a la función `getAdmin` para obtener los datos de las casas.
              
                  console.log(data);
                  
                setDatosCasa(data); // Almacena los datos en el estado `datoscasa`.
            } catch (error) {
                console.error('Error al obtener los datos', error); // Manejo de errores en la obtención de datos.
            }
        };
        fetchData(); // Llamamos a la función para obtener los datos cuando el componente se monta.
    }, []); // El segundo argumento vacío asegura que esto solo se ejecute una vez al montar el componente.

    // Función para manejar los cambios en los inputs del formulario.
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
        // Actualiza los valores del formulario de acuerdo a los inputs modificados.
    }

    // Función para manejar la subida de imágenes.
    function handleImageUpload(event) {
        const file = event.target.files[0]; // Obtiene el archivo seleccionado.
        const reader = new FileReader();
        reader.onloadend = () => {
            setImg(reader.result); // Guarda el contenido de la imagen en formato base64.
            setPreviewImg(reader.result); // Establece la imagen de vista previa.
        };
        reader.readAsDataURL(file); // Lee el archivo de imagen como URL base64.
    }

    // Función para agregar o actualizar una casa.
    const handleAdd = () => {
        if (editId) {
            // Si estamos en modo de edición (editId no es nulo).
            updateAdmin(editId, { ...formValues, img }).then(() => {
                setEditId(null); // Limpia el ID de edición para volver al modo de agregar.
                setFormValues({
                    title: '',
                    location: '',
                    price: '',
                    date: '',
                    guests: '',
                    rating: '',
                    reviews: '',
                    imgSrc: ''
                }); // Reinicia los valores del formulario.
                setImg(''); // Limpia la imagen.
                setPreviewImg(null); // Elimina la vista previa de la imagen.
                getAdmin().then(setDatosCasa); // Vuelve a cargar los datos de las casas.
            });
        } else {
            // Si no estamos editando, se agrega una nueva casa.

            console.log(img, formValues.title, formValues.price);
            
            postAdmin(img, formValues.title, formValues.price).then(() => {
                setFormValues({
                    title: '',                                     
                    location: '',
                    price: '',
                    date: '',
                    guests: '',
                    rating: '',
                    reviews: '',
                    imgSrc: ''
                }); // Limpia el formulario después de agregar la casa.
                setImg('');
                setPreviewImg(null);
                getAdmin().then(setDatosCasa); // Vuelve a cargar los datos.
            });
        }
    };

    // Función para habilitar la edición de una casa.
    const handleEdit = (casa) => {
        setEditId(casa.id); // Establece el ID de la casa que se está editando.
        setFormValues({
            title: casa.nombre, // Rellena el formulario con los datos actuales de la casa.
            location: casa.location || '',
            price: casa.precios,
            date: casa.date || '',
            guests: casa.guests || '',
            rating: casa.rating || '',
            reviews: casa.reviews || '',
            imgSrc: casa.img
        });
        setPreviewImg(casa.img); // Muestra la imagen actual de la casa en la vista previa.
    };

  
    

    return (
      <div>
          <div className="container2">

              <h2>{editId ? 'Editar Casa' : 'Agregar Casas'}</h2>
              
              {/* Campos del formulario con sus respectivos labels e inputs */}
              <label className='name' htmlFor="title">Nombre</label>
              <input
                  className='control22'
                  type="text"
                  name="title"
                  placeholder="Ingrese el nombre"
                  value={formValues.title}
                  onChange={handleInputChange}
              />
              <br />
              <label className='location' htmlFor="location">Ubicación</label>
              <input
                  className='control22'
                  type="text"
                  name="location"
                  placeholder="Ingrese la ubicación"
                  value={formValues.location}
                  onChange={handleInputChange}
              />
              <br />
              <label className='precio' htmlFor="price">Precio</label>
              <input
                  className='control22'
                  type="text"
                  name="price"
                  placeholder="Ingrese el precio"
                  value={formValues.price}
                  onChange={handleInputChange}
              />
              <br />
              <label className='date' htmlFor="date">Fecha</label>
              <input
                  className='control22'
                  type="text"
                  name="date"
                  placeholder="Ingrese la fecha"
                  value={formValues.date}
                  onChange={handleInputChange}
              />
              <br />
              <label className='guests' htmlFor="guests">Huéspedes</label>
              <input
                  className='control22'
                  type="text"
                  name="guests"
                  placeholder="Ingrese la cantidad de cuartos y baños"
                  value={formValues.guests}
                  onChange={handleInputChange}
              />
              <br />
              <label className='rating' htmlFor="rating">Calificación</label>
              <input
                  className='control22'
                  type="text"
                  name="rating"
                  placeholder="Ingrese la calificación"
                  value={formValues.rating}
                  onChange={handleInputChange}
              />
              <br />
              <label className='reviews' htmlFor="reviews">Reseñas</label>
              <input
                  className='control22'
                  type="text"
                  name="reviews"
                  placeholder="Ingrese el número de reseñas"
                  value={formValues.reviews}
                  onChange={handleInputChange}
              />
              <br />
              <label className='img' htmlFor="imagen">Imagen</label>
              <input
                  className='control22'
                  type="file"
                  onChange={handleImageUpload}
              />
              <br />
              {/* Vista previa de la imagen seleccionada */}
              {previewImg && (
                  <img src={previewImg} alt="Preview" width="100" />
              )}
              <br />
              {/* Botón para agregar o guardar cambios dependiendo del estado de edición */}
              <button className='boton22' onClick={handleAdd}>{editId ? 'Guardar Cambios' : 'Agregar'}</button>
              <br />
              {/* Lista de casas */}
              <ul className='nav'>
                  {datoscasa.map((casa) => (
                      <li className='lili' key={casa.id}>
                          <div className="card">
                              {/* Mostrar la imagen */}
                              <img 
                                  src={casa.nombre} 
                                  width="100" 
                              />
                              <h3>{casa.img}</h3> {/* Nombre de la casa */}
                              <p>{casa.precio}</p> {/* Ubicación de la casa */}
                     
                              <p>{casa.rating} ★</p> {/* Calificación */}
                              <p>{casa.reviews} Reseñas</p> {/* Reseñas */}
                              {/* Botones para editar y eliminar */}
                              <button className='boton22' onClick={() => handleEdit(casa)}>Editar</button>
                              <button className='boton22' onClick={() => deleteAdmin(casa.id)}>Eliminar</button>
                          </div>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );
  
}

export default FormAdministracion;
