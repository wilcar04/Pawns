import React, { useState } from 'react';
import { addProduct } from '../utils/localStorageUtils';
import { useNavigate } from 'react-router-dom';
import './AddEditProduct.css';

const categories = [
    'Electrónica', 'Moda', 'Hogar', 'Salud', 'Entretenimiento', 'Deportes', 'Transporte', 'Mascotas', 'Arte', 'Literatura'
];

const AddProduct = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState(null);
    const [category, setCategory] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { name, description, price, img, category };
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
        <div className="add-edit-product">
            <h2>Agregar Producto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Categoría:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value="">Seleccionar categoría</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Imagen:</label>
                    <input type="file" onChange={handleImageUpload} required />
                </div>
                {img && <img src={img} alt="Vista previa de la imagen" className="image-preview" />}
                <button type="submit" className="submit-button">Agregar</button>
            </form>
        </div>
    );
};

export default AddProduct;
