// src/App.js
import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Layout from './components/Layout';
import ProductDetails from './pages/ProductDetails';
import './App.css';

const products = [
    { name: 'Pantalones Levis', brand: "Levi's", price: '$120.000 COP', discount: '$80.000 COP', img: 'pantalones_Levis.jpg' },
    { name: 'Apple iPhone 8 128Gb', brand: 'Apple', price: '$1.800.000 COP', discount: '$1.200.000 COP', img: 'apple_iphone_8.jpg' },
    { name: 'Samsung Smart TV', brand: 'Samsung', price: '$1.800.000 COP', discount: '$1.200.000 COP', img: 'samsung_Smart_TV.jpg' },
    { name: 'Gafas de Sol Negro Oro Gucci', brand: 'Gucci', price: '$13.000.000 COP', discount: '$9.200.000 COP', img: 'gafas_Gucci_Oro.jpg' }
];

function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Layout products={products} />}>
                <Route index element={<Landing products={products} />} />
                <Route path="product/:id" element={<ProductDetails products={products} />} />
            </Route>
        </>
    ));

    return (
        <RouterProvider router={router} />
    );
}

export default App;
