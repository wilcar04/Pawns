// src/pages/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../utils/localStorageUtils';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = getProducts();
    const product = products.find((_, index) => index === parseInt(id, 10));
    setProduct(product);
  }, [id]);

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.img} alt={product.name} />
      <p>Marca: {product.brand}</p>
      <p>Precio: {product.price}</p>
    </div>
  );
}

export default ProductDetails;
