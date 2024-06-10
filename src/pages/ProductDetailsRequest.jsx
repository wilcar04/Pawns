import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom';
import { getProducts } from '../utils/localStorageUtils';
import './ProductDetails.css';
import NoInfo from '../components/NoInfo';
import Loading from '../components/Loading';

const ProductDetailsRequest = () => {
  // const [product, setProduct] = useState({
    //   imagen: "https://media.revistagq.com/photos/61bb41b5d398f278a07e2bd8/3:2/w_1335,h_890,c_limit/Longines-VHP-GMT-2018.jpeg",
    //   categoria: "Moda",
  //   nombre: "Reloj",
  //   precio: 200,
  //   descripcion: 'Lorem ipsum dolor sit amet'
  //   });

  // ! De location necesito un objeto así {product: {}, id: 1 } -> id de la oferta

  const { id } = useParams();

  const location = useLocation()

  const product = location.state.product

  const [price, setPrice] = useState(product.precio)

  const navigate = useNavigate();

  const { data, mutate: mutateReject, isPending: isPendingReject } = useMutation({
      mutationFn: () => changeOfferState(location.state.id, 'rechazada'),
      onSuccess: () => navigate('..')
  })

  // ! Aquí el mutate que falta de contra ofertar

  function handleAccept() {

  }

  function handleReject() {
    mutateReject();
  }

  if (isPendingReject){
    return <Loading />
  }


  return (
    <div className="flex flex-col items-center py-8">
      <h2 className=' font-medium text-2xl text-gray-500'>Gestionar solicitud de </h2>
      <div className="flex gap-x-16 w-full pl-60 pr-48 my-10">
        <div className="w-2/5">
          <img className=" w-full h-auto" src={product.imagen} alt={product.nombre} />
        </div>
        <div className="flex flex-col pl-5 pr-20 pt-5 text-left flex-1">
          <div className="border-b border-b-gray-200 pb-2 mb-2">
            <h2 className=" font-semibold text-2xl">{product.nombre}</h2>
            <p className='mt-1 text-base font-light text-gray-500'>Categoría: {product.categoria}</p>
          </div>

          <p className='mt-8 pb-8 font-medium text-3xl border-b border-b-gray-200'>$ {product.precio}</p>

          <label className='text-gray-500 mt-5'>Precio a proponer</label>
          <input
            type="number"
            className='text-gray-500 rounded border border-gray-300 px-3 py-1 my-2'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <div className="flex items-center gap-x-5">
            <button onClick={handleAccept} className='mt-7 rounded-full bg-firstColor text-white hover:opacity-80 py-1 px-6 self-center'>
              Aceptar producto
            </button>
            <button onClick={handleReject} className='mt-7 rounded-full bg-firstColor text-white hover:opacity-80 py-1 px-6 self-center'>
              Rechazar producto
            </button>
          </div>

          <div className='mt-8 border border-gray-200 p-3 rounded'>
            <h4 className='pb-2 font-semibold text-lg w-full border-b border-b-gray-200'>Descripción</h4>
            <p className='mt-4 text-gray-700'>{product.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsRequest;
