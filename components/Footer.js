import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import "animate.css";
import { useEffect, useState } from "react";
import Formulario from "./Formulario";

const Footer = () => {
  const [mostrar, setMostrar] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMostrar(true);
    }, 12000);
  });
  return (
    <footer className="md:bg-black bg-blue-600 relative bottom-0 h-[100vh] pt-10 ">
      {mostrar && (
        <>
          <h2 className="mx-1 md:mx-64 text-3xl md:text-[75px] font-extrabold text-white text-center md:leading-[80px] mb-12 animate__animated animate__backInRight ">
            Coordina una asesoria <br></br>
            <span className="text-white bg-black px-2 md:text-blue-600">
              sin costo
            </span>
          </h2>
          <div className=" mx-6">
            {" "}
            <Formulario />
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
            contacto@actitud.com
          </p>
          <p className="text-white  mt-2 font-light text-xs">+598 92 997 991</p>
          <div className="flex justify-left mt-2">
            <CiLinkedin className="text-white h-8 w-8" />
            <AiOutlineInstagram className="text-white h-8 w-8" />
          </div>
        </div>
        <div className="mt-20">
          {" "}
          <h2 className="text-white   text-md font-bold">Horarios</h2>{" "}
          <p className="text-white   mt-2 font-light text-xs">
            Lunes a viernes 08-18hs
          </p>
          <p className="text-white   mt-2 font-light text-xs">
            Sábados 08-13hs
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
          <p className="text-white   mt-2 font-light text-xs">
            Sobre la empresa
          </p>
        </div>
      </div>
      <div className="my-3">
        <hr className="mx-32 "></hr>
        <p className="text-white text-xs my-2 text-center">
          © Todos los derechos reservados 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
