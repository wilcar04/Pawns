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


// *    Product

// Obtener producto por Id
export async function getProductById(idProduct){
    try {
        const response = await api.get(`/product/${idProduct}`); // ! Está en query y path a la vez
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

// Obtener todas las solicitudes de empeño que están en pendiente
export async function getAllPendingPawns(){
    try {
        const response = await api.get(`/offer/getAllPendingPawns`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return []
    }
}

// Obtener ofertas de empeño no finalizadas de un usuario
export async function getPawnOffersNotFinished(idUser){
    try {
        const response = await api.get(`/offer/pending_pawn_offers_not_finalized_by_userid/${idUser}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Obtener ofertas de venta no finalizadas de un usuario
export async function getSellOffersNotFinished(idUser){
    try {
        const response = await api.get(`/offer/pending_sell_offers_not_finalized_by_userid/${idUser}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Obtener empeños en camino
export async function getOnTheWayOfferPawns(){
    try {
        const response = await api.get(`/offer/on_the_way_offer_pawns`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Obtener ventas en camino
export async function getOnTheWayOfferSells(){
    try {
        const response = await api.get(`/offer/on_the_way_offer_sells`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Obtener todas las solicitudes de venta no finalizadas
export async function getNotFinalizedSellOffers(){
    try {
        const response = await api.get(`/offer/sell_offers_not_finalized`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Obtener todas las solicitudes de empeño no finalizadas
export async function getNotFinalizedPawnOffers(){
    try {
        const response = await api.get(`/offer/pawn_offers_not_finalized`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// Cambiar estado de oferta
export async function changeOfferState(idOffer, newState, id_Acceptant=undefined){
    let params;
    if (id_Acceptant === undefined) {
        params = { 
            id: idOffer,
            state: newState
        };
    } else {
        params = { 
            id: idOffer,
            state: newState,
            id_acceptant: id_Acceptant
        };
    }
    try{
        const response = await api.post(`/offer/MakePawnByClient`, null, {
            params: params
        });
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
    }
}


// *    Buy


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

// Tienda compra
export async function clientBuysItem(idUser, price, idProduct, name, lastName, address, department, municipality,
    phone, email, additionalInfo
){
    const date = new Date().toLocaleDateString('en-us', { year:"numeric", day:"numeric", month:"numeric" })

    const params = { 
        seller_client_id : idUser
    };
    const body = {
        buy: {
            idcompra: 0,
            precio: price,
            fecha: date,
            usuario_idusuario: 0,
            producto_idproducto: idProduct,
            id_factura_compraventa: 0
        },
        bill: {
            idFacturaCompra: 0,
            medio_pago: "PSE",
            total: 0,
            nombres: name,
            apellidos: lastName,
            direccion: address,
            departamento: department,
            municipio: municipality,
            telefono: phone,
            correo: email,
            precio_envio: 0,
            precio_IVA: 0,
            info_adicional: additionalInfo
        }
    }
    try{
        const response = await api.post(`/buy/sell`, body, {
            params: params
        });
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
    }
}

// Cliente compra
export async function shopBuysItem(idUser, price, idProduct, name, lastName, address, department, municipality,
    phone, email, additionalInfo
){
    const date = new Date().toLocaleDateString('en-us', { year:"numeric", day:"numeric", month:"numeric" })

    const body = {
        buy: {
            idcompra: 0,
            precio: price,
            fecha: date,
            usuario_idusuario: idUser,
            producto_idproducto: idProduct,
            id_factura_compraventa: 0
        },
        bill: {
            idFacturaCompra: 0,
            medio_pago: "PSE",
            total: 0,
            nombres: name,
            apellidos: lastName,
            direccion: address,
            departamento: department,
            municipio: municipality,
            telefono: phone,
            correo: email,
            precio_envio: 0,
            precio_IVA: 0,
            info_adicional: additionalInfo
        }
    }
    try{
        const response = await api.post(`/buy/client`, body);
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
        const response = await api.get(`/pawn/clientCurrentPawns/${idUser}`);
        return response.data;
    }
    catch (err) {
        console.error('Hubo un problema con la solicitud fetch:', err);
        return {}
    }
}

// TODO: Aquí va una que no sé bien qué hace


// TODO: Verificar que éste funcione
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


// TODO: Verificar
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

// TODO: Preguntar a Juanes si ésto ya se hace automático (creo que sí)
