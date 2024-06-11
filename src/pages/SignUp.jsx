import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mujerConTableta from '../assets/mujer_en_pagina.png';
import logo from '../assets/pawns_blanca.png';
import { useNavigate } from 'react-router-dom';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '../api/queries';
import { BsExclamationTriangle } from 'react-icons/bs';

function SignUp() {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    genre: 'masculino',
    birthdate: ''
  });

  const [error, setError] = useState('');

  const { isError, isPending, mutate: mutateSignUp } = useMutation({
    mutationFn: () =>
      signUp(
        form.name,
        form.email,
        form.password,
        form.genre,
        form.birthdate,
        '+57 320 0384548'
      ), // ! Telefono quemado
    onSuccess: () => navigate('/'),
    onError: (e) => {
      console.log(e);
      setError('Ingresa todos los campos correctamente');
    }
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      setError('');
      mutateSignUp();
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, []);

  const validateForm = () => {
    const { name, email, password, birthdate } = form;

    if (!name.trim()) {
      setError('Por favor, ingresa tu nombre completo');
      return false;
    }

    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setError('Por favor, ingresa un correo electrónico válido');
      return false;
    }

    if (!password.trim() || password.length < 4) {
      setError('Por favor, ingresa una contraseña con al menos 4 caracteres');
      return false;
    }

    if (!birthdate) {
      setError('Por favor, selecciona tu fecha de nacimiento');
      return false;
    }

    return true;
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Div for the image with logo */}
      <div
        className="w-1/2 relative"
        style={{ backgroundColor: '#5E1414' }}
      > {/* Updated background color */}
        <img
          src={logo}
          alt="Logo"
          className="absolute top-2 left-2"
          style={{ width: '180px', height: '180px' }}
        />
        <div
          className="h-full bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${mujerConTableta})`,
            backgroundSize: '65% auto'
          }}
        >
          {/* Empty if only displaying the image */}
        </div>
      </div>

      {/* Div for the registration form */}
      <div className="w-1/2 flex items-center justify-center relative">
        <Link
          to="/"
          className="absolute top-9 left-9 text-gray-500 hover:text-gray-700"
          style={{ fontSize: '20px' }}
        > {/* Adjust top and left values */}
          &larr; Regresar
        </Link>
        <div className="bg-white p-12 w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-2 text-left">
            Regístrate ahora
          </h1>
          <p className="mb-4 text-sm text-gray-400 text-left">
            ¡Regístrate y empieza a negociar!
          </p>{' '}
          {/* Additional text */}
          <hr className="border-gray-300 my-8" />
          <form>
            <div className="mb-4 text-left">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre completo:
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                onChange={handleChange}
                name="name"
                value={form.name}
              />
            </div>

            <div className="mb-4 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                onChange={handleChange}
                name="email"
                value={form.email}
              />
            </div>

            <div className="mb-4 text-left">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                onChange={handleChange}
                name="password"
                value={form.password}
              />
            </div>

            <div className="mb-4 text-left">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Género:
              </label>
              <select
                id="gender"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                onChange={handleChange}
                name="genre"
                value={form.genre}
              >
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="mb-6 text-left">
              <label
                htmlFor="birthdate"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha de nacimiento:
              </label>
              <input
                type="date"
                id="birthdate"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                onChange={handleChange}
                name="birthdate"
                value={form.birthdate}
              />
            </div>

            {error && (
              <div className="flex content-center">
                <BsExclamationTriangle color="red" className="size-5 mr-4" />
                <span className="text-red-700">{error}</span>
              </div>
            )}

            <button
              className={
                'w-full py-3 px-4 bg-5E1414 text-white rounded-md hover:bg-red-700 focus:outline-none ' +
                (isPending
                  ? 'opacity-30'
                  : 'hover:shadow hover:shadow-secondColor')
              }
              type="submit"
              style={{ backgroundColor: '#5E1414' }} // Updated button background color
              onClick={handleSubmit}
              disabled={isPending}
            >
              Continuar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
