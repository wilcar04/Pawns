import React, { useState } from 'react';
import { Link, useOutletContext, useSearchParams } from 'react-router-dom';
import { getProducts } from '../utils/localStorageUtils';
import './AllProducts.css';
import { IoIosSearch } from "react-icons/io";
import { Radio, Label } from 'flowbite-react';

const categories = ['Electrónica', 'Moda', 'Hogar', 'Salud', 'Entretenimiento', 'Deportes', 'Transporte', 'Mascotas', 'Arte', 'Literatura'];

const AllProducts = () => {
    const [ searchParams, setSearchParams ] = useSearchParams();

    const categoryFilter = searchParams.get("category")

    const products = useOutletContext();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product => {
        const matchesSearchTerm = searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
        return matchesSearchTerm && matchesCategory;
    });

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="flex gap-x-10 py-14 pl-20 pr-36">
            <div className="pl-8 pr-12 py-6 w-1/6 border border-gray-300 bg-gray-50 rounded self-start">
                <h3 className='font-semibold mb-6 text-left text-black'>Categorías</h3>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => setSearchParams({category: category})}
                        className={
                            `block border text-gray-500 rounded-full px-4 py-0.5 mb-2
                            ${categoryFilter === category ? "bg-firstColor text-white" : ""}`
                        }
                    >{category}</button>
                    // <option key={index} value={category}>{category}</option>
                ))}
            </div>
            <div className="flex-1">
                <div className="mx-52 mb-8">
                    <div className="relative flex items-center">
                        <IoIosSearch className='absolute left-4 size-4 text-gray-500' />
                        <input
                            className="w-full pl-10 rounded-full border-gray-300 bg-gray-50"
                            type="text"
                            placeholder="Buscar productos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                {/* <Link to="/add-product">
                    <button className="add-product-button">Agregar Producto</button>
                </Link> */}
                {currentProducts.length > 0 ? (
                <div className="grid grid-cols-4 gap-10">
                        {currentProducts.map((product, index) => (
                            <Link to={`/product/${product.producto_idproducto}`}>
                                <div key={index} className="product-item">
                                    {product.imagen && <img src={product.imagen} alt={product.nombre} className="product-image" />}
                                    <div className="pb-4">
                                        <p className="text-gray-400 text-sm mb-1 capitalize">{product.categoria}</p>
                                        <h3 className="font-bold text-black text-xl">{product.nombre}</h3>
                                        <p className="text-firstColor mt-2">${product.precio}</p>

                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
                    ) : (
                        <p className="no-products-message mt-20">No tenemos el producto que buscas.</p>
                )}
                        <div className="pagination gap-x-2">
                    {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map(number => (
                        <button
                            key={number + 1}
                            onClick={() => paginate(number + 1)}
                            className={`border border-firstColor rounded-md p-2 ${currentPage === number + 1 ? 'bg-firstColor text-white' : ''}`}
                        >
                            {number + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
