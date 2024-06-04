import { Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Layout from './components/Layout'
import EmpezarEmpeñar from './pages/EmpezarEmpeñar'
import EmpezarVender from './pages/EmpezarVender'
import MisEmpeños from './pages/MisEmpeños'
import MisCompras from './pages/MisCompras'
import EmpeñosActivos from './pages/EmpeñosActivos'

import About from './pages/About'

import './App.css'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/EmpezarEmpeñar" element={<EmpezarEmpeñar />} />
      <Route path="/EmpezarVender" element={<EmpezarVender />} />
      <Route path="/MisEmpeños" element={<MisEmpeños />} />
      <Route path="/MisCompras" element={<MisCompras />} />
      <Route path="/EmpeñosActivos" element={<EmpeñosActivos />} />
      
      <Route path="/" element={<Layout />}>
        <Route index element={<About />}/>
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
