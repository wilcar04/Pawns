import React, { useState, useEffect } from 'react';
import hombreEnCarrito from '../assets/hombre_en_carrito.png'; // Asegúrate de que la ruta es correcta
import logo from '../assets/pawns_blanca.png'; // Importa el logo de tu carpeta assets
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useNavigate } from 'react-router-dom';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { BsExclamationTriangle } from 'react-icons/bs';
import { logIn } from '../api/queries';
 
function LoginForm() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  }

  const navigate = useNavigate();
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();

  const { isError, isPending, mutate: checkLogIn } = useMutation({
    mutationFn: () => logIn(form.email, form.password),
    onSuccess: (data) => handleSuccess(data),
    onError: (e) => console.log(e)
  });

  useEffect(() => {
    if (isAuthenticated){
      navigate('/');
    }
  }, []);

  function handleSuccess(data) {
    signIn({
      auth: {
        token: data.token,
        type: 'Bearer'
      },
      userState: {
        id: data.data.idusuario,
        name: data.data.nombre,
        email: data.data.correo_electronico,
        type: data.data.tipo
      }
    });

    navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkLogIn();
  };

  return (
    <div className="flex min-h-screen bg-white"> {/* Fondo general blanco */}
      {/* Div for the image and logo */}
      <div className="w-1/2 relative" style={{ backgroundColor: "#AD8786" }}>
        <img src={logo} alt="Logo" className="absolute top-2 left-2" style={{ width: '180px', height: '180px' }} />
        <div className="h-full bg-no-repeat bg-center" style={{ backgroundImage: `url(${hombreEnCarrito})`, backgroundSize: "65% auto" }}>
          {/* Empty if only displaying the image */}
        </div>
      </div>

      {/* Div for the login form */}
      <div className="w-1/2 flex items-center justify-center">
 
        <div className="bg-white px-16 py-10 w-full max-w-2xl flex flex-col justify-center items-center"> {/* Increased max-width of the form container */}

        <Link
          to="/"
          className="absolute top-2 right-2 mt-4 mr-8 text-gray-500 hover:text-gray-700"
          style={{ fontSize: '20px' }}
        > {/* Adjust top and left values */}
          &larr; Regresar
        </Link>

          <div className="text-3xl font-bold mb-6 text-left">Bienvenido/a</div>
          
          <hr className="border-gray-300 my-11" />
          <form className="w-full">
            <div className="mb-5 w-full text-left">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-5 text-sm border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm rounded-sm"
                onChange={handleChange}
                name="email"
                value={form.email}
              />
            </div>
            <div className="mb-6 w-full text-left">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-5 text-sm border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm rounded-sm"
                onChange={handleChange}
                name="password"
                value={form.password}
              />
            </div>
            <div className="mb-8 w-full text-center">
              { isError && 
                <div className='flex content-center'>
                  <BsExclamationTriangle color='red' className='size-5 mr-4'/>
                  <span className='text-red-700'>Usuario o contraseña incorrectos</span>
                </div>
              }

              <button
                className={"mt-4 text-white font-bold py-5 px-4 rounded focus:outline-none focus:shadow-outline w-full " + (isPending ? "opacity-30" : "hover:shadow hover:shadow-secondColor")}
                type="submit"
                style={{ backgroundColor: "#AD8786" }}
                disabled={isPending}
                onClick={handleSubmit}
              >
                Ingresar
              </button>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-700">¿No estás registrado? </span>
              <Link to="/signup" className="inline-block align-baseline font-medium text-sm text-yellow-600 ">
                  Regístrate ahora
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
