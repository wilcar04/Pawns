<<<<<<< Updated upstream
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
=======
import './App.css'

import { Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom'
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import CustomerInformation from './pages/CustomerInformation'
import OwnerInformation from './pages/OwnerInformation'
import MetodoPago from './pages/MetodoPago'
import Layout from './components/Layout'
import EmpezarEmpeñar from './pages/EmpezarEmpeñar'
import EmpezarVender from './pages/EmpezarVender'
import MisEmpeños from './pages/MisEmpeños'
import MisCompras from './pages/MisCompras'
import EmpeñosActivos from './pages/EmpeñosActivos'
import ProductDetails from './pages/ProductDetails';
import About from './pages/About'
import Car from "./pages/Car"
import PawnRequest from './pages/Pawn_request'
import AllProducts from './pages/AllProducts';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
    return (
=======
      <Route path="/" element={<Layout />}>
        <Route path="/Car" element={<Car />} />
        <Route path="/EmpezarEmpeñar" element={<EmpezarEmpeñar />} />
        <Route path="/EmpezarVender" element={<EmpezarVender />} />
        <Route path="/MisEmpeños" element={<MisEmpeños />} />
        <Route path="/MisCompras" element={<MisCompras />} />
        <Route path="/EmpeñosActivos" element={<EmpeñosActivos />} />
        <Route path="/about" element={<About />} />
        <Route path="/CustomerInformation" element={<CustomerInformation />} />
        <Route path="/OwnerInformation" element={<OwnerInformation />} />
        <Route path="/MetodoPago" element={<MetodoPago />} />
        <Route path="pawnRequest" element={<PawnRequest />}/>
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:index" element={<EditProduct />} />
        <Route index element={<Landing />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
      
    </>
  ))
  
  const store = createStore({
    authName:'_auth',
    authType:'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider store={store}>
>>>>>>> Stashed changes
        <RouterProvider router={router} />
    );
}

export default App;
