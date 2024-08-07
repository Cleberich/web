import React from "react";
import Link from "next/link";
import "animate.css";
import { useEffect, useState } from "react";
import Formulario from "./Formulario";

const Footer = () => {
  const [mostrar, setMostrar] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMostrar(true);
    }, 100);
  });
  return (
    <footer className="md:bg-black bg-blue-600 relative bottom-0 h-[80vh] md:h-[100vh] pt-10 ">
      {mostrar && (
        <>
          <h2 className="mx-1 md:mx-64 text-3xl md:text-[75px] font-extrabold text-white text-center md:leading-[80px] mb-12  ">
            Coordina una asesoria <br></br>
            <span className="text-white bg-black px-2 md:text-blue-600">
              sin costo
            </span>
          </h2>
          <div className=" mx-6">
            {" "}
            <Formulario
              estilos={
                "w-full text-white bg-black md:bg-blue-600 hover:bg-gray-800 hover:md:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              }
            />
          </div>
        </>
      )}
      <div className="flex justify-center gap-28 footer">
        <div className="">
          {" "}
          <img
            src="/img/logo_actitud.png"
            className="w-44 -ml-6 mt-5"
            alt="Actitud Logo"
          />
          <p className="text-white  -mt-12 font-light text-xs">
            lucia@actitud.io
          </p>
          <div className="flex justify-left mt-2"></div>
        </div>
        <div className="mt-20">
          {" "}
          <h2 className="text-white   text-md font-bold">Horarios</h2>{" "}
          <p className="text-white   mt-2 font-light text-xs">
            Lunes a viernes 08-18hs
          </p>
        </div>
        <div className="mt-20">
          {" "}
          <h2 className="text-white   text-md font-bold">Work</h2>{" "}
          <p className="text-white   mt-2 font-light text-xs">Casos de éxito</p>
        </div>
        <div className="mt-20">
          {" "}
          <h2 className="text-white   text-md font-bold">About</h2>{" "}
          <Link
            href="/nosotros"
            className="text-white   mt-2 font-light text-xs"
          >
            Sobre la empresa
          </Link>
        </div>
      </div>
      <div className="my-3">
        <hr className="mx-32 "></hr>
        <p className="text-white text-xs my-2 text-center pb-12">
          © Todos los derechos reservados 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
