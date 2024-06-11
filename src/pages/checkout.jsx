import Box from "../components/Loading_box";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCarStorageItem, setCarStorageItem, removeCarStorageItem } from "../components/carrostorage";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { payPawn, clientBuysItem } from "../api/queries";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { imageUrlApi } from "../api/axiosConfig";
import Loading from "../components/Loading"

const handleClick = () => {
  window.location.href = "/";
};

function requestCar(bol) {
  return bol;
}

export default function Checkout() {

  const location = useLocation();
  const navigate = useNavigate();
  const authUser = useAuthUser();

  const data = location.state.data
  const isPawn = location.state.type === "pawn"

    // Cliente paga para recuperar producto
  const { mutate: mutatePayPawn, isPending: isPendingPawn } = useMutation({
      mutationFn: () => payPawn(data.idempennio),
      onSuccess: () => navigate('/')
  })

  // Cliente compra
  const { mutate: mutateClientBuys, isPending: isPendingBuy } = useMutation({
    mutationFn: () => clientBuysItem(authUser.id, data.precio, data.producto_idproducto),
    onSuccess: () => navigate('/')
  })

  const isPending = isPendingBuy || isPendingPawn

  const pays = () => {
    if (validateForm()) {
      setpayed(false);
    }
    if (isPawn) {
      mutatePayPawn();
    } else {
      mutateClientBuys();
    }
  };

  const [Productlist, setProductlist] = useState([
    {
      imagen: "https://media.revistagq.com/photos/61bb41b5d398f278a07e2bd8/3:2/w_1335,h_890,c_limit/Longines-VHP-GMT-2018.jpeg",
      categoria: "Moda",
      nombre: "Reloj",
      precio: 20000,
      descripcion: "Lorem ipsum dolor sit amet",
    },
  ]);

  const [deliveryMethod, setDeliveryMethod] = useState("free"); // Default to free delivery

  const calculateSubTotal = () => {
    let subTotal = 0;
    Productlist.forEach((item) => {
      subTotal += parseInt(item.precio);
    });
    return subTotal;
  };

  const calculateIva = () => {
    const subTotal = calculateSubTotal();
    const iva = subTotal * 0.19;
    return iva;
  };

  const calculateOrderTotal = () => {
    const subTotal = calculateSubTotal();
    const iva = calculateIva();
    let envio = 0;

    if (deliveryMethod === "standard") {
      envio = 12000; // Standard delivery cost
    }

    const orderTotal = subTotal + iva + envio;
    return orderTotal;
  };

  const [NetwordPlayed, setLoading] = useState(false);
  const [payed, setpayed] = useState(true);

  const validateForm = () => {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const direccion = document.getElementById("Dir").value;
    const municipio = document.getElementById("municipio").value;
    const codP = document.getElementById("codP").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const NumeroIdenteficacion = document.getElementById("NumeroIdentificacion").value;
    const terminos = document.getElementById("terminos").checked;
    const paymentMethod = document.querySelector('input[name="payment"]:checked');

    if (!nombre || typeof nombre !== 'string') {
      alert("Por favor, ingrese un nombre válido.");
      return false;
    }
    if (!NumeroIdenteficacion || isNaN(NumeroIdenteficacion)) {
      alert("Por favor, ingrese un número de identificacion válido.");
      return false;
    }
    if (!apellido || typeof apellido !== 'string') {
      alert("Por favor, ingrese un apellido válido.");
      return false;
    }
    if (!direccion || typeof direccion !== 'string') {
      alert("Por favor, ingrese una dirección válida.");
      return false;
    }
    if (!municipio || typeof municipio !== 'string') {
      alert("Por favor, ingrese un municipio/ciudad válido.");
      return false;
    }
    if (!codP || isNaN(codP)) {
      alert("Por favor, ingrese un código postal válido.");
      return false;
    }
    if (!telefono || isNaN(telefono)) {
      alert("Por favor, ingrese un número de teléfono válido.");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }
    if (!terminos) {
      alert("Por favor, acepte los términos y condiciones.");
      return false;
    }
    if (!deliveryMethod) {
      alert("Por favor, seleccione un método de envío.");
      return false;
    }
    if (!paymentMethod) {
      alert("Por favor, seleccione un método de pago.");
      return false;
    }

    return true;
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000); // Simulando una carga de datos
  }, []);

  if (isPending){
    return <Loading />
  }

  return NetwordPlayed ? (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-8 bg-gray-100">
        {payed ? (
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-2/3 p-4 bg-white rounded shadow-lg">
              <h1 className="text-2xl font-bold mb-4">Checkout</h1>
              <h2 className="text-xl font-semibold mb-2">Detalles de la facturación</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Nombres <span className="text-red-500">*</span></label>
                  <input
                    required
                    id="nombre"
                    className="w-full p-2 border rounded"
                    placeholder="Ingrese sus nombres"
                    defaultValue="John"
                  />
                </div>
                <div>
                  <label className="font-medium">Apellidos <span className="text-red-500">*</span></label>
                  <input
                    required
                    id="apellido"
                    className="w-full p-2 border rounded"
                    placeholder="Ingrese sus apellidos"
                    defaultValue="Doe"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="font-medium">Departamento <span className="text-red-500">*</span></label>
                <select className="w-full p-2 border rounded" name="departamentos_colombia">
                  <option value="Bogotá">Bogotá</option>
                  <option value="Antioquia">Antioquia</option>
                  <option value="Valle del Cauca">Valle del Cauca</option>
                  <option value="Atlántico">Atlántico</option>
                  <option value="Cundinamarca">Cundinamarca</option>
                  <option value="Santander">Santander</option>
                  <option value="Nariño">Nariño</option>
                  <option value="Caldas">Caldas</option>
                  <option value="Tolima">Tolima</option>
                  <option value="Meta">Meta</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="font-medium">Dirección <span className="text-red-500">*</span></label>
                <input
                  id="Dir"
                  className="w-full p-2 border rounded"
                  placeholder="Calle, Avenida, etc."
                  defaultValue="Calle Principal 123"
                />
                <input
                  id="Dir_ext"
                  className="w-full mt-2 p-2 border rounded"
                  placeholder="Apto, número de casa, edificio, etc."
                  defaultValue="Apto 101"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mt-4">
                  <label className="font-medium">Municipio/Ciudad <span className="text-red-500">*</span></label>
                  <input
                    id="municipio"
                    className="w-full p-2 border rounded"
                    placeholder="Ingrese su municipio/ciudad"
                    defaultValue="Medellín"
                  />
                </div>

                <div className="mt-4">
                  <label className="font-medium">Código Postal</label>
                  <input
                    id="codP"
                    type="number"
                    className="w-full p-2 border rounded"
                    placeholder="Ingrese su código postal"
                    defaultValue="050001"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="font-medium">Número de teléfono</label>
                <input
                  id="telefono"
                  className="w-full p-2 border rounded"
                  placeholder="Ingrese su número de teléfono"
                  defaultValue="3001234567"
                />
              </div>

              <div className="mt-4">
                <label className="font-medium">Correo electrónico</label>
                <input
                  id="email"
                  className="w-full p-2 border rounded"
                  placeholder="Ingrese su correo electrónico"
                  defaultValue="example@example.com"
                />
              </div>

              <div className="mt-4 flex items-center">
                <input id="terminos" type="checkbox" defaultChecked />
                <label className="ml-2 font-medium">Acepto Términos y Condiciones <span className="text-red-500">*</span></label>
              </div>

              <div className="mt-4">
                <label className="font-medium text-lg">Información Adicional</label>
                <textarea
                  id="notes"
                  className="w-full p-2 border rounded"
                  placeholder="Notas adicionales"
                />
              </div>
            </div>

            {/* Panel derecho */}
            <div className="w-full lg:w-1/3 p-4 bg-white rounded shadow-lg">

              {/* Método de Entrega */}
              <div className="mb-4 p-4 bg-white rounded border">
                <h2 className="text-xl font-semibold mb-2">Método de Entrega</h2>
                <div className="flex flex-col">
                  <label className="font-medium">
                    <input
                      type="radio"
                      name="delivery"
                      value="free"
                      className="mr-2"
                      onChange={() => setDeliveryMethod("free")}
                      checked={deliveryMethod === "free"}
                    />
                    Envío Gratis
                  </label>
                  <p className="text-sm text-gray-600">Entrega entre 5 a 30 días hábiles después de la fecha de compra</p>
                  <label className="font-medium mt-2">
                    <input
                      type="radio"
                      name="delivery"
                      value="standard"
                      className="mr-2"
                      onChange={() => setDeliveryMethod("standard")}
                      checked={deliveryMethod === "standard"}
                    />
                    Envío Estándar - $12,000
                  </label>
                  <p className="text-sm text-gray-600">Entrega entre 2 a 5 días hábiles después de la fecha de compra</p>
                </div>
              </div>


              {/* Método de Pago */}
              <div className="mb-4 p-4 bg-white rounded border">
                <h2 className="text-xl font-semibold mb-2">Método de Pago</h2>
                <div className="flex flex-col">
                  <label className="font-medium">
                    <input type="radio" name="payment" value="cash" className="mr-2" defaultChecked/>
                    PSE
                  </label>
                  <select className="w-full p-2 mt-2 border rounded">
                    <option value="BANCOLOMBIA">BANCOLOMBIA</option>
                  </select>
                  <input
                    type="text"
                    className="w-full p-2 mt-2 border rounded"
                    placeholder="Número de identificación"
                    id="NumeroIdentificacion"
                    defaultValue="1234567890"
                  />
                </div>
              </div>


              {/* Detalles de los productos */}
              <div className="mb-4 p-4 bg-white rounded border border-gray-500">
                <h2 className="text-xl font-semibold mb-2">Detalle del Producto</h2>

                  <div className="flex items-center mb-4">
                    <img src={`${imageUrlApi}/${data.imagen}`} alt={data.nombre} className="w-16 h-16 object-cover rounded mr-4" />
                    <div className="flex justify-between w-full">
                      <span className="font-medium">{data.nombre}</span>
                      <span>${data.precio}</span>
                    </div>
                  </div>

              </div>

              {/* Tu Compra */}
              <div className="mb-4 p-4 bg-white rounded border border-gray-500">
                <h2 className="text-xl font-semibold mb-2">Tu Compra</h2>
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>{calculateSubTotal()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span>{deliveryMethod === "standard" ? "12000" : "0.00"}</span>
                </div>
                <div className="flex justify-between">
                  <span>IVA</span>
                  <span>{calculateIva()}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>ORDEN TOTAL</span>
                  <span>{calculateOrderTotal()}</span>
                </div>
                <button
                disabled={isPending}
                  onClick={pays}
                  className="w-full mt-4 p-2 bg-blue-600 text-white rounded"
                >
                  PAGAR
                </button>
              </div>
            </div>


          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Pago Realizado</h2>
            <button
              onClick={handleClick}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Volver a la tienda
            </button>
          </div>
        )}
      </main>
    </div>
  ) : (
    <Box />
  );
}
