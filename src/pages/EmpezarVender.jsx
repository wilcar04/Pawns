
import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';

const RedStripe = () => {
  return (
    <div className="bg-rojo h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs">Empezar a vender</span>
      <button className="bg-rojo text-white py-1 px-4 text-xs">Inicio = Empezar a vender </button>
    </div>
  );
};

const ButtonSingInRegister = () => {
  return (
    <div className='mt-5'>
      <a href='/login' className='text-naranja'>Iniciar sesion </a>
      o
      <a href='SingUp' className='text-rojo'> registrate</a> 
      
    </div>
  )
}

function Layout(){
  return(
    <div class="min-h-screen flex flex-col">
            <Navbar/>
            <RedStripe></RedStripe>
            <div className="text-center mt-20 text-base sm:text-3xl lg:text-xl font-bold">
              ¿Quieres empezar a vender?
            </div>
            <ButtonSingInRegister></ButtonSingInRegister>
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer/>
        </div>
  )
}


export default function EmpezarVender() {
  return (
    <div>
      <Layout></Layout>
    </div>
  );
}