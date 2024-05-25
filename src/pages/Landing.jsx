// src/components/Landing.js
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTv, faBook, faFutbol, faGamepad, faClock, faChess, faGem, faCouch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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

export default function Landing({ products }) {
    const imageRefs = useRef([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const [scrollTimeout, setScrollTimeout] = useState(null);

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

    if (!products) return <p>No se han encontrado productos.</p>;

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
                    {products.map((_, i) => (
                        <img
                            src={`src/assets/landing(assets)/imagen${i + 1}.jpg`}
                            alt={`Imagen ${i + 1}`}
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
                <h2 className="section-title">¡Explora las categorías más solicitadas con precios más bajos! <a href="#">Ver todo</a></h2>
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
                <h2 className="section-title">OFERTAS TOP</h2>
                <div className="product-row">
                    {products.map((product, index) => (
                        <div key={index} className="product-item">
                            <div className="product-image-placeholder" />
                            <div className="product-details">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-brand">{product.brand}</p>
                                <p className="product-price original-price">{product.price}</p>
                                <p className="product-price discount-price">{product.discount}</p>
                                <Link to={`/product/${index}`} className="buy-button-link">
                                    <button className="buy-button">Comprar</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .landing-page {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    padding: 10px 20px;
                    background-color: #fff;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .search-bar {
                    display: flex;
                    align-items: center;
                }

                .search-bar input {
                    border: 1px solid #ccc;
                    padding: 10px;
                    font-size: 16px;
                    width: 80%;
                    border-radius: 5px 0 0 5px;
                    outline: none;
                }

                .search-bar button {
                    border: 1px solid #ccc;
                    padding: 10px;
                    background-color: #1A0557;
                    color: white;
                    border-radius: 0 5px 5px 0;
                    cursor: pointer;
                }

                .image-container {
                    position: relative;
                    width: 80%;
                    max-width: 800px;
                    overflow: hidden;
                }

                .image-slider {
                    display: flex;
                    transition: transform 0.5s ease-in-out;
                }

                .image-item {
                    min-width: 100%;
                    height: auto;
                    border-radius: 10px;
                }

                .arrow-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background-color: rgba(0, 0, 0, 0.5);
                    border: none;
                    color: white;
                    padding: 10px;
                    cursor: pointer;
                    border-radius: 50%;
                }

                .left-arrow {
                    left: 10px;
                }

                .right-arrow {
                    right: 10px;
                }

                .image-nav {
                    display: flex;
                    justify-content: center;
                    margin-top: 10px;
                }

                .nav-button {
                    width: 30px;
                    height: 30px;
                    border: 1px solid #ccc;
                    border-radius: 50%;
                    margin: 0 5px;
                    background-color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }

                .nav-button-inner {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }

                .nav-button.active {
                    background-color: #1A0557;
                    color: white;
                }

                .categories-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 20px 0;
                    width: 100%;
                }

                .section-title {
                    font-size: 24px;
                    margin-bottom: 10px;
                }

                .category-buttons {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    width: 100%;
                }

                .category-button {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 10px;
                    cursor: pointer;
                    transition: transform 0.3s;
                }

                .category-button:hover {
                    transform: scale(1.1);
                }

                .category-name {
                    margin-top: 5px;
                    font-size: 14px;
                    font-weight: bold;
                    text-align: center;
                }

                .products-section {
                    width: 100%;
                    max-width: 1200px;
                    margin: 20px 0;
                }

                .section-title {
                    text-align: center;
                    font-size: 24px;
                    margin-bottom: 20px;
                }

                .product-row {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }

                .product-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 10px;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 10px;
                    background-color: #fff;
                    width: 23%;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                .product-image-placeholder {
                    width: 100%;
                    padding-top: 100%;
                    background-color: #eee;
                    border-radius: 10px;
                }

                .product-details {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    margin-top: 10px;
                }

                .product-name {
                    font-size: 18px;
                    font-weight: bold;
                    margin: 10px 0;
                }

                .product-brand {
                    font-size: 14px;
                    color: #888;
                }

                .product-price {
                    font-size: 16px;
                    margin: 5px 0;
                }

                .original-price {
                    text-decoration: line-through;
                    color: #888;
                }

                .discount-price {
                    font-size: 20px;
                    color: #1A0557;
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

                .buy-button-link {
                    text-decoration: none;
                }

                .category-button {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: #D8E8FF; /* Fondo azul claro */
                    padding: 10px;
                    border-radius: 50%;
                    width: 80px;
                    height: 80px;
                    justify-content: center;
                }

                .category-name {
                    margin-top: 5px;
                    font-size: 14px;
                    text-align: center;
                }
            `}</style>
        </div>
    );
}
