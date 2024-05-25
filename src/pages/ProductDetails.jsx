// src/components/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products[parseInt(id)];

    if (!product) return <p>Producto no encontrado</p>;

    return (
        <div className="product-details">
            <img src={product.img} alt={product.name} className="product-image" />
            <h2 className="product-title">{product.name}</h2>
            <p className="product-brand">{product.brand}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-discount">{product.discount}</p>
            <button className="buy-button">Comprar</button>

            <style jsx>{`
                .product-details {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    background-color: #fff;
                    max-width: 800px;
                    margin: 20px auto;
                }

                .product-image {
                    width: 100%;
                    max-width: 400px;
                    height: auto;
                    border-radius: 10px;
                }

                .product-title {
                    font-size: 24px;
                    font-weight: bold;
                    margin: 20px 0;
                }

                .product-brand, .product-price, .product-discount {
                    font-size: 18px;
                    margin: 10px 0;
                }

                .buy-button {
                    background-color: #1A0557;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .buy-button:hover {
                    background-color: #4A1A9C;
                }
            `}</style>
        </div>
    );
};

export default ProductDetails;
