import api from './axiosConfig'


// *    User

// Iniciar sesión
export async function logIn(email, password){
    const params = { 
        email: email,
        password: password
    };
    try{
        const response = await api.post(`/user/login`, null, {
            params: params
        });
        return response.data;
    }
    catch (err) {
        throw new Error('Usuario o contraseña incorrectos');
    }
}

// Actualizar usuario
export async function updateUser(name, email, password){
    const body = {
        idusuario: 0,
        nombre: name,
        correo_electronico: email,
        contrasennia: password,
        tipo: "cliente"
    }
    try{
        const response = await api.put(`/user/`, body);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Registrar usuario
export async function signUp(name, email, password, genre, birthdate, phone){
    const body = {
        idusuario: 0,
        nombre: name,
        correo_electronico: email,
        contrasennia: password,
        tipo: "cliente",
        genero: genre,
        nacimiento: birthdate,
        telefono: phone
    }
    try{
        const response = await api.post(`/user/`, body);
        return response.data;
    }
    catch (err) {   
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Eliminar usuario
export async function deleteUser(email){
    try{
        const response = await api.delete(`/user/${email}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
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
export async function createProduct(name, description, category, image){
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


// *    Offer


// Crear oferta de empeño
export async function createOfferPawn(idUser, name, description, category, price, image){
    const params = { 
        nombre: name,
        descripcion: description,
        categoria: category,
        precio: price,
        id_usuario: idUser
    };
    const formData = new FormData();
    formData.append('image', image);
    try{
        const response = await api.post(`/offer/MakePawnByClient`, formData, {
            params: params
        });
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
    }
}

// Crear oferta de venta
export async function createOfferSell(idUser, name, description, category, price, image){
    const params = { 
        nombre: name,
        descripcion: description,
        categoria: category,
        precio: price,
        id_usuario: idUser
    };
    const formData = new FormData();
    formData.append('image', image);
    try{
        const response = await api.post(`/offer/MakeSellByClient`, formData, {
            params: params
        });
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
    }
}

// Obtener productos que la tienda vende
export async function getProducts(){
    try {
        const response = await api.get(`/offer/SalesByShop`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return []
    }
}

// Obtener ofertas no finalizadas de usuario (empeño o venta)
export async function getOffersNotFinished(idUser){
    try {
        const response = await api.get(`/offer/pending_offers_not_finalized_by_userid/${idUser}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Obtener ofertas de empeño pendientes
export async function getPendingPawnOffers(idUser){
    try {
        const response = await api.get(`/offer/user_pawn_offers_in_pending/${idUser}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Finalizar oferta (producto llegó)
export async function finishOffer(idOffer){
    try {
        const response = await api.put(`/offer/finish_offer/${idOffer}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Poner producto en estado 'en camino' (cliente confirmó la transacción)
export async function confirmOffer(idOffer){
    try {
        const response = await api.put(`/offer/change_offer_state_to_in_shipping/${idOffer}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}


// *    Buy


// TODO No necesito tanto las información de la oferta, necesito el producto
// Obtener las ofertas que un cliente ha comprado
export async function getBoughtItems(idUser){
    try {
        const response = await api.get(`/buy/${idUser}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Comprar (cliente compra)
export async function buyItem(idUser, price, date, idProduct, idBill){
    const params = { 
        idcompra: 0,
        precio: price,
        fecha: date,
        producto_idproducto: idProduct,
        id_factura_compraventa: idBill,
        id_usuario: idUser
    };
    try{
        const response = await api.post(`/buy/`, null, {
            params: params
        });
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
    }
}


// *    Sell


// Obtener las ofertas que un ciente ha vendido
export async function getSoldItems(idUser){
    try {
        const response = await api.get(`/sell/${idUser}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Vender (tienda compra un producto de un usuario)
export async function shopBuys(idUser, price, date, idProduct, idBill){
    const params = { 
        idventa: 0,
        precio: price,
        fecha: date,
        producto_idproducto: idProduct,
        id_factura_compraventa: idBill,
        usuario_idusuario: idUser
    };
    try{
        const response = await api.post(`/sell/`, null, {
            params: params
        });
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
    }
}


// * Pawn

// Obtener los empeños vigentes
export async function getCurrentPawns(){
    try {
        const response = await api.get(`/pawn/currentShop`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Obtener los empeños vigentes de un usuario
export async function getUserCurrentPawns(idUser){
    try {
        const response = await api.get(`/pawn/clientPawns/${idUser}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Crear empeño
export async function createPawn(idUser, idProduct, price){
    const body = {
        idempennio: 0,
        precio: price,
        estado: "vigente",
        fecha_inicio: "", // ! Esto qué
        fecha_final: "",
        interes: 5,
        usuario_idusuario: idUser,
        producto_idproducto: idProduct,
        id_factura_empennio: 0,
        id_factura_pago_cliente_empennio: 0
    };
    try{
        const response = await api.post(`/pawn/addPawn`, body);
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
    }
}

// Cliente paga el empeño
export async function payPawn(idPawn, idBill){
    const params = { 
        id_factura_pago_cliente_empennio: idBill,
    };
    try{
        const response = await api.put(`/pawn/payPawn/${idPawn}`, null, {
            params: params
        });
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
    }
}


// *    Bill

// ! Se va hacer o NO??
