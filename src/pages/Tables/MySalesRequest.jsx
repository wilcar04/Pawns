import React, { useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Outlet } from "react-router-dom";
import { getSellOffersNotFinished } from '../../api/queries';
import { useQuery } from '@tanstack/react-query';
import { imageUrlApi } from '../../api/axiosConfig';
import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { changeOfferState } from '../../api/queries';
import Loading from '../../components/Loading';
import NoInfo from '../../components/NoInfo';

const RedStripe = () => {
  return (
    <div className="bg-rojo h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs ">Mis empeños</span>
      <button className="bg-rojo text-white py-1 px-4 text-xs">Inicio = Mis empeños</button>
    </div>
  );
};

const TablaMisCompras = () => {

  const authUser = useAuthUser();
  const queryClient = useQueryClient();

  const{data:Missolicitudesventas,isFetching, isFetched}=useQuery({
    queryKey:["getSellOffersNotFinished"],
    queryFn:()=>getSellOffersNotFinished(authUser.id)
  })

  const { mutate: mutateReject, isPending: isPendingReject } = useMutation({
    mutationFn: (idempennio) => changeOfferState(idempennio, 'rechazada'),
    onSuccess: () => queryClient.invalidateQueries("getPawnOffersNotFinished")
  })

  const { mutate: mutateAccept, isPending: isPendingAccept } = useMutation({
    mutationFn: (idempennio) => changeOfferState(idempennio, 'en_curso'),
    onSuccess: () => queryClient.invalidateQueries("getPawnOffersNotFinished")
  })


  function accept(idempennio){
    mutateAccept(idempennio)
  }
  
  function cancel(idempennio){
    mutateReject(idempennio)
  }

  if ((isFetching && !isFetched) || isPendingAccept || isPendingReject) {
    return <Loading />; 
  }

  if (!Missolicitudesventas?.length) {
    return <NoInfo message="No hay solicitudes de ventas" />;
  }

  return (
    <table className="mx-32 max-w-full">
      <thead>
        <tr className=''>
          <th className="w-1/3 py-1 bg-gray-200 text-left pl-3">Producto</th>
          <th className="py-1 bg-gray-200">Precio </th>  
          <th className="py-1 bg-gray-200">Estado</th>
          <th className="py-1 bg-gray-200 w-20"></th>
        </tr>
      </thead>
      <tbody>
        {Missolicitudesventas?.map(compra => (
          <tr>
            <td className="py-4 bg-gray-100">
              <div className='flex items-center'>
                <span className='mt-3 ml-5'>{compra.nombre}</span>
              </div>
            </td>
            <td className="py-4 bg-gray-100">{compra.precio}</td>
            <td className="py-4 bg-gray-100">{compra.estado.replace(/_/g, ' ')}</td>
            <td className="py-4 bg-gray-100 w-1/6">
              {compra.estado === 'pendiente_cliente' && (
                <div className='flex gap-x-8'>
                <button onClick={() => accept(compra.idoferta)} >
                <img src='src/assets/accept.png' className='size-7 object-contain' alt='accept' />
              </button>
              <button onClick={() => cancel(compra.idoferta)} >
                <img src='src/assets/cancel.png' className='size-7 object-contain' alt='cancel' />
              </button>
                
              </div>
              )}
         
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
      <div className="text-center mt-20 text-base sm:text-3xl lg:text-3xl font-bold mb-20">
        Mis solicitudes de venta
      </div>
      <TablaMisCompras />
      <main className="flex-1">
        <SaveChangesButton></SaveChangesButton>
        <Outlet />
      </main>
   
    </div>
  );
}

export default function MyPawns() {
  return (
    <Layout />
  );
}
