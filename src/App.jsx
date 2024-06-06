import { Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom'
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
import './App.css';
import About from './pages/About'
import Car from "./pages/Car"
import PawnRequest from './pages/Pawn_request'



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
        <Route index element={<Landing products={products} />} />
        <Route path="product/:id" element={<ProductDetails products={products} />} />
      </Route>
      
    </>
  ))

    return (
        <RouterProvider router={router} />
    );
}

export default App;
