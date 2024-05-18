import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faBook, faFutbol, faGamepad, faClock, faChess, faGem, faCouch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function Landing() {
    const imageRefs = useRef([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const categories = [
        { icon: faTv, name: 'Electrónicos' },
        { icon: faBook, name: 'Libros' },
        { icon: faFutbol, name: 'Articulos deportivos' },
        { icon: faGamepad, name: 'Gaming' },
        { icon: faClock, name: 'Relojes' },
        { icon: faChess, name: 'Juguetes' },
        { icon: faGem, name: 'Joyería' },
        { icon: faCouch, name: 'Muebles' },
        { icon: faEllipsisH, name: 'Otras Categorías' }
    ];

    useEffect(() => {
        imageRefs.current[currentImageIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => {
                const newIndex = (prevIndex + 1) % imageRefs.current.length;
                imageRefs.current[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                return newIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <div className="landing-page">
            <nav className="navbar">
                <div className="search-bar">
                    <input type="text" placeholder="Buscar..." />
                    <button>Buscar</button>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar..." />
                    <button>Buscar</button>
                </div>
            </nav>
            <div className="image-container">
                <button onClick={() => {
                    const newIndex = (currentImageIndex - 1 + imageRefs.current.length) % imageRefs.current.length;
                    setCurrentImageIndex(newIndex);
                    imageRefs.current[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }} className="arrow-button left-arrow">&lt;</button>
                <div className="image-slider">
                    {[...Array(4)].map((_, i) => (
                        <img src={`src\\assets\\landing(assets)\\imagen${i + 1}.jpg`} alt={`Imagen ${i + 1}`} key={i} ref={el => imageRefs.current[i] = el} className="image-item" />
                    ))}
                </div>
                <button onClick={() => {
                    const newIndex = (currentImageIndex + 1) % imageRefs.current.length;
                    setCurrentImageIndex(newIndex);
                    imageRefs.current[newIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }} className="arrow-button right-arrow">&gt;</button>
            </div>
            <div className="image-nav">
                {[...Array(4)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setCurrentImageIndex(i);
                            imageRefs.current[i].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }}
                        className={`nav-button ${currentImageIndex === i ? 'active' : ''}`}
                    >
                        <div className="nav-button-inner">
                            {i + 1}
                        </div>
                    </button>
                ))}
            </div>

            <div className="category-buttons">
                {categories.map((category, index) => (
                    <div key={index} className="category-button">
                        <FontAwesomeIcon icon={category.icon} size="2x" />
                        <span className="category-name">{category.name}</span>
                    </div>
                ))}
            </div>
            <div className="products-scroll-container">
                <div className="product-container">
                    <div className="product-row">
                        <div className="product-item">
                            <img src="src\assets\landing(assets)\pantalones_Levis.jpg" alt="pantalones_Levis" className="product-image" style={{ display: 'block', margin: '0 auto' }} />
                            <div className="product-details">
                                <h3 className="product-name">Pantalones Levis</h3>
                                <p className="product-brand">Levi's</p>
                                <p className="product-price" style={{ textDecoration: 'line-through' }}>$120.000</p>
                                <p className="product-discount">$80.000 <span className="discount-star">★</span></p>
                                <button className="buy-button">Comprar</button>
                            </div>
                        </div>
                        <div className="product-item">
                            <img src="src\assets\landing(assets)\apple_iphone_8.jpg" alt="apple_iphone_8" className="product-image" style={{ display: 'block', margin: '0 auto' }} />
                            <div className="product-details">
                                <h3 className="product-name">Apple iphone 8 128Gb</h3>
                                <p className="product-brand">Apple</p>
                                <p className="product-price" style={{ textDecoration: 'line-through' }}>$1.800.000</p>
                                <p className="product-discount">$1.200.000 <span className="discount-star">★</span></p>
                                <button className="buy-button">Comprar</button>
                            </div>
                        </div>
                        <div className="product-item">
                            <img src="src\assets\landing(assets)\samsung_Smart_TV.jpg" alt="samsung_Smart_TV" className="product-image" style={{ display: 'block', margin: '0 auto' }} />
                            <div className="product-details">
                                <h3 className="product-name">Samsung Smart TV</h3>
                                <p className="product-brand">Samsung</p>
                                <p className="product-price" style={{ textDecoration: 'line-through' }}>$1.800.000</p>
                                <p className="product-discount">$1.200.000 <span className="discount-star">★</span></p>
                                <button className="buy-button">Comprar</button>
                            </div>
                        </div>
                        <div className="product-item">
                            <img src="src\assets\landing(assets)\gafas_Gucci_Oro.jpg" alt="gafas_Gucci_Oro" className="product-image" style={{ display: 'block', margin: '0 auto' }} />
                            <div className="product-details">
                                <h3 className="product-name">Gafas de Sol Negro Oro Gucci</h3>
                                <p className="product-brand">Gucci</p>
                                <p className="product-price" style={{ textDecoration: 'line-through' }}>$13.000.000</p>
                                <p className="product-discount">$9.200.000 <span className="discount-star">★</span></p>
                                <button className="buy-button">Comprar</button>
                            </div>
                        </div>
                        <div className="product-item">
                            <img src="src\assets\landing(assets)\gafas_Gucci_Oro.jpg" alt="gafas_Gucci_Oro" className="product-image" style={{ display: 'block', margin: '0 auto' }} />
                            <div className="product-details">
                                <h3 className="product-name">Gafas de Sol Negro Oro Gucci</h3>
                                <p className="product-brand">Gucci</p>
                                <p className="product-price" style={{ textDecoration: 'line-through' }}>$13.000.000</p>
                                <p className="product-discount">$9.200.000 <span className="discount-star">★</span></p>
                                <button className="buy-button">Comprar</button>
                            </div>
                        </div>
                        <div className="product-item">
                            <img src="src\assets\landing(assets)\gafas_Gucci_Oro.jpg" alt="gafas_Gucci_Oro" className="product-image" style={{ display: 'block', margin: '0 auto' }} />
                            <div className="product-details">
                                <h3 className="product-name">Gafas de Sol Negro Oro Gucci</h3>
                                <p className="product-brand">Gucci</p>
                                <p className="product-price" style={{ textDecoration: 'line-through' }}>$13.000.000</p>
                                <p className="product-discount">$9.200.000 <span className="discount-star">★</span></p>
                                <button className="buy-button">Comprar</button>
                            </div>
                        </div>
                        <div className="product-item">
                            <img src="src\assets\landing(assets)\gafas_Gucci_Oro.jpg" alt="gafas_Gucci_Oro" className="product-image" style={{ display: 'block', margin: '0 auto' }} />
                            <div className="product-details">
                                <h3 className="product-name">Gafas de Sol Negro Oro Gucci</h3>
                                <p className="product-brand">Gucci</p>
                                <p className="product-price" style={{ textDecoration: 'line-through' }}>$13.000.000</p>
                                <p className="product-discount">$9.200.000 <span className="discount-star">★</span></p>
                                <button className="buy-button">Comprar</button>
                            </div>
                        </div>
                    </div>
                    {/* Repite este bloque para cada fila de productos */}
                </div>
            </div>
            <div className="sales-box">
                <h2>Top ventas</h2>
                <div className="product-info">
                    <h3>Cama de Madera de Roble</h3>
                    <p>100% garantizado</p>
                    <p>Instalación gratuita en la ciudad de Medellín</p>
                    <p>Precio: $2,500,000</p>
                    <button className="buy-button">Comenzar a comprar</button>
                </div>
            </div>
            <h1 style={{ fontSize: '28px' }}>¡Conoce nuestros Administradores!</h1>
            <div class="container">
                <div class="card">
                    <img src="https://via.placeholder.com/300x200" alt="Imagen de producto" />
                    <h2>Producto 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                    <button>Comprar</button>
                </div>
                <div class="card">
                    <img src="https://via.placeholder.com/300x200" alt="Imagen de producto" />
                    <h2>Producto 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                    <button>Comprar</button>
                </div>
                <div class="card">
                    <img src="https://via.placeholder.com/300x200" alt="Imagen de producto" />
                    <h2>Producto 3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                    <button>Comprar</button>
                </div>
            </div>
            <style jsx>{`
                .landing-page {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px;
                }

                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px;
                  }
              
                  .search-bar {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #fff;
                    padding: 10px;
                    width: 45%;
                  }
              
                  .search-bar input {
                    border: 1px solid black;
                    padding: 10px;
                    width: 250px;
                    font-size: 18px;
                  }
              
                  .search-bar button {
                    background-color: #4CAF50;
                    color: white;
                    border: 1px solid black;
                    padding: 10px;
                    font-size: 18px;
                    cursor: pointer;
                  }
              
                .image-nav {
                    display: flex;
                    justify-content: center;
                    margin-top: 5px;
                }
        
                .nav-button {
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                    margin: 0 5px;
                    padding: 5px 10px;
                    transition: background-color 0.3s ease;
                }
        
                .nav-button:hover {
                    background-color: rgba(0, 0, 0, 0.1);
                }
        
                .nav-button.active {
                    background-color: rgba(0, 0, 0, 0.2);
                }
        
                .nav-button-inner {
                    font-size: 16px;
                }

                .image-container {
                    position: relative;
                    height: 400px;
                    width: 600px;
                    overflow: hidden;
                }

                .image-slider {
                    display: flex;
                    transition: transform 0.5s ease-in-out;
                }

                .image-item {
                    width: 600px;
                    height: 400px;
                    object-fit: cover;
                }

                .category-buttons {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                }

                .category-button {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0 10px;
                    cursor: pointer;
                }

                .category-button .category-name {
                    margin-top: 5px;
                }

                .arrow-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 50px;
                    height: 50px;
                    background-color: rgba(255, 255, 255, 0.8);
                    border: none;
                    border-radius: 50%;
                    font-size: 24px;
                    cursor: pointer;
                    opacity: 0.8;
                    transition: opacity 0.3s ease-in-out;
                }

                .arrow-button:hover {
                    opacity: 1;
                }

                .left-arrow {
                    left: 0;
                }

                .right-arrow {
                    right: 0;
                }

                .product-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 20px;
                }
            
                .product-row {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 20px;
                }
            
                .product-item {
                    margin: 0 10px;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    width: 250px;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
            
                .product-image {
                    width: 100px;
                    height: 100px;
                    object-fit: contain;
                    margin-bottom: 10px;
                }
            
                .product-name {
                    font-size: 18px;
                    margin-bottom: 5px;
                }
            
                .product-brand {
                    font-style: italic;
                    margin-bottom: 5px;
                }
            
                .product-price {
                    margin-bottom: 5px;
                }
            
                .product-discount {
                    margin-bottom: 10px;
                }
            
                .discount-star {
                    color: #f00;
                    font-size: 20px;
                }
            
                .buy-button {
                    background-color: #007bff;
                    color: #fff;
                    border: none;
                    border-radius: 5px;
                    padding: 8px 16px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
            
                .buy-button:hover {
                    background-color: #0056b3;
                }

                .products-scroll-container {
                    overflow-x: auto;
                    max-width: 60%;
                }
            
                .product-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 10px;
                }

                .sales-box {
                    background-color: #f2f2f2;
                    border-radius: 5px;
                    padding: 20px;
                    max-width: 500px;
                    margin: 0 auto;
                    text-align: center;
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                  }
              
                  .sales-box h2 {
                    margin-top: 0;
                  }
              
                  .product-info {
                    margin-top: 20px;
                  }
              
                  .product-info h3 {
                    margin-bottom: 10px;
                  }
              
                  .product-info p {
                    margin-bottom: 5px;
                  }
              
                  .buy-button {
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    padding: 10px 20px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin-top: 20px;
                    cursor: pointer;
                  }
              
                  .buy-button:hover {
                    background-color: #45a049;
                  }

                  .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px;
                    background-color: #f2f2f2;
                    border-radius: 5px;
                  }
              
                  .card {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #fff;
                    border-radius: 5px;
                    padding: 20px;
                    width: 30%;
                    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                  }
              
                  .card img {
                    width: 100%;
                    border-radius: 5px;
                    margin-bottom: 20px;
                  }
              
                  .card h2 {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    text-align: center;
                  }
              
                  .card p {
                    font-size: 16px;
                    text-align: center;
                    margin-bottom: 20px;
                  }
              
                  .card button {
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    padding: 10px 20px;
                    cursor: pointer;
                  }
              
                  .card button:hover {
                    background-color: #45a049;
                  }
            `}</style>
        </div>
    );
}
