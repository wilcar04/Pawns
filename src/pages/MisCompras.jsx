
import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';

const RedStripe = () => {
  return (
    <div className="bg-rojo h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs ">Mis Compras</span>
      <button className="bg-rojo text-white py-1 px-4 text-xs">Inicio = Mis Compras  </button>
    </div>
  );
};

const TablaMisCompras = () => {
    return (
        <table className="mx-10 max-w-full">
            <thead>
                <tr className=''>
                    <th className="py-1 bg-gray-200 text-left pl-3">Producto</th>
                    <th className="py-1 bg-gray-200" >Precio Dado </th>
                    <th className="py-1 bg-gray-200">Fecha Compra</th>
                    <th className="py-1 bg-gray-200">Cantidad</th>
                    <th className="py-1 bg-gray-200">Total</th>
                    <th className="py-1 bg-gray-200 w-20" ></th>
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
                    <td className="py-4 bg-gray-100">10/10/23</td>
                    <td className="py-4 bg-gray-100">1</td>
                    <td className="py-4 bg-gray-100">100.000</td>
                    <td className="py-4 bg-gray-100">
                        <button>
                            <img src='src\assets\delete.png' className='w-5 ml-15'></img>
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
                    <td className="py-4 bg-gray-100">10/10/23</td>
                    <td className="py-4 bg-gray-100">1</td>
                    <td className="py-4 bg-gray-100">100.000</td>
                    <td className="py-4 bg-gray-100">
                        <button>
                            <img src='src\assets\delete.png' className='w-5 ml-15'></img>
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
                    <td className="py-4 bg-gray-100">10/10/23</td>
                    <td className="py-4 bg-gray-100">1</td>
                    <td className="py-4 bg-gray-100">100.000</td>

                    <td className="py-4 bg-gray-100">
                        <button>
                            <img src='src\assets\delete.png' className='w-5 ml-15'></img>
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
                    <td className="py-4 bg-gray-100">10/10/23</td>
                    <td className="py-4 bg-gray-100">1</td>
                    <td className="py-4 bg-gray-100">100.000</td>
                    <td className="py-4 bg-gray-100">
                        <button>
                            <img src='src\assets\delete.png' className='w-5 ml-15'></img>
                        </button>
                    </td>
                    
                </tr>
            </tbody>
        </table>
    )
}


function Layout(){
  return(
    <div class="min-h-screen flex flex-col">
            <Navbar/>
            <RedStripe></RedStripe>
            <div className="text-center mt-20 text-base sm:text-3xl lg:text-xl font-bold mb-20">
              Mis Compras
            </div>
            <TablaMisCompras></TablaMisCompras>
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer/>
        </div>
  )
}


export default function MisCompras() {
  return (  
      <Layout></Layout>
  );
}