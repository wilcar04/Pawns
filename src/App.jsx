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
import EmpezarEmpeñar from './pages/EmpezarEmpeñar'
import EmpezarVender from './pages/EmpezarVender'
import MisEmpeños from './pages/MisEmpeños'
import MisCompras from './pages/MisCompras'
import EmpeñosActivos from './pages/EmpeñosActivos'


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
        <Route index element={<Landing />}/>
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
