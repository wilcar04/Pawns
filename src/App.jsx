import { Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Layout from './components/Layout'
import Car from "./pages/Car"
import Checkout from "./pages/checkout"
import './App.css'
import {getCarStorageItem,setCarStorageItem,removeCarStorageItem} from "./components/carrostorage"
import  { useEffect } from 'react';
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
        <Route index element={<Landing />}/>
      </Route>
    </>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
