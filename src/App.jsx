import { Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Layout from './components/Layout'
import PawnRequest from './pages/Pawn_request'


import './App.css'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<PawnRequest />}/>
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
