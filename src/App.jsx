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
import MyPawns from './pages/Tables/MyPawns'
import ActivePawns from './pages/Tables/ActivePawns'
import ActiveSales from './pages/Tables/ActiveSales'
import MySales from './pages/Tables/MySales'
import OnProcessPawns from './pages/Tables/OnProcessPawns'
import Pawn_request from './pages/Pawn_request'
import SalesRequest from './pages/Tables/SalesRequest'
import PawnsRequest from './pages/Tables/PawnsRequest'
import MyPawnRequest from './pages/Tables/MyPawnRequest'
import MySalesRequest from './pages/Tables/MySalesRequest'


import './App.css'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/EmpezarEmpeñar" element={<EmpezarEmpeñar />} />
      <Route path="/EmpezarVender" element={<EmpezarVender />} />
      <Route path="/MyPawns" element={<MyPawns />} />
      <Route path="/ActivePawns" element={<ActivePawns />} />
      <Route path="/ActiveSales" element={<ActiveSales />} />
      <Route path="/MySales" element={<MySales />} />
      <Route path="/OnProcessPawns" element={<OnProcessPawns />} />
      <Route path="/Pawn_request" element={<Pawn_request />} />
      <Route path="/SalesRequest" element={<SalesRequest />} />
      <Route path="/PawnsRequest" element={<PawnsRequest />} />
      <Route path="/MyPawnRequest" element={<MyPawnRequest />} />
      <Route path="/MySalesRequest" element={<MySalesRequest />} />

 
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
