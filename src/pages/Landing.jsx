import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faTshirt, faHome, faHeartbeat, faFilm, faFutbol, faCar, faPaw, faPalette, faBook, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useOutletContext } from 'react-router-dom';
import './Landing.css';
import { Carousel } from "flowbite-react";
import imagenCarrusel1 from "../assets/landing(assets)/sliderImage.png"
import imagenCarrusel2 from "../assets/landing(assets)/Publicidad 1.png"
import imagenCarrusel3 from "../assets/landing(assets)/Publicidad 2.png"
import { imageUrlApi } from '../api/axiosConfig';


const categories = [
    { icon: faTv, name: 'Electrónica' },
    { icon: faTshirt, name: 'Moda' },
    { icon: faHome, name: 'Hogar' },
    { icon: faHeartbeat, name: 'Salud' },
    { icon: faFilm, name: 'Entretenimiento' },
    { icon: faFutbol, name: 'Deportes' },
    { icon: faCar, name: 'Transporte' },
    { icon: faPaw, name: 'Mascotas' },
    { icon: faPalette, name: 'Arte' },
    { icon: faBook, name: 'Literatura' }
];

export default function Landing() {
    const imageRefs = useRef([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const [scrollTimeout, setScrollTimeout] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const contextProducts = useOutletContext();
    const products = contextProducts.slice(0, 5)

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        filterProducts(searchTerm, category);
    };

    const filterProducts = (searchTerm, category) => {
        const filteredProducts = products.filter(product => {
            const matchesSearchTerm = searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
            const matchesCategory = category ? product.category === category : true;
            return matchesSearchTerm && matchesCategory;
        });
        setDisplayedProducts(filteredProducts);
    };

    return (
        <div className="landing-page">

            <div className="py-8 px-28 h-96">
                <Carousel pauseOnHover slideInterval={6500} >
                    <img src={imagenCarrusel2} alt="..." />
                    <img src={imagenCarrusel3} alt="..." />
                    <img src={imagenCarrusel1} alt="..." />
                    
                </Carousel>
            </div>

            {!searchTerm && !selectedCategory && (
                <>
                    <h3 className='font-bold uppercase text-lg mt-5'>Nuestros productos</h3>
                    <div className=" h-48 flex justify-center items-center gap-x-8 mb-5">
                        {categories.map((category, index) => (
                            <Link to={`/all-products?category=${category.name}`}>
                                <div key={index} className=" w-24 flex flex-col items-center gap-y-3" onClick={() => handleCategoryChange({ target: { value: category.name } })}>
                                    <div className='rounded-full bg-firstColor text-white size-20 flex items-center justify-center'>
                                        <FontAwesomeIcon icon={category.icon} size="2x" />
                                
                                    </div>
                                    <span className="category-name">{category.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )}

            {/* <div className='w-full bg-firstColor h-8 flex items-center justify-center'>
                <h2 className="text-white text-sm">¡Explora las categorías más solicitadas con precios más bajos! 
                    <Link to="/all-products">
                        <button className="text-firstColor opacity-90 font-extrabold ml-4 py-1 px-2 rounded h-full bg-white">Ver Todo</button>
                    </Link>
                </h2>
            </div> */}
            <div className="products-section">
                <div className="product-row ">
                    {products?.map((product, index) => (
                        <Link to={`/product/${product.producto_idproducto}`} key={index}>
                            <div key={index} className="product-item">
                                {product.img && <img src={`${imageUrlApi}/${product.imagen}`} alt={product.name} className="product-image" />}
                                <div className="pb-4">
                                    <p className="text-gray-400 text-sm mb-1 capitalize">{product.categoria}</p>
                                    <h3 className="font-bold text-black text-xl">{product.nombre}</h3>
                                    <p className="text-firstColor mt-2">${product.precio}</p>

                                </div>
                            </div>
                        </Link>
                        ))
                    }
                </div>
            </div>
            <div className="my-4 h-20">
                <Link className='rounded-full border-firstColor border-2 p-3 hover:bg-firstColor hover:text-white'>
                    Ver todos los productos
                </Link>
            </div>
        </div>
    );
}
