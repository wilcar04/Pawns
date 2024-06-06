import React, { useState } from 'react';
import { getProducts, updateProduct } from '../utils/localStorageUtils';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const { index } = useParams();
    const navigate = useNavigate();
    const products = getProducts();
    const product = products[index];

    const [name, setName] = useState(product.name);
    const [brand, setBrand] = useState(product.brand);
    const [price, setPrice] = useState(product.price);
    const [img, setImg] = useState(product.img);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { name, brand, price, img };
        updateProduct(index, updatedProduct);
        navigate('/all-products');
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImg(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="edit-product">
            <h2>Editar Producto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Marca:</label>
                    <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Imagen:</label>
                    <input type="file" onChange={handleImageUpload} />
                </div>
                {img && <img src={img} alt="Vista previa de la imagen" style={{ width: '100px', height: '100px' }} />}
                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditProduct;
