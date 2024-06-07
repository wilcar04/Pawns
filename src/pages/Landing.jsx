import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTv, faTshirt, faHome, faHeartbeat, faFilm, faFutbol, faCar, faPaw, faPalette, faBook, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getProducts } from '../utils/localStorageUtils';
import './Landing.css';

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
            <nav className="navbar">
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Busca productos" 
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button onClick={handleClearFilters}><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <div className="search-bar">
                    <select value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Categorías</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                    <button onClick={handleClearFilters}><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </nav>

            {!searchTerm && !selectedCategory && (
                <>
                    <div className="image-container">
                        <button onClick={handleLeftArrowClick} className="arrow-button left-arrow"><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <div className="image-slider">
                            {sliderImages.map((image, i) => (
                                <div className="image-item" ref={el => imageRefs.current[i] = el} key={i}>
                                    <img src={image} alt={`Slide ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                        <button onClick={handleRightArrowClick} className="arrow-button right-arrow"><FontAwesomeIcon icon={faChevronRight} /></button>
                    </div>
                    <div className="image-nav">
                        {sliderImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handleNavButtonClick(i)}
                                className={`nav-button ${currentImageIndex === i ? 'active' : ''}`}
                            >
                                <div className="nav-button-inner">
                                    {i + 1}
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="categories-section">
                        <h2 className="section-title">¡Explora las categorías más solicitadas con precios más bajos! <Link to="/all-products">
                            <button className="view-all-button">Ver Todo</button>
                        </Link></h2>
                        <div className="category-buttons">
                            {categories.map((category, index) => (
                                <div key={index} className="category-button" onClick={() => handleCategoryChange({ target: { value: category.name } })}>
                                    <FontAwesomeIcon icon={category.icon} size="2x" />
                                    <span className="category-name">{category.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            <div className="products-section">
                <h2 className="section-title">NUESTROS PRODUCTOS</h2>
                <div className="product-row">
                    {displayedProducts.length > 0 ? (
                        displayedProducts.map((product, index) => (
                            <div key={index} className="product-item">
                                <div className="product-image-placeholder" style={{ backgroundImage: `url(${product.img})` }} />
                                <div className="product-details">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-category">{product.category}</p>
                                    <p className="product-price original-price">{product.price}</p>
                                    <Link to={`/product/${index}`} className="buy-button-link">
                                        <button className="buy-button">Comprar</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-products-message">No tenemos el producto que buscas.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
