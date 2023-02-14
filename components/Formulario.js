import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";
import SendMail from "./SendMail";

const Formulario = ({ estilos }) => {
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
              htmlFor="nombre"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Tu nombre
            </label>
            <input
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              id="nombre"
              placeholder="Juan Díaz"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-black"
              required
            />
          </div>
          <div>
            <label
              htmlFor="tel"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Teléfono
            </label>
            <input
              onChange={(e) => setTelefono(e.target.value)}
              type="tel"
              id="tel"
              placeholder="091898654"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Cuentanos sobre tu proyecto
            </label>
            <textarea
              onChange={(e) => setMsg(e.target.value)}
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-black"
              placeholder="Tengo una tienda y quiero aumentar mis ventas..."
              required
            />
          </div>
          <button type="submit" className={estilos}>
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Formulario;
