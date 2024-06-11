import React, { useState } from 'react';
import { TbCloudUpload } from "react-icons/tb";
import { useMutation } from '@tanstack/react-query';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useNavigate } from 'react-router-dom';
import { createOfferSell } from '../api/queries';
import { Link } from 'react-router-dom';

export default function CreateSellRequest() {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    clientInfo: '',
    pawnDuration: '',
    pawnValue: '',
    category: '',
  });
  const [image, setImage] = useState(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const auth = useAuthUser();
  const navigate = useNavigate();

  const { isError, isPending, mutate: mutateSendRequest } = useMutation({
    mutationFn: () => createOfferSell(auth.id, formData.itemName, formData.description, formData.category, formData.pawnValue, image),
    onSuccess: () => navigate('/requestSent')
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file instanceof File) {
      setImage(file);
    } else {
      console.error('El archivo seleccionado no es válido');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!formData.itemName || !formData.description || !formData.category || !formData.pawnValue || !image) {
      setErrorMessage('Por favor completa todos los campos y adjunta una imagen.');
      return;
    }

    // Validación de tipos de datos
    if (typeof formData.itemName !== 'string' || typeof formData.description !== 'string') {
      setErrorMessage('El nombre del artículo y la descripción deben ser cadenas de texto.');
      return;
    }

    if (isNaN(formData.pawnValue) || parseFloat(formData.pawnValue) <= 0) {
      setErrorMessage('El valor del empeño debe ser un número mayor que cero.');
      return;
    }

    // Si pasa todas las validaciones, enviar la solicitud
    mutateSendRequest();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8 mb-8 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 font-poppins text-azulOscuro">Solicitud de Venta</h1>
      {isSubmitted ? (
        <div className="text-center mb-4">
          <p className="text-green-600 font-semibold">Solicitud de venta enviada</p>
          <p className="text-gray-700">
            Información ingresada:
            <br />
            Nombre del artículo: {formData.itemName}
            <br />
            Descripción: {formData.description}
            <br />
            Categoría: {formData.category}
            <br />
            Valor de venta: {formData.pawnValue}
          </p>
          <div>
            {!!image && (
              <div className="mt-4">
                <p className="text-gray-700 font-semibold">Imágenes adjuntadas:</p>
                  <div className="border border-gray-300 p-2 rounded-md">
                    <div className="flex justify-center">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Imagen`}
                        className="w-32 h-auto object-cover rounded-md"
                      />
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{image.name}</p>
                  </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 font-poppins">Nombre del artículo:</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 font-poppins">Descripción:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 font-poppins">Categoría:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Selecciona una categoría</option>
              <option value="Electrónica">Electrónica</option>
              <option value="Moda">Moda</option>
              <option value="Hogar">Hogar</option>
              <option value="Salud">Salud</option>
              <option value="Entretenimiento">Entretenimiento</option>
              <option value="Deportes">Deportes</option>
              <option value="Transporte">Transporte</option>
              <option value="Mascotas">Mascotas</option>
              <option value="Arte">Arte</option>
              <option value="Literatura">Literatura</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 font-poppins">Valor de venta:</label>
            <input
              type="number"
              name="pawnValue"
              value={formData.pawnValue}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="relative mt-8 block w-full p-2 border border-dashed border-gray-300 rounded-md text-center cursor-pointer">
            <input
              type="file"
              multiple
              onChange={handleImageChange}
              required
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center">
              <TbCloudUpload className="text-4xl text-gray-700" />
              <span className="font-poppins text-gray-700">Arrastra tus archivos aquí</span>
              <button type="button" className="mt-2 bg-azulOscuro text-white font-poppins py-1 px-3 rounded-md">
                Selecciona un archivo
              </button>
            </div>
          </div>
          {!!image && (
            <div className="mt-4">
              <p className="text-gray-700 font-semibold">Archivos seleccionados:</p>
                <div className="flex justify-center">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Imagen`}
                    className="w-32 h-auto object-cover rounded-md my-2"
                  />
                </div>
                <p className="text-gray-600 text-sm mt-1">{image.name}</p>
            </div>
          )}
          {errorMessage && <p className="text-red-600 text-sm mt-2">{errorMessage}</p>}
          <button
          disabled={isPending}
            type="submit"
            className="w-full py-2 px-4 bg-firstColor text-white font-semibold rounded-md hover:bg-rojo"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}
