
import { Link, useNavigate } from 'react-router-dom';

function PawnProducts() {
  const navigate = useNavigate();
  };

  return (
    <div className="max-w-6xl px-4 py-8 mx-auto">
      <h2 className="mb-4 text-3xl font-bold text-center text-black font-poppins">¡Solicitud enviada!</h2>
      <div className="flex justify-center">
        <div className="p-4 bg-gray-300 rounded-md">
          <p className="text-center text-gray-800">
            Tú producto va a ser analizado por expertos y en un plazo de 24 horas se te dará un precio final, el cual puedes aceptar o rechazar.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="p-4 bg-gray-100 rounded-md">
          <p className="text-center text-gray-700">
            Recuerda que tendrás un plazo de 2 meses para recoger tu producto por el valor del monto final y una tasa de interés del 5%, en el caso que no quieras recuperar tu producto será vendido en nuestra página.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-center text-black">Nuestras Sedes</h3>
        <p className="mb-6 text-center text-gray-700 font-poppins">
          El destinatario siempre será <strong>PAWNS CORP.</strong> no te confundas!
        </p>
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2">
          <div>
            <p className="text-lg font-bold">Medellín, Antioquia</p>
            <p>Av. El Poblado #5A-113, El Poblado Oficina 103</p>
            <p>+57 000 000 00 00</p>
            <p>pawnsmedellin@example.com</p>
          </div>
          <div>
            <p className="text-lg font-bold">Bogotá, Bogotá DC</p>
            <p>Flor Morado, Cra. 7 #116-50, Usaquén Oficina 201</p>
            <p>+57 000 000 00 00</p>
            <p>pawnsbogota@example.com</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Link
          to="/"
          className="text-blue-500 hover:underline"
        >
          &laquo; Volver
        </Link>
      </div>
    </div>
  );
}

export default PawnProducts;

