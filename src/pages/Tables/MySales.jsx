import React from 'react';
import { Outlet } from "react-router-dom";


const RedStripe = () => {
  return (
    <div className="bg-rojo h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs ">Mis ventas</span>
      <button className="bg-rojo text-white py-1 px-4 text-xs">Inicio = Mis ventas</button>
    </div>
  );
};

const compras = [
  { id: 1, producto: 'Productzxvzx', precioDado: 100000, fechaCompra: '10/10/23', cantidad: 2, total: 200000 },
  { id: 2, producto: 'Pasfawfasfasfas', precioDado: 100000, fechaCompra: '10/10/23', cantidad: 1, total: 100000 },
  { id: 3, producto: 'dfhdfhdfhdhdfh', precioDado: 100000, fechaCompra: '10/10/23', cantidad: 1, total: 100000 },
  { id: 4, producto: 'dfhdfhdfgwefqw', precioDado: 100000, fechaCompra: '10/10/23', cantidad: 1, total: 100000 }
];

const TablaMisCompras = () => {
  return (
    <table className="mx-32 max-w-full">
      <thead>
        <tr className=''>
          <th className="py-1 bg-gray-200 text-left pl-3">Producto</th>
          <th className="py-1 bg-gray-200">Precio Dado</th>
          <th className="py-1 bg-gray-200">Fecha Compra</th>  
          <th className="py-1 bg-gray-200">Total</th>
          <th className="py-1 bg-gray-200 w-20"></th>
        </tr>
      </thead>
      <tbody>
        {compras.map(compra => (
          <tr>
            <td className="py-4 bg-gray-100">
              <div className='flex items-center'>
                <img src='src/assets/logo.png' className='w-7 ml-5' alt='Logo' />
                <span className='mt-3 ml-5'>{compra.producto}</span>
              </div>
            </td>
            <td className="py-4 bg-gray-100">{compra.precioDado.toLocaleString()}</td>
            <td className="py-4 bg-gray-100">{compra.fechaCompra}</td>
            <td className="py-4 bg-gray-100">{compra.total.toLocaleString()}</td>
            <td className="py-4 bg-gray-100">
            <button>
                <img src='src/assets/accept.png' className='w-5 ml-15' alt='accept' />
              </button>
              <button>
                <img src='src/assets/cancel.png' className='w-5 ml-15' alt='cancel' />
              </button>
              <button>
                <img src='src/assets/Download.png' className='w-5 ml-15' alt='Donwload' />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
function SaveChangesButton() {
  return (
    <div className='flex justify-between items-center'>
      <div className="flex items-center">
      </div>
      <button className='bg-rojo h-10 rounded w-40 text-white text-xs mt-40 mr-20'>Guardar cambios</button>
    </div>
  );
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
 
      <RedStripe />
      <div className="text-center mt-20 text-base sm:text-3xl lg:text-xl font-bold mb-20">
        Mis ventas
      </div>
      <TablaMisCompras />
      <main className="flex-1">
        <SaveChangesButton></SaveChangesButton>
        <Outlet />
      </main>
   
    </div>
  );
}

export default function MySales() {
  return (
    <Layout />
  );
}
