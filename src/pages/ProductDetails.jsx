import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../utils/localStorageUtils';
import './ProductDetails.css';

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
    <div className="product-details-container">
      <div className="product-details">
        <h2 className="product-title">{product.name}</h2>
        <img className="product-image" src={product.img} alt={product.name} />
        <div className="product-info">
          <p><strong>Marca:</strong> {product.brand}</p>
          <p><strong>Precio:</strong> {product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
