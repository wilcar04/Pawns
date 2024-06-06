import React, { useState } from 'react';
import { addProduct } from '../utils/localStorageUtils';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { name, brand, price, img };
        addProduct(newProduct);
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
        <div className="add-product">
            <h2>Agregar Producto</h2>
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
                    <input type="file" onChange={handleImageUpload} required />
                </div>
                {img && <img src={img} alt="Vista previa de la imagen" style={{ width: '100px', height: '100px' }} />}
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default AddProduct;
