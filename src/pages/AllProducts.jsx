import React from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../utils/localStorageUtils';

const AllProducts = () => {
    const products = getProducts();

    return (
        <div className="all-products">
            <h2>Todos los Productos</h2>
            <Link to="/add-product">
                <button className="add-product-button">Agregar Producto</button>
            </Link>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        {product.img && <img src={product.img} alt={product.name} className="product-image" />}
                        <div className="product-details">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-brand">{product.brand}</p>
                            <p className="product-price">{product.price}</p>
                            <Link to={`/edit-product/${index}`}>
                                <button className="edit-button">Editar</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
