import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Nav from "../components/Nav";
import Portada from "../components/Portada";
import { useState } from "react";
import Carrusel from "../components/Carrusel";
import Carrusel2 from "../components/Carrusel2";
import Footer from "../components/Footer";

export default function Home() {
  const [cambiarFondo, setCambiarFonto] = useState(false);

  return (
    <>
      <Head>
        <title>Actitud Digital</title>
        <meta
          name="description"
          content="Agencia de marketing digital- Uruguay"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <Portada />

        <div className="serviciosHome z-50 bg-transparent relative pt-24  "></div>

        <Carrusel />
        <div className="flex justify-center gap-4 fraseDesktop  bg-transparent py-44 -mt-[200px] h-screen bg-7">
          <div className="w-full  ">
            <h2 className="text-center text-[#fff]  font-extrabold text-7xl mt-12 mb-32 bg-7">
              "Lo que no podemos medir <br></br>{" "}
              <span className="text-white bg-[#1C4ED8] relative top-6">
                no podemos mejorar"
              </span>
            </h2>
          </div>
        </div>

        <div className="flex justify-center gap-4 fraseMobile px-3 relative py-44 -mt-[100px] h-[50vh] ">
          <div className="w-[95%] mx-auto ">
            <h2 className="text-center text-[#fff] relative font-extrabold text-4xl  ">
              "Lo que no<br></br> podemos medir <br></br>{" "}
              <span className="text-[#1C4ED8]  relative top-0 ">
                no podemos mejorar"
              </span>
            </h2>
          </div>
        </div>

        <div
          className=" relative md:bg-white bg-black md:hover:bg-transparent  text-white  md:text-black md:hover:text-white transition-colors"
          onMouseOver={() => setCambiarFonto(true)}
          onMouseOut={() => setCambiarFonto(false)}
        >
          <h2 className="text-center  font-extrabold text-5xl pt-24 ">
            Clientes
          </h2>
          <Carrusel2 cambiarFondo={cambiarFondo} />
        </div>
      </main>
      <Footer />
    </>
  );
}
