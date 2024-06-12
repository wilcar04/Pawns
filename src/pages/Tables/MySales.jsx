import React from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Outlet } from "react-router-dom";
import { getBoughtItems } from '../../api/queries';
import { useQuery } from '@tanstack/react-query';
import { imageUrlApi } from '../../api/axiosConfig';
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

const TablaMisCompras = () => {

  const authUser = useAuthUser();

  const{data:Misventas,isLoading}=useQuery({
    queryKey:["getBoughtItems"],
    queryFn:()=>getBoughtItems(authUser.id)
  })

  function handlerecover(idempennio){

  }

  if (isLoading) {
    return <Loading />; 
  }

  if (!Misventas?.length) {
    return <NoInfo message="No hay ventas" />;
  }


  return (
    <table className="mx-32 max-w-full">
      <thead>
        <tr className=''>
          <th className="py-1 bg-gray-200 text-left pl-3">Producto</th>
          <th className="py-1 bg-gray-200">Categoria</th>  
          <th className="py-1 bg-gray-200">Fecha Compra</th>  
          <th className="py-1 bg-gray-200">precio</th>
        </tr>
      </thead>
      <tbody>
        {Misventas?.map(compra => (
          <tr>
            <td className="py-4 bg-gray-100">
              <div className='flex items-center'>
                <span className='mt-3 ml-5'>{compra.nombre}</span>
              </div>
            </td>
            <td className="py-4 bg-gray-100">{compra.categoria}</td>
            <td className="py-4 bg-gray-100">{compra.fecha}</td>
            <td className="py-4 bg-gray-100">{compra.precio}</td>
           
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
      <div className="text-center mt-20 text-base sm:text-3xl lg:text-3xl font-bold mb-20">
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
