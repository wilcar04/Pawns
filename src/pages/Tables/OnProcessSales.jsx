import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Outlet } from "react-router-dom";
import { getOnTheWayOfferSells } from '../../api/queries';
import { imageUrlApi } from '../../api/axiosConfig';
import Loading from '../../components/Loading';
import { changeOfferState, shopBuysItem } from '../../api/queries';
import { useMutation } from '@tanstack/react-query';
import NoInfo from '../../components/NoInfo';


const RedStripe = () => {
  return (
    <div className="bg-rojo h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs ">Mis Compras</span>
      <button className="bg-rojo text-white py-1 px-4 text-xs">Inicio = Mis Compras</button>
    </div>
  );
};

const TablaMisCompras = () => {
  const queryClient = useQueryClient();
  const authUser = useAuthUser();

  const{data:Ventasproceso,isFetching, isFetched}=useQuery({
    queryKey:["getOnTheWayOfferSells"],
    queryFn:()=>getOnTheWayOfferSells()
  })

  const { mutate: mutateReject, isPending: isPendingReject } = useMutation({
    mutationFn: (idempennio) => changeOfferState(idempennio, 'rechazada'),
    onSuccess: () => queryClient.invalidateQueries('getOnTheWayOfferSells')
  })

  const { mutate: mutateFinished, isPending: isPendingFinished } = useMutation({
    mutationFn: (idempennio) => changeOfferState(idempennio, 'finalizada', 8),
    onSuccess: () => queryClient.invalidateQueries('getOnTheWayOfferSells')
  })

  const { mutate: mutateShopping, isPending: isPendingShopping } = useMutation({
    mutationFn: ({price, idProduct}) => shopBuysItem(authUser.id, price, idProduct),
    onSuccess: () => console.log("Éxito")
  })

  function accept(idempennio, price, idProduct){
    mutateFinished(idempennio)
    mutateShopping({price: price, idProduct: idProduct})
  }
    
  function cancel(idempennio){
    mutateReject(idempennio)
  }

  if ((isFetching && !isFetched) || isPendingFinished || isPendingReject || isPendingShopping) {
    return <Loading />; 
  }

  if (!Ventasproceso?.length) {
    return <NoInfo message="No hay ventas en proceso" />;
  }


  return (
    <table className="mx-32 max-w-full">
      <thead>
        <tr className=''>
          <th className="py-1 bg-gray-200 text-left pl-3">Producto</th>
          <th className="py-1 bg-gray-200">Categoria</th>
          <th className="py-1 bg-gray-200">Estado</th>
          <th className="py-1 bg-gray-200">precio</th>
          <th className="py-1 bg-gray-200 w-20"></th>
        </tr>
      </thead>
      <tbody>
        {Ventasproceso?.map(compra => (
          <tr>
            <td className="py-4 bg-gray-100">
              <div className='flex items-center'>
                <span className='mt-3 ml-5'>{compra.nombre}</span>
              </div>
            </td>
            <td className="py-4 bg-gray-100">{compra.categoria}</td>
            <td className="py-4 bg-gray-100">{compra.estado.replace(/_/g, ' ')}</td>
            <td className="py-4 bg-gray-100">{compra.precio}</td>
            <td className="py-4 bg-gray-100">
                <>
                  <button onClick={() => accept(compra.idoferta, compra.precio, compra.producto_idproducto)}>
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
      <div className="text-center mt-20 text-base sm:text-3xl lg:text-3xl font-bold mb-20">
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
