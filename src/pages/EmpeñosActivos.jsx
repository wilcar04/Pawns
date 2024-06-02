
import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';

const RedStripe = () => {
  return (
    <div className="bg-rojo h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs ">Mis empeños</span>
      <button className="bg-rojo text-white py-1 px-4 text-xs">Inicio = Mis empeños  </button>
    </div>
  );
};

const TablaMisEmpeños = () => {
    return (
        <table className="mx-10 max-w-full">
            <thead>
                <tr className=''>
                    <th className="py-1 bg-gray-200 text-left pl-3">Producto</th>
                    <th className="py-1 bg-gray-200" >Monto final </th>
                    <th className="py-1 bg-gray-200">Cantidad</th>
                    <th className="py-1 bg-gray-200">Precio a recuperar</th>
                    <th className="py-1 bg-gray-200 w-40" ></th>
                </tr>
            </thead>
            <tbody>
                <tr>            
                    <td className="py-4 bg-gray-100">    
                        <div className='flex item-center'>
                        <img src='src\assets\logo.png' className='w-7 ml-5' ></img>     
                        <span  className='mt-3 ml-5'>Producto 1</span>     
                        </div>         
                    </td>    
                    <td className="py-4 bg-gray-100">100.000</td>
                    <td className="py-4 bg-gray-100">1</td>
                    <td className="py-4 bg-gray-100">200.000</td>
                    <td className="py-4 bg-gray-100">
                    <button className='mr-5'>
                            <img src='src\assets\Download.png' className='w-5 '></img>
                        </button>
                        <button  className='mr-5'>
                            <img src='src\assets\delete.png' className='w-5 '></img>
                        </button>
                    </td>
                    
                </tr>
                <tr>            
                    <td className="py-4 bg-gray-100">    
                        <div className='flex item-center'>
                        <img src='src\assets\logo.png' className='w-7 ml-5' ></img>     
                        <span  className='mt-3 ml-5'>Producto 2</span>     
                        </div>         
                    </td>    
                    <td className="py-4 bg-gray-100">100.000</td>
                    <td className="py-4 bg-gray-100">1</td>
                    <td className="py-4 bg-gray-100">200.000</td>
                    <td className="py-4 bg-gray-100">
                    <button className='mr-5'>
                            <img src='src\assets\Download.png' className='w-5 '></img>
                        </button>
                        <button  className='mr-5'>
                            <img src='src\assets\delete.png' className='w-5 '></img>
                        </button>
                    </td>
                    
                </tr>
                <tr>            
                    <td className="py-4 bg-gray-100">    
                        <div className='flex item-center'>
                        <img src='src\assets\logo.png' className='w-7 ml-5' ></img>     
                        <span  className='mt-3 ml-5'>Producto 3</span>     
                        </div>         
                    </td>    
                    <td className="py-4 bg-gray-100">100.000</td>
                    <td className="py-4 bg-gray-100">1</td>
                    <td className="py-4 bg-gray-100">200.000</td>
                    <td className="py-4 bg-gray-100">
                    <button className='mr-5'>
                            <img src='src\assets\Download.png' className='w-5 '></img>
                        </button>
                        <button  className='mr-5'>
                            <img src='src\assets\delete.png' className='w-5 '></img>
                        </button>
                    </td>
                    
                </tr>
                
                <tr>
            
                <td className="py-4 bg-gray-100">
                        
                        <div className='flex item-center'>           
                        <img src='src\assets\logo.png' className='w-7 ml-5' ></img>     
                        <span  className='mt-3 ml-5'>Producto 4</span>     
                        </div>          
                </td>    
                    <td className="py-4 bg-gray-100">100.000</td>
                    <td className="py-4 bg-gray-100">1</td>
                    <td className="py-4 bg-gray-100">200.000</td>
                    <td className="py-4 bg-gray-100">
                    <button className='mr-5'>
                            <img src='src\assets\Download.png' className='w-5 '></img>
                        </button>
                        <button  className='mr-5'>
                            <img src='src\assets\delete.png' className='w-5 '></img>
                        </button>
                    </td>
                    
                </tr>
                
                {/* Agrega más filas según sea necesario */}
            </tbody>
        </table>
    )
}
function SaveChangesButton()
{
    return(
        <div className='flex justify-between items-center'>
        <div className="flex items-center">
        <img src='src\assets\Download.png' className='w-5 h-5 ml-10 mt-40'></img>
        <button className='ml-2 text-xs mt-40'>Enviar productos a vender</button>
        </div>
        <button className='bg-rojo h-10 rounded w-40 text-white text-xs mt-40 mr-20'>Guardar cambios</button>
        </div>
        
        
    )
}





function Layout(){
  return(
    <div class="min-h-screen flex flex-col">
            <Navbar/>
            <RedStripe></RedStripe>
            <div className="text-center mt-20 text-base sm:text-3xl lg:text-xl font-bold">
              Mis empeños 
            </div>
            <div className="text-center text-blue-800 mt-3 mb-5 text-base sm:text-xs lg:text-xs font-bold">
                ¿Quieres recuperar tus productos? Recuerda que tienes un plazo de 2 meses para hacerlo.
            </div>
            
            <TablaMisEmpeños></TablaMisEmpeños>

            <SaveChangesButton></SaveChangesButton>


            <main className="flex-1">
                <Outlet />
            </main>
            <Footer/>
        </div>
  )
}


export default function MisEmpeños() {
  return (  
      <Layout></Layout>
  );
}