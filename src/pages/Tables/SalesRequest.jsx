import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Outlet } from "react-router-dom";
import { getAllPendingSells } from '../../api/queries';
import { imageUrlApi } from '../../api/axiosConfig';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import NoInfo from '../../components/NoInfo';

const RedStripe = () => {
  return (
    <div className="bg-rojo h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs ">Mis ventas</span>
      <button className="bg-rojo text-white py-1 px-4 text-xs">Inicio = Mis ventas</button>
    </div>
  );
};

const TablaMisVentas = () => {

  const authUser = useAuthUser();

  const{data:solicituventas,isLoading}=useQuery({
    queryKey:["getAllPendingSells"],
    queryFn:()=>getAllPendingSells()
  })


  if (isLoading) {
    return <Loading />; 
  }

  if (!solicituventas?.length) {
    return <NoInfo message="No hay solicitudes de ventas" />;
  }

  return (
    <table className="mx-32 max-w-full">
      <thead>
        <tr className=''>
          <th className="py-1 bg-gray-200 text-left pl-3">Producto</th>
          <th className="py-1 bg-gray-200">categoria</th>
          <th className="py-1 bg-gray-200">Precio usuario</th>
          <th className="py-1 bg-gray-200">Detalles del producto</th>
        </tr>
      </thead>
      <tbody>
        {solicituventas?.map(empeno => (
          <tr key={empeno.id}>
            <td className="py-4 bg-gray-100">
              <div className='flex items-center'>
                <span className='mt-3 ml-5'>{empeno.nombre}</span>
              </div>
            </td>
            <td className="py-4 bg-gray-100">{empeno.categoria}</td>
            <td className="py-4 bg-gray-100">{empeno.precio}</td>
            <td className="py-4 bg-gray-100">
              <Link  to={`/request/${empeno.idoferta}`} state={{ data: empeno }} className="text-blue-500 underline">Ver más</Link>
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
      <div className="flex items-center"></div>
      <button className='bg-rojo h-10 rounded w-40 text-white text-xs mt-40 mr-20'>Guardar cambios</button>
    </div>
  );
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <RedStripe />
      <div className="text-center mt-20 mb-20 text-base sm:text-3xl lg:text-3xl font-bold">
        Solicitudes de venta
      </div>
      <TablaMisVentas />
      <main className="flex-1">
        <SaveChangesButton />
        <Outlet />
      </main>
    </div>
  );
}

export default function SalesRequest() {
  return (
    <Layout />
  );
}
