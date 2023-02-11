import React from "react";
import Modal from "./Modal";
import { RxDoubleArrowDown } from "react-icons/rx";
import { useEffect, useState } from "react";
import Image from "next/image";

const Portada = () => {
  const [efecto, setEfecto] = useState(false);
  return (
    <>
      <div className="-mt-12 z-10">
        <div
          onMouseEnter={() => setEfecto(true)}
          className="portadaDesktop bg-[#101010] h-screen"
        >
          {/* <video
            className="w-full h-screen object-cover "
            playsInline
            loop
            muted
            autoPlay
            alt="All the devices"
            src="/img/fondodesktop.mp4"
          /> */}
          <video
            className="w-full h-screen object-cover "
            playsInline
            loop
            muted
            autoPlay
            alt="All the devices"
            src="/img/video.mp4"
          />
        </div>
        <div className="portadaCelular w-full h-[650px] bg-[#000]">
          {/* <video
            className="w-full h-[650px]"
            playsInline
            loop
            muted
            autoPlay
            alt="All the devices"
            src="/img/fondo.mp4"
          /> */}
          <video
            className="w-full h-[650px]"
            playsInline
            loop
            muted
            autoPlay
            alt="All the devices"
            src="/img/mobile.mp4"
          />
        </div>

        <div className="relative bg-transparent mt-[300px] cajaTitulo  ">
          {" "}
          <div class="contenedor">
            <ul className="textoAnimado">
              <br></br>
              <li className="text-center text-[90px] text-white font-[900]">
                Tenemos la{" "}
                <span className="font-extrabold rounded-lg  text-[#1C4ED8]  px-2 py-1 mb-5 bg-7">
                  actitud
                </span>{" "}
                para cambiar el destino de tu empresa.
              </li>

              <br></br>
              <br></br>
              <br></br>
              <br className="md:hidden"></br>
              <br className="md:hidden"></br>
              <br className="md:hidden"></br>

              <li className="text-center text-[90px] text-white font-[900]   ">
                <span className="font-extrabold rounded-lg  text-[#1C4ED8]  px-2 py-1 mb-5 bg-7">
                  Creamos {""}
                </span>{" "}
                crecimiento comercial.
              </li>
              <br></br>
              <br></br>
              <br></br>
              <br className="md:hidden"></br>
              <br className="md:hidden"></br>
              <br className="md:hidden"></br>
              <br className="md:hidden"></br>
              <br className="md:hidden"></br>
              <li className="text-center text-[90px] text-white font-[900]   ">
                Un objetivo solo se logra con un{" "}
                <span className="font-extrabold rounded-lg  text-[#1C4ED8]  px-2 py-1 mb-5 bg-7">
                  plan{" "}
                </span>
                <br className="md:hidden"></br>
                ¿Estás listo?
              </li>
            </ul>
          </div>
          {/* <div className="flex gap-2 justify-center mt-5 md:hidden">
            {" "}
            <button
              type="button"
              className="text-white  hover:bg-white hover:text-black focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 botonSobreNosotros"
            >
              Sobre nosotros
            </button>
            <Modal />
          </div> */}
        </div>
      </div>
      <div className="mt-[380px] relative wave">
        {/* <Image
          src="/img/wave.svg"
          width={1200}
          height={100}
          alt="wave"
          className="w-full -mt-12"
        /> */}
      </div>

      <div className="flex justify-center">
        <RxDoubleArrowDown className="text-[#fff] -mt-[150px] relative text-5xl shake-vertical " />
      </div>
    </>
  );
};

export default Portada;
