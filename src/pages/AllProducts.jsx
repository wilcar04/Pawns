import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../utils/localStorageUtils';
import './AllProducts.css';

const categories = ['Electrónica', 'Moda', 'Hogar', 'Salud', 'Entretenimiento', 'Deportes', 'Transporte', 'Mascotas', 'Arte', 'Literatura'];

const AllProducts = () => {
    const products = getProducts();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 40;
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const filteredProducts = products.filter(product => {
        const matchesSearchTerm = searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        return matchesSearchTerm && matchesCategory;
    });

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="all-products">
            <h2>Todos los Productos</h2>
            <div className="filters">
                <input 
                    type="text" 
                    placeholder="Buscar productos..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="category-select"
                >
                    <option value="">Todas las categorías</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <Link to="/add-product">
                <button className="add-product-button">Agregar Producto</button>
            </Link>
            <div className="product-list">
                {currentProducts.length > 0 ? (
                    currentProducts.map((product, index) => (
                        <div key={index} className="product-item">
                            {product.img && <img src={product.img} alt={product.name} className="product-image" />}
                            <div className="product-details">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-category">{product.category}</p>
                                <p className="product-price">{product.price}</p>
                                <Link to={`/edit-product/${index}`}>
                                    <button className="edit-button">Editar</button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-products-message">No tenemos el producto que buscas.</p>
                )}
            </div>
            <div className="pagination">
                {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map(number => (
                    <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        className={`pagination-button ${currentPage === number + 1 ? 'active' : ''}`}
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
