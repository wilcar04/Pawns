import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams, useSearchParams } from 'react-router-dom';
import { getProducts } from '../utils/localStorageUtils';
import './ProductDetails.css';
import NoInfo from '../components/NoInfo';
import { imageUrlApi } from '../api/axiosConfig';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(0);

  const products = useOutletContext();

  useEffect(() => {
    setProduct(products.find(product => id == product.producto_idproducto));
  }, [id]);

  return (
    <div className="flex flex-col items-center py-8">
      <h2 className=' font-medium text-2xl text-gray-500'>Detalles de producto</h2>
      <div className="flex gap-x-16 w-full pl-60 pr-48 my-10">
        <div className="w-2/5">
          <img className=" w-full h-auto" src={`${imageUrlApi}/${product.imagen}`} alt={product.nombre} />
        </div>
        <div className="flex flex-col pl-5 pr-20 pt-5 text-left flex-1">
          <div className="border-b border-b-gray-200 pb-2 mb-2">
            <h2 className=" font-semibold text-2xl">{product.nombre}</h2>
            <p className='mt-1 text-base font-light text-gray-500'>Categoría: {product.categoria}</p>
          </div>

          <p className='mt-8 pb-8 font-medium text-3xl border-b border-b-gray-200'>$ {product.precio}</p>

          <Link to="/Checkout" state={{data: product, type:"buy"}} className='mt-7 rounded-full bg-firstColor text-white hover:opacity-80 py-1 px-6 self-center'>
            Comprar
          </Link>

          <div className='mt-8 border border-gray-200 p-3 rounded'>
            <h4 className='pb-2 font-semibold text-lg w-full border-b border-b-gray-200'>Descripción</h4>
            <p className='mt-4 text-gray-700'>{product.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
