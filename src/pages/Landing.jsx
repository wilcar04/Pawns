import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTv, faTshirt, faHome, faHeartbeat, faFilm, faFutbol, faCar, faPaw, faPalette, faBook, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getProducts } from '../utils/localStorageUtils';
import './Landing.css';
import SliderLanding from '../components/SliderLanding';
import { Carousel } from "flowbite-react";


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

const sliderImages = [
    'src/assets/landing(assets)/imagen1.jpg',
    'src/assets/landing(assets)/imagen2.jpg',
    'src/assets/landing(assets)/imagen3.jpg'
];

export default function Landing() {
    const imageRefs = useRef([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const [scrollTimeout, setScrollTimeout] = useState(null);
    const [products, setProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const storedProducts = getProducts();
        setProducts(storedProducts);
        setDisplayedProducts(storedProducts);
    }, []);

    useEffect(() => {
        if (isUserInteracting || displayedProducts.length === 0) return;

        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => {
                const newIndex = (prevIndex + 1) % sliderImages.length;
                if (imageRefs.current[newIndex]) {
                    imageRefs.current[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
                return newIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [isUserInteracting]);

    const handleUserScroll = () => {
        setIsUserInteracting(true);
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        setScrollTimeout(setTimeout(() => setIsUserInteracting(false), 5000));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleUserScroll);
        return () => window.removeEventListener('scroll', handleUserScroll);
    }, []);

    const handleLeftArrowClick = () => {
        const newIndex = (currentImageIndex - 1 + sliderImages.length) % sliderImages.length;
        setCurrentImageIndex(newIndex);
        if (imageRefs.current[newIndex]) {
            imageRefs.current[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    const handleRightArrowClick = () => {
        const newIndex = (currentImageIndex + 1) % sliderImages.length;
        setCurrentImageIndex(newIndex);
        if (imageRefs.current[newIndex]) {
            imageRefs.current[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    const handleNavButtonClick = (index) => {
        setCurrentImageIndex(index);
        if (imageRefs.current[index]) {
            imageRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        filterProducts(e.target.value, selectedCategory);
    };

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

    const handleClearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('');
        setDisplayedProducts(products);
    };

    if (!products.length) return <p>No se han encontrado productos.</p>;

    return (
        <div className="landing-page">

            <div className="py-8 px-28 h-96">
                <Carousel pauseOnHover>
                    <img src="https://img.freepik.com/foto-gratis/gente-tiro-completo-caminando-tienda-antiguedades_23-2149640710.jpg?t=st=1717804519~exp=1717808119~hmac=06bc75f895e63116e367b4fdeb0b9960944ee7f1a716329ee969691ecf5d0f99&w=1060" alt="..." />
                    <img src="https://recordhead.biz/wp-content/uploads/2021/04/100_0222-800x445-1.jpg" alt="..." />
                    
                </Carousel>
            </div>

            {!searchTerm && !selectedCategory && (
                <>
                    <h3 className='font-bold uppercase text-lg mt-5'>Nuestros productos</h3>
                    <div className=" h-48 flex justify-center items-center gap-x-8 mb-5">
                        {categories.map((category, index) => (
                            <div key={index} className=" w-24 flex flex-col items-center gap-y-3" onClick={() => handleCategoryChange({ target: { value: category.name } })}>
                                <div className='rounded-full bg-firstColor text-white size-20 flex items-center justify-center'>
                                    <FontAwesomeIcon icon={category.icon} size="2x" />
                                
                                </div>
                                <span className="category-name">{category.name}</span>
                            </div>
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
                <div className="product-row">
                    {displayedProducts.length > 0 ? (
                        displayedProducts.map((product, index) => (
                            <Link to={`/edit-product/${index}`}>
                                <div key={index} className="product-item">
                                    {product.img && <img src={product.img} alt={product.name} className="product-image" />}
                                    <div className="pb-4">
                                        <p className="text-gray-400 text-sm mb-1">{product.category}</p>
                                        <h3 className="font-bold text-black text-xl">{product.name}</h3>
                                        <p className="text-firstColor mt-2">${product.price}</p>

                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="no-products-message">No tenemos el producto que buscas.</p>
                    )}
                </div>
            </div>
            <div className="my-4 h-20">
                <Link className='rounded-full border-firstColor border-4 p-3 hover:bg-firstColor hover:text-white'>
                    Ver todos los productos.
                </Link>
            </div>
        </div>
    );
}
