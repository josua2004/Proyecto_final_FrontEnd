async function updateAdmin(nombre, precios, img, id, previewImg,datoscasa,editId) {
    try {
     
        const userData = { 
            nombre,
            precios,
            img,
            previewImg,
            datoscasa,
            editId
        
        };
        const response = await fetch("http://localhost:3001/casas/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export { updateAdmin } 