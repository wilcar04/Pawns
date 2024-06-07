import React, { useState } from 'react';
import { getProducts, updateProduct } from '../utils/localStorageUtils';
import { useNavigate, useParams } from 'react-router-dom';
import './AddEditProduct.css';

const categories = [
    'Electrónica', 'Moda', 'Hogar', 'Salud', 'Entretenimiento', 'Deportes', 'Transporte', 'Mascotas', 'Arte', 'Literatura'
];

const EditProduct = () => {
    const { index } = useParams();
    const navigate = useNavigate();
    const products = getProducts();
    const product = products[index];

    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [img, setImg] = useState(product.img);
    const [category, setCategory] = useState(product.category);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { name, description, price, img, category };
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
        <div className="add-edit-product">
            <h2>Editar Producto</h2>
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
                    <input type="file" onChange={handleImageUpload} />
                </div>
                {img && <img src={img} alt="Vista previa de la imagen" className="image-preview" />}
                <button type="submit" className="submit-button">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditProduct;
