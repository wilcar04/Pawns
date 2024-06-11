import './App.css'

// Dependencias
import { Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom'
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'

// Imports de componentes
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Layout from './components/Layout'
import  { useEffect } from 'react';
import { getCarStorageItem, setCarStorageItem, removeCarStorageItem } from "./components/carrostorage"
import Checkout from "./pages/checkout"
import EmpezarEmpeñar from './pages/EmpezarEmpeñar'
import EmpezarVender from './pages/EmpezarVender'
import MyPawns from './pages/Tables/MyPawns'
import MySales from './pages/Tables/MySales'
import OnProcessPawns from './pages/Tables/OnProcessPawns'
import OnProcessSales from './pages/Tables/OnProcessSales'
import Pawn_request from './pages/CreatePawnRequest'
import ActivePawns from './pages/Tables/ActivePawns'
import SalesRequest from './pages/Tables/SalesRequest'
import PawnsRequest from './pages/Tables/PawnsRequest'
import MyPawnRequest from './pages/Tables/MyPawnRequest'
import MySalesRequest from './pages/Tables/MySalesRequest'
import ProductDetails from './pages/ProductDetails';
import About from './pages/About'
import Car from "./pages/Car"
import PawnRequest from './pages/CreatePawnRequest'
import AllProducts from './pages/AllProducts';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductContext from './components/ProductContext';
import Sandbox from './Sandbox';
import AccountInfo from './pages/CustomerInformation';
import CreateSellRequest from './pages/CreateSellRequest copy';
import CreatePawnRequest from './pages/CreatePawnRequest';
import ProductDetailsRequest from './pages/ProductDetailsRequest';

import CustomerInformation from './pages/CustomerInformation';


function App() {
  useEffect(() => {
    const carStorageItem = getCarStorageItem();
    
    if (!carStorageItem) {
      setCarStorageItem([]);
    }
  }, []);  
  const router = createBrowserRouter(createRoutesFromElements(
    <
      // antes usamos el local storage para obtener el carrito y llamar el checkout
    >

      // Convierte la lista a formato JSON

      
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>

        {/* Colocarlo en condicional? */}
        <Route path="/EmpezarEmpeñar" element={<EmpezarEmpeñar />} />
        <Route path="/EmpezarVender" element={<EmpezarVender />} />



        <Route element={<AuthOutlet fallbackPath='/login' />}>
          <Route path="/MyPawns" element={<MyPawns />} />
          <Route path="/MyShopping" element={<MySales />} />

          <Route path="/ActivePawns" element={<ActivePawns />} />

          <Route path="/OnProcessPawns" element={<OnProcessPawns />} />
          <Route path="/OnProcessSales" element={<OnProcessSales />} />

          <Route path="/SalesRequest" element={<SalesRequest />} />
          <Route path="request/:id" element={<ProductDetailsRequest />} />

          <Route path="/PawnsRequest" element={<PawnsRequest />} />
          <Route path="request/:id" element={<ProductDetailsRequest />} />

          <Route path="/MyPawnRequest" element={<MyPawnRequest />} />
          <Route path="/MySalesRequest" element={<MySalesRequest />} />

          <Route path="/createSell" element={<CreateSellRequest />} />
          <Route path="/createPawn" element={<CreatePawnRequest />} />

          {/* <Route path="/CustomerInformation" element={<AccountInfo />} /> */}

          <Route path="/Checkout" element={<Checkout />} />
        </Route>



        <Route element={<ProductContext />}>
          <Route index element={<Landing />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Route>
        
        {/* <Route path="/Car" element={<Car />} /> */}
        <Route path="/about" element={<About />} />

        {/* <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:index" element={<EditProduct />} /> */}

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
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  )

}

export default App
