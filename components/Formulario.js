import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";
import SendMail from "./SendMail";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [msg, setMsg] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const datos = { nombre, telefono, msg };
      const da = collection(db, "prospectos");
      await addDoc(da, datos);
      SendMail(nombre, telefono, msg);
      setEnviado(true);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setEnviado(false);
      }, [2500]);
    }
  };

  return (
    <div className="w-full md:w-[40%]  mx-auto rounded-xl  ">
      {enviado ? (
        <div className="block justify-center bg-transparent">
          <img
            src="/img/carta.gif"
            className="bg-transparent w-44 h-44 mx-auto"
          />
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              for="text"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Tu nombre
            </label>
            <input
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              name="password"
              id="nombre"
              placeholder="Juan Díaz"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-black"
              required
            />
          </div>
          <div>
            <label
              for="tel"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Teléfono
            </label>
            <input
              onChange={(e) => setTelefono(e.target.value)}
              type="tel"
              name="password"
              id="tel"
              placeholder="091898654"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-black"
              required
            />
          </div>

          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Cuentanos sobre tu proyecto
            </label>
            <textarea
              onChange={(e) => setMsg(e.target.value)}
              type="text"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-black"
              placeholder="Tengo una tienda y quiero aumentar mis ventas..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Formulario;
