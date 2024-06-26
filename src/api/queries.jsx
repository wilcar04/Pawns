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

// Obtener todas las solicitudes de empeño que están en pendiente
export async function getAllPendingSells(){
    try {
        const response = await api.get(`/offer/getAllClientPendingSales`);
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

// Tienda contra oferta
export async function shopProposePrice(idOffer, price){
    const params = { 
        id: idOffer,
        precio: price
    };
    try{
        const response = await api.put(`/offer/shop_counteroffer`, null, {
            params: params
        });
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
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
        const response = await api.put(`/offer/update_offer_state`, null, {
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
export async function shopBuysItem(idUser, price, idProduct){
    try{
        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        };
        const date = formatDate(new Date());
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
            nombres: "Propietario",
            apellidos: "Pawns",
            direccion: "Cra. 80 # 77 - 35",
            departamento: "Antioquia",
            municipio: "Medellin",
            telefono: "3053382615",
            correo: "pawns@gmail.com",
            precio_envio: 0,
            precio_IVA: 0,
            info_adicional: "La tienda ha comprado un nuevo artilugio"
        }
    }
        const response = await api.post(`/buy/shop`, body, {
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
export async function clientBuysItem(idUser, price, idProduct){
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const date = formatDate(new Date());

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
            nombres: "Yuliana",
            apellidos: "Mejia",
            direccion: "Cra 88 no. 44 - 03",
            departamento: "Antioquia",
            municipio: "Medellin",
            telefono: "3216547659",
            correo: "yuliana@gmail.com",
            precio_envio: 0,
            precio_IVA: 0,
            info_adicional: "Cerca a la universidad de Antioquia"
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


// Crear empeño
export async function createPawn(idUser, idProduct, price){
    try{

    // Calculate final date (2 months from today)
    const finalDate = new Date();
    finalDate.setMonth(finalDate.getMonth() + 2);

    // Function to format date as Y-m-d
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const date = formatDate(new Date());
    // Formatted final date
    const finalDateStr = formatDate(finalDate);
    const body = {
        idempennio: 0,
        precio: price,
        estado: "finalizado",
        fecha_inicio: date,
        fecha_final: finalDateStr,
        interes: 0,
        usuario_idusuario: idUser,
        producto_idproducto: idProduct,
        id_factura_empennio: 0,
        id_factura_pago_cliente_empennio: 0
    };
        const response = await api.post(`/pawn/addPawn`, body);
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        throw new Error(error)
        return [];
    }
}

// Cliente paga el empeño
export async function payPawn(idPawn){
    const body = {
        idFacturaEmpennio: 0,
        medio_pago: "PSE",
        total: 0,
        nombres: "Emilio",
        apellidos: "Alvarez",
        direccion: "Cll 10 no.24 sur - 87",
        departamento: "Antioquia",
        municipio: "Medellin",
        telefono: "3124854738",
        correo: "emilio@gmail.com",
        precio_envio: 0,
        precio_IVA: 0,
        info_adicional: "Cerca a Avenida Central"
    }
    try{
        const response = await api.put(`/pawn/payPawn/${idPawn}`, body);
        return response.data;
    }
    catch (error) {
        console.error('Hubo un problema con la solicitud fetch:', error);
        return [];
    }
}


// *    Bill

// TODO: Preguntar a Juanes si ésto ya se hace automático (creo que sí)
