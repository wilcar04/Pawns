import api from './axiosConfig'


// *    User

// Iniciar sesión
export async function logIn(email, password){
    try{
        const response = await api.get(`/user/${email}/${password}`);
        return response.data;
    }
    catch (err) {
        throw new Error('Usuario o contraseña incorrectos');
    }
}

// Actualizar usuario
export async function updateUser(name, email, password){
    const body = {
        idUsuario: 0,
        nombre: name,
        correo_electronico: email,
        contrasennia: password,
        tipo: "cliente" // ! Preguntar a Juanes cómo le mando esto
    }
    try{
        const response = await api.put(`/user/`, body);
        return response.data;
    }
    catch (err) {
        throw new Error('Usuario o contraseña incorrectos');
    }
}

// Registrar usuario
export async function signUp(name, email, password){
    const body = {
        idUsuario: 0,
        nombre: name,
        correo_electronico: email,
        contrasennia: password,
        tipo: "cliente"
    }
    try{
        const response = await api.post(`/user/`, body);
        return response.data;
    }
    catch (err) {   
        throw new Error('Usuario o contraseña incorrectos');
    }
}

// Eliminar usuario
export async function deleteUser(email){
    try{
        const response = await api.delete(`/user/${email}`);
        return response.data;
    }
    catch (err) {
        throw new Error('Usuario o contraseña incorrectos');
    }
}


// *    Product

export async function getProductById(idProduct){
    try {
        const response = await api.get(`/product/${idProduct}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Actualizar producto
export async function updateProduct(idProduct, name, description, category, image){
    let request = {};
    if (!!name && !!image){
        request = await Promise.all([
            updateProductInfo(idProduct, name, description, category),
            updateProductImage(idProduct, image)
        ]);
    } else if (name) {
        request = await updateProductInfo(idProduct, name, description, category);
    } else if (image) {
        request = await updateProductImage(idProduct, image);
    } else {
        throw new Error("Parámetros indefinidos en el llamado a la API");
    }
    return request;
}

// Actualizar info de producto
export async function updateProductInfo(idProduct, name, description, category){
    const params = { 
        id: idProduct,
        nombre: name,
        descripcion: description,
        categoria: category
    };
    try{
        const response = await api.put(`/product/`, null, {
            params: params
        });
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
    }
}

// Actualizar foto de producto
export async function updateProductImage(idProduct, image){
    const params = { 
        id: idProduct
    };
    const formData = new FormData();
    formData.append('image', image);
    try{
        const response = await api.put(`/product/`, formData, {
            params: params
        });
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
    }
}



// TODO: Preguntar a Juanes por qué está en path y en params el id ¿es un error?

// Eliminar producto
export async function deleteProduct(idProduct){
    try {
        const response = await api.delete(`/product/${idProduct}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Crear producto
export async function updateProductImage(name, description, category, image){
    const params = { 
        nombre: name,
        descripcion: description,
        categoria: category
    };
    const formData = new FormData();
    formData.append('image', image);
    try{
        const response = await api.put(`/product/`, formData, {
            params: params
        });
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
    }
}
