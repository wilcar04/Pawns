import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Outlet } from "react-router-dom";
import { getOnTheWayOfferSells } from '../../api/queries';
import { imageUrlApi } from '../../api/axiosConfig';




const RedStripe = () => {
  return (
    <div className="bg-rojo h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs ">Mis Compras</span>
      <button className="bg-rojo text-white py-1 px-4 text-xs">Inicio = Mis Compras</button>
    </div>
  );
};

const compras = [
  { id: 1, producto: 'Productzxvzx', precioDado: 100000, Estado:'En camino', cantidad: 2, total: 200000 },
  { id: 2, producto: 'Pasfawfasfasfas', precioDado: 100000, Estado: 'En camino', cantidad: 1, total: 100000 },
  { id: 3, producto: 'dfhdfhdfhdhdfh', precioDado: 100000, Estado: 'En camino', cantidad: 1, total: 100000 },
  { id: 4, producto: 'dfhdfhdfgwefqw', precioDado: 100000, Estado: 'En camino', cantidad: 1, total: 100000 }
];

const TablaMisCompras = () => {

  const authUser = useAuthUser();

  const{data:Ventasproceso,isLoading}=useQuery({
    queryKey:["getOnTheWayOfferSells"],
    queryFn:()=>getOnTheWayOfferSells()
  })


  function accept(idempennio){

  }
  function cancel(idempennio){

  }


  return (
    <table className="mx-32 max-w-full">
      <thead>
        <tr className=''>
          <th className="py-1 bg-gray-200 text-left pl-3">Producto</th>
          <th className="py-1 bg-gray-200">Categoria</th>
          <th className="py-1 bg-gray-200">Estado</th>
          <th className="py-1 bg-gray-200">precio</th>
          <th className="py-1 bg-gray-200 w-20">llegó?</th>
        </tr>
      </thead>
      <tbody>
        {Ventasproceso?.map(compra => (
          <tr>
            <td className="py-4 bg-gray-100">
              <div className='flex items-center'>
              <img src={`${imageUrlApi}/${compra.imagen}`} className='w-7 ml-5' alt='Logo' />
                <span className='mt-3 ml-5'>{compra.nombre}</span>
              </div>
            </td>
            <td className="py-4 bg-gray-100">{compra.categoria}</td>
            <td className="py-4 bg-gray-100">{compra.estado.replace(/_/g, ' ')}</td>
            <td className="py-4 bg-gray-100">{compra.precio}</td>
            <td className="py-4 bg-gray-100">
                <>
                  <button onClick={() => accept(compra.idoferta)}>
                  <img src='src/assets/accept.png' className='w-5 ml-15' alt='accept' />
                </button>
                <button onClick={() => cancel(compra.idoferta)}>
                  <img src='src/assets/cancel.png' className='w-5 ml-15' alt='cancel' />
                </button>
                  
                </>
              
         
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
 
      <RedStripe />
      <div className="text-center mt-20 text-base sm:text-3xl lg:text-xl font-bold mb-20">
        Ventas en proceso 
      </div>
      <TablaMisCompras />
      <main className="flex-1">
        <Outlet />
      </main>
   
    </div>
  );
}

export default function OnProcessPawns() {
  return (
    <Layout />
  );
}
