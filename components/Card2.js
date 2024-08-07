import { useState } from "react";
import Link from "next/link";

const servicio2 = () => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <>
      <div className="max-w-sm p-6 bg-[#121212] shadow-xl rounded-lg w-[350px] h-[250px] md:card">
        <a href="#">
          <div className="h-[4rem]">
            {" "}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Desarrollo de marca
            </h5>
          </div>
        </a>
        <p className="mb-3 font-normal text-gray-100 formatearTexto">
          Desarrollamos una identidad visual que acompañe los valores, el sentir
          y la propuesta que tu producto tiene para comunicar al mercado.
          Creamos conceptos y te ayudamos en todo el proceso de definir tu
          marca.
        </p>
        <button
          onClick={() => setMostrar(true)}
          className="flex text-white bg-[#1C4ED8]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          type="button"
        >
          Leer más{" "}
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1 mt-[2px]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className={
          mostrar
            ? "fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full scale-in-center"
            : "hidden"
        }
      >
        <div className="relative w-full mx-auto mt-[10%] h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Desarrollo de marca
              </h3>
              <button
                type="button"
                onClick={() => setMostrar(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Desarrollamos una identidad visual que acompañe los valores, el
                sentir y la propuesta que tu producto tiene para comunicar al
                mercado. Creamos conceptos y te ayudamos en todo el proceso de
                definir tu marca.
              </p>
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <Link
                href="/contacto"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default servicio2;
