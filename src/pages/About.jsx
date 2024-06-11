import React from 'react';
import About1 from '../assets/about1.png';

function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 font-poppins text-azulOscuro text-left">Acerca de PAWNS</h2>
          <p className="text-gray-700 mb-4 font-poppins text-left">
            En PAWNS, nos dedicamos a ofrecer soluciones financieras rápidas y seguras. Ya sea que necesites un préstamo inmediato o desees vender un artículo valioso, estamos aquí para ayudarte con un proceso transparente y confiable.
          </p>
          <p className="text-gray-700 mb-4 font-poppins text-left">
            Contamos con un equipo de expertos en tasación que aseguran que recibas el mejor valor por tus pertenencias. Nuestra misión es brindar un servicio que te permita obtener liquidez sin complicaciones y con la mayor seguridad.
          </p>
          <p className="text-gray-700 mb-8 font-poppins text-left">
            La confianza y la satisfacción del cliente son nuestras principales prioridades. Nos esforzamos por mantener una relación de largo plazo con nuestros clientes a través de un trato justo y honesto.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={About1} className="size-200 ml-20" alt="Acerca de Empeños XYZ" />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="text-3xl font-bold text-azulOscuro">0.5k</p>
          <p className="text-gray-700 font-poppins">Clientes Satisfechos</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="text-3xl font-bold text-azulOscuro">1.2k</p>
          <p className="text-gray-700 font-poppins">Artículos Empeñados</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="text-3xl font-bold text-azulOscuro">750</p>
          <p className="text-gray-700 font-poppins">Artículos Vendidos</p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="font-bold font-poppins">Tasaciones Justas</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="font-bold font-poppins">Soporte 24/7</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="font-bold font-poppins">Ubicaciones Convenientes</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="font-bold font-poppins">Transacciones Seguras</p>
        </div>
      </div>
    </div>
  );
}

export default About;

