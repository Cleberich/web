import React from "react";

const Formulario = () => {
  return (
    <div className="w-full md:w-[40%]  mx-auto rounded-xl  ">
      <form className="space-y-6" action="#">
        <div>
          <label
            for="text"
            className="block mb-2 text-sm font-medium  text-white"
          >
            Tu nombre
          </label>
          <input
            type="text"
            name="password"
            id="nombre"
            placeholder="Juan Díaz"
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-white"
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
            type="tel"
            name="password"
            id="tel"
            placeholder="091898654"
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-white"
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
            type="text"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-white"
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
    </div>
  );
};

export default Formulario;
