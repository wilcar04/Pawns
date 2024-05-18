import React, { useState } from 'react';
import { TbCloudUpload } from "react-icons/tb";

export default function Pawn_request() {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    clientInfo: '',
    pawnDuration: '',
    pawnValue: '',
    category: '',
  });
  const [images, setImages] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (images.length < 3) {
      setErrorMessage('Debes subir al menos 3 imágenes.');
      return;
    }
    console.log('Datos del formulario:', formData);
    console.log('Imágenes:', images);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8 mb-8 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 font-poppins text-azulOscuro">Solicitud de Empeño</h1>
      {isSubmitted ? (
        <div className="text-center mb-4">
          <p className="text-green-600 font-semibold">Solicitud de empeño enviada</p>
          <p className="text-gray-700">
            Información ingresada:
            <br />
            Nombre del artículo: {formData.itemName}
            <br />
            Descripción: {formData.description}
            <br />
            Categoría: {formData.category}
            <br />
            Valor del empeño: {formData.pawnValue}
          </p>
          <div>
            {images.length > 0 && (
              <div className="mt-4">
                <p className="text-gray-700 font-semibold">Imágenes adjuntadas:</p>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {images.map((image, index) => (
                    <div key={index} className="border border-gray-300 p-2 rounded-md">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Imagen ${index + 1}`}
                        className="w-full h-auto object-cover rounded-md"
                      />
                      <p className="text-gray-600 text-sm mt-1">{image.name}</p>
                    </div>
                  ))}
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
              <option value="Joyería">Joyería</option>
              <option value="Gaming">Gaming</option>
              <option value="Deportes">Deportes</option>
              <option value="Juguetes">Juguetes</option>
              <option value="Muebles">Muebles</option>
              <option value="Otro">Otro</option>
              <option value="Libros">Libros</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 font-poppins">Valor del empeño:</label>
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
          {images.length > 0 && (
            <div className="mt-4">
              <p className="text-gray-700 font-semibold">Archivos seleccionados:</p>
              <ul className="list-disc list-inside">
                {images.map((image, index) => (
                  <li key={index} className="text-gray-600 text-sm">{image.name}</li>
                ))}
              </ul>
            </div>
          )}
          {errorMessage && <p className="text-red-600 text-sm mt-2">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-naranja text-white font-semibold rounded-md hover:bg-rojo"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}






