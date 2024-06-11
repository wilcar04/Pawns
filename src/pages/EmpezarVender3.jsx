import React from 'react';
import { useNavigate } from 'react-router-dom';

function SellProducts() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/landing');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 font-poppins text-black text-center">Vende tus Productos</h2>
      <div className="flex justify-center">
        <div className="bg-gray-300 p-4 rounded-md">
          <p className="text-center text-gray-800">
            Para terminar el proceso exitosamente, deberás de enviar tu producto a nuestra sede en un lapso de 8 días. Si no llega en ese lapso tu solicitud será rechazada.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-black text-center">Nuestras Sedes</h3>
        <p className="text-center text-gray-700 font-poppins mb-6">
          El destinatario siempre será <strong>PAWNS CORP.</strong> no te confundas!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          <div>
            <p className="font-bold text-lg">Medellín, Antioquia</p>
            <p>Av. El Poblado #5A-113, El Poblado Oficina 103</p>
            <p>+57 000 000 00 00</p>
            <p>pawnsmedellin@example.com</p>
          </div>
          <div>
            <p className="font-bold text-lg">Bogotá, Bogotá DC</p>
            <p>Flor Morado, Cra. 7 #116-50, Usaquén Oficina 201</p>
            <p>+57 000 000 00 00</p>
            <p>pawnsbogota@example.com</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button
          onClick={handleBackClick}
          className="text-blue-500 hover:underline"
        >
          &laquo; ANTERIOR
        </button>
      </div>
    </div>
  );
}

export default SellProducts;

