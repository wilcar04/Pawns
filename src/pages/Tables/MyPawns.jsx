import React from 'react';
import { Outlet } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { getUserCurrentPawns } from '../../api/queries';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { imageUrlApi } from '../../api/axiosConfig';
import { Link } from 'react-router-dom';
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

const TablaMisEmpeños = () => {

  const authUser = useAuthUser();

  const{data:Misempenos,isLoading}=useQuery({
    queryKey:["getmisempeños"],
    queryFn:()=>getUserCurrentPawns(authUser.id)
  })

  function handlerecover(idempennio){

  }

  if (isLoading) {
    return <Loading />; 
  }

  if (!Misempenos?.length) {
    return <NoInfo message="No hay empeños" />;
  }
  

  return (
    <table className="mx-32 max-w-full">
      <thead>
        <tr>
      <th className="py-1 bg-gray-200 text-left pl-3">Producto</th>
          <th className="py-1 bg-gray-200">Fecha Inicio</th>
          <th className="py-1 bg-gray-200">Fecha Final</th>
          <th className="py-1 bg-gray-200">Precio</th>
          <th className="py-1 bg-gray-200"></th> 

        </tr>
      </thead>
      <tbody>
      {Misempenos?.map(empeno => (
          <tr key={empeno.id}>
            <td className="py-4 bg-gray-100">
              <div className='flex items-center'>
                <img src={`${imageUrlApi}/${empeno.imagen}`} className='w-7 ml-5' alt='Logo' />
                <span className='mt-3 ml-5'>{empeno.nombre}</span>
              </div>
            </td>
            <td className="py-4 bg-gray-100">{empeno.fecha_inicio}</td>
            <td className="py-4 bg-gray-100">{empeno.fecha_final}</td>
            <td className="py-4 bg-gray-100">{empeno.precio}</td>
            <td className="py-4 bg-gray-100">

            <Link to="/Checkout" state={{data: empeno, type:"pawn"}} onclick={()=>handlerecover(empeno.idempennio)} 
                    style={{ backgroundColor: '#5E1414', color: '#FFFFFF' }} 
                    className="hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Recuperar
            </Link>
             
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
        <img src='src/assets/Download.png' className='w-5 h-5 ml-10 mt-40' alt='Download' />
        <button className='ml-2 text-xs mt-40'>Enviar productos a vender</button>
      </div>
      <button className='bg-rojo h-10 rounded w-40 text-white text-xs mt-40 mr-20'>Guardar cambios</button>
    </div>
  );
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <RedStripe />
      <div className="text-center mt-20 text-base sm:text-3xl lg:text-3xl font-bold">
        Mis empeños
      </div>
      <div className="text-center text-blue-800 mt-3 mb-5 text-base sm:text-xs lg:text-xs font-bold">
        ¿Quieres recuperar tus productos? Recuerda que tienes un plazo de 2 meses para hacerlo.
      </div>
      <TablaMisEmpeños />
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
