// src/components/Landing.js
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTv, faBook, faFutbol, faGamepad, faClock, faChess, faGem, faCouch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getProducts } from '../utils/localStorageUtils';
import './Landing.css';

const categories = [
    { icon: faTv, name: 'Electrónicos' },
    { icon: faBook, name: 'Libros' },
    { icon: faFutbol, name: 'Artículos deportivos' },
    { icon: faGamepad, name: 'Gaming' },
    { icon: faClock, name: 'Relojes' },
    { icon: faChess, name: 'Juguetes' },
    { icon: faGem, name: 'Joyería' },
    { icon: faCouch, name: 'Muebles' },
    { icon: faEllipsisH, name: 'Otras Categorías' }
];

export default function Landing() {
    const imageRefs = useRef([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const [scrollTimeout, setScrollTimeout] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = getProducts();
        setProducts(storedProducts);
    }, []);

    useEffect(() => {
        if (isUserInteracting) return;

        const interval = setInterval(() => {
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50)) {
                setIsUserInteracting(true);
                return;
            }

            setCurrentImageIndex(prevIndex => {
                const newIndex = (prevIndex + 1) % imageRefs.current.length;
                imageRefs.current[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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
        setCurrentImageIndex((currentImageIndex - 1 + imageRefs.current.length) % imageRefs.current.length);
        imageRefs.current[(currentImageIndex - 1 + imageRefs.current.length) % imageRefs.current.length].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    const handleRightArrowClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % imageRefs.current.length);
        imageRefs.current[(currentImageIndex + 1) % imageRefs.current.length].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    const handleNavButtonClick = (index) => {
        setCurrentImageIndex(index);
        imageRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    if (!products.length) return <p>No se han encontrado productos.</p>;

    return (
        <div className="landing-page">
            <nav className="navbar">
                <div className="search-bar">
                    <input type="text" placeholder="Categorías" />
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Busca productos" />
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </nav>
            <div className="image-container">
                <button onClick={handleLeftArrowClick} className="arrow-button left-arrow">&lt;</button>
                <div className="image-slider">
                    {products.map((product, i) => (
                        <img
                            src={product.img || `src/assets/landing(assets)/imagen${i + 1}.jpg`}
                            alt={product.name}
                            key={i}
                            ref={el => imageRefs.current[i] = el}
                            className="image-item"
                        />
                    ))}
                </div>
                <button onClick={handleRightArrowClick} className="arrow-button right-arrow">&gt;</button>
            </div>
            <div className="image-nav">
                {products.map((_, i) => (
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
                        <div key={index} className="category-button">
                            <FontAwesomeIcon icon={category.icon} size="2x" />
                            <span className="category-name">{category.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="products-section">
                <h2 className="section-title">NUESTROS PRODUCTOS</h2>
                <div className="product-row">
                    {products.map((product, index) => (
                        <div key={index} className="product-item">
                            <div className="product-image-placeholder" style={{ backgroundImage: `url(${product.img})` }} />
                            <div className="product-details">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-brand">{product.brand}</p>
                                <p className="product-price original-price">{product.price}</p>
                                <Link to={`/product/${index}`} className="buy-button-link">
                                    <button className="buy-button">Comprar</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
