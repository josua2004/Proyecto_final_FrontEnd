async function postAdmin(nombre, precio, img,previewImg,datoscasa,editId) {
    try {
     
        const userData = { 
            nombre,
            precio,
            img,
            previewImg,
            datoscasa,
            editId
        
        };

        const response = await fetch("http://localhost:3001/casas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export { postAdmin };