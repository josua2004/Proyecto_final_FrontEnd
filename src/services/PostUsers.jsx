async function PostUser(username, password) {
  try {
    const userData = {
      username,
      password,
    };

    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Usuario o contraseña incorrectos');
    }

    const data = await response.json();
    console.log('Login exitoso:', data);

    return data;
  } catch (error) {
    console.error('Error en el login:', error);
    throw error;
  }
}

/*async function PostProducts(nombre,descripcion,precio) {

 const valToken="Bearer "+token;
  
  const productoData = {
      nombre,
      descripcion,
      precio
    };

  try {
    const response = await fetch('http://127.0.0.1:8000/api/productos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': valToken,
      },
      body: JSON.stringify(productoData), 
    });

    if (!response.ok) {
      throw new Error('Error al guardar el producto. Token inválido o expirado.');
    }

    const nuevoProducto = await response.json();
    console.log('Producto guardado:', nuevoProducto);
    return nuevoProducto; 
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error; 
  }
}*/

export default PostUser