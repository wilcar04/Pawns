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
import ActivePawns from './pages/Tables/ActivePawns'
import ActiveSales from './pages/Tables/ActiveSales'
import MySales from './pages/Tables/MySales'
import OnProcessPawns from './pages/Tables/OnProcessPawns'
import OnProcessSales from './pages/Tables/OnProcessSales'
import Pawn_request from './pages/Pawn_request'
import SalesRequest from './pages/Tables/SalesRequest'
import PawnsRequest from './pages/Tables/PawnsRequest'
import MyPawnRequest from './pages/Tables/MyPawnRequest'
import MySalesRequest from './pages/Tables/MySalesRequest'
import './App.css'
import ProductDetails from './pages/ProductDetails';
import About from './pages/About'
import Car from "./pages/Car"
import PawnRequest from './pages/Pawn_request'
import AllProducts from './pages/AllProducts';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductContext from './components/ProductContext';

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

      
      <Route path="/Checkout" element={<Checkout Productlist={getCarStorageItem()} />} />
      <Route path="/Car" element={<Car />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>
        <Route path="/Landing" element={<Landing />} />
        <Route path="/EmpezarEmpeñar" element={<EmpezarEmpeñar />} />
        <Route path="/EmpezarVender" element={<EmpezarVender />} />
        <Route path="/MyPawns" element={<MyPawns />} />
        <Route path="/ActivePawns" element={<ActivePawns />} />
        <Route path="/ActiveSales" element={<ActiveSales />} />
        <Route path="/MySales" element={<MySales />} />
        <Route path="/OnProcessPawns" element={<OnProcessPawns />} />
        <Route path="/OnProcessSales" element={<OnProcessSales />} />
        <Route path="/Pawn_request" element={<Pawn_request />} />
        <Route path="/SalesRequest" element={<SalesRequest />} />
        <Route path="/PawnsRequest" element={<PawnsRequest />} />
        <Route path="/MyPawnRequest" element={<MyPawnRequest />} />
        <Route path="/MySalesRequest" element={<MySalesRequest />} />

        <Route element={<ProductContext />}>
          <Route index element={<Landing />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="/all-products" element={<AllProducts />} />
        </Route>
        
        <Route path="/Car" element={<Car />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/CustomerInformation" element={<CustomerInformation />} />
        <Route path="/OwnerInformation" element={<OwnerInformation />} /> */}
        {/* <Route path="/MetodoPago" element={<MetodoPago />} /> */}
        <Route path="pawnRequest" element={<PawnRequest />}/>
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:index" element={<EditProduct />} />
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
