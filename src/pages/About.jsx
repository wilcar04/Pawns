import React from 'react';
import About1 from '../assets/about1.png';

function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 font-poppins text-azulOscuro text-left">Acerca de Pawns</h2>
          <p className="text-gray-700 mb-4 font-poppins text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, recusandae
            perspiciatis quas i nciidunt alias adipisci pariatur earum iure beatae assumenda
            rerum quod. Tempora magni autem a voluptatibus neque.
          </p>
          <p className="text-gray-700 mb-4 font-poppins text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
            accusamus magni consequatur architecto, ipsum deleniti expedita doloribus
            suscipit voluptatem eius perferendis amet!.
          </p>
          <p className="text-gray-700 mb-8 font-poppins text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
            architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus
            libero nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt sed
            blanditiis quod aspernatur! Iusto?
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={About1} className="size-200 ml-20" alt="About Pawns" />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="text-3xl font-bold text-azulOscuro">0.1k</p>
          <p className="text-gray-700 font-poppins">Vendedores</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="text-3xl font-bold text-azulOscuro">8k</p>
          <p className="text-gray-700 font-poppins">Clientes</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="text-3xl font-bold text-azulOscuro">2k</p>
          <p className="text-gray-700 font-poppins">Productos</p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="font-bold font-poppins">Excelente análisis de precios</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="font-bold font-poppins">Soporte 24/h</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="font-bold font-poppins">Envíos a todo Colombia</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center flex flex-col justify-center items-center">
          <p className="font-bold font-poppins">Pago 100% Seguro</p>
        </div>

      </div>
    </div>
  );
}

export default About;
