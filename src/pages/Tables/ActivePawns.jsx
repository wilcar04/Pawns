import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from "react-router-dom";
import { getCurrentPawns } from '../../api/queries';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { imageUrlApi } from '../../api/axiosConfig';
import NoInfo from '../../components/NoInfo';
import Loading from '../../components/Loading';
 


const RedStripe = () => {
  return (
    <div className="bg-rojo h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs ">Mis empeños</span>
      <button className="bg-rojo text-white py-1 px-4 text-xs">Inicio = Mis empeños</button>
    </div>
  );
};

const empenos = [
  { id: 1, producto: 'Productzxvzx', montoFinal: 100000, cantidad: 2, precioRecuperar: 200000 },
  { id: 2, producto: 'Pasfawfasfasfas', montoFinal: 100000, cantidad: 1, precioRecuperar: 200000 },
  { id: 3, producto: 'dfhdfhdfhdhdfh', montoFinal: 100000, cantidad: 1, precioRecuperar: 200000 },
  { id: 4, producto: 'dfhdfhdfgwefqw', montoFinal: 100000, cantidad: 1, precioRecuperar: 200000 }
];

const TablaMisEmpeños = () => {
  const authUser = useAuthUser();

  const { data: empenos, isLoading } = useQuery({
    queryKey: ["getCurrentPawns"],
    queryFn: () => getCurrentPawns(authUser.id)
  });

  if (isLoading) {
    return <Loading />; 
  }

  if (!empenos?.length) {
    return <NoInfo message="No hay empeños activos" />;
  }

  return (
    <table className="mx-32 max-w-full">
      <thead>
        <tr>
          <th className="py-1 bg-gray-200 text-left pl-3">Producto</th>
          <th className="py-1 bg-gray-200">Fecha Inicio</th>
          <th className="py-1 bg-gray-200">Fecha Final</th>
          <th className="py-1 bg-gray-200">Precio</th>
        </tr>
      </thead>
      <tbody>
        {empenos.map(empeno => (
          <tr key={empeno.id}>
            <td className="py-4 bg-gray-100">
              <div className='flex items-center'>
                <img src={`${imageUrlApi}/${empeno.imagen}`} className='w-7 ml-5' alt='Producto' />
                <span className='mt-3 ml-5'>{empeno.nombre}</span>
              </div>
            </td>
            <td className="py-4 bg-gray-100">{empeno.fecha_inicio}</td>
            <td className="py-4 bg-gray-100">{empeno.fecha_final}</td>
            <td className="py-4 bg-gray-100">{empeno.precio}</td>
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
        <img src='src/assets/Download.png' className='w-5 h-5 ml-10 mt-40' alt='Download' />
        <button className='ml-2 text-xs mt-40'></button>
      </div>
      <button className='bg-rojo h-10 rounded w-40 text-white text-xs mt-40 mr-20'>Guardar cambios</button>
    </div>
  );
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <RedStripe />
      <div className="text-center mt-20 text-base sm:text-12xl lg:text-3xl font-bold">
        Empeños Activos
      </div>
      <div className="text-center text-blue-800 mt-3 mb-5 text-base sm:text-xs lg:text-xs font-bold">
          
      </div>
      <TablaMisEmpeños />
      <SaveChangesButton />
      <main className="flex-1">
        <Outlet />
      </main>
     
    </div>
  );
}

export default function ActivePawns() {
  return (
    <Layout />
  );
}
