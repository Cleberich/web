import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Nav from "../components/Nav";
import Portada from "../components/Portada";
import Numeros from "../components/Numeros";
import Modal from "../components/Modal";
import { useState } from "react";
import Testimonial from "../components/Testimonial";
import Carrusel from "../components/Carrusel";
import Carrusel2 from "../components/Carrusel2";
import Footer from "../components/Footer";
import CarrsuselSkeletor from "../components/CarrsuselSkeletor";
import Clientes from "../components/Clientes";
import Fondo from "../components/Fondo";

export default function Home() {
  const [cambiarFondo, setCambiarFonto] = useState(false);
  const mover = () => {
    console.log("moviendo");
  };
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
        {/* <Image
          src="/img/wave.svg"
          width={1200}
          height={500}
          className="w-full bg-transparent relative waveDesktop"
        /> */}

        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26178.019311727632!2d-56.206978920898464!3d-34.900114599999974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81d5b7207517%3A0xa27be7b571f03bcb!2sEternity%20Optica%20Cord%C3%B3n!5e0!3m2!1sen!2suy!4v1676313060674,!1m16!1m12!1m3!1d26175.96257789156!2d-56.23719862089845!3d-34.906566899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sEternity%20Optica!5e0!3m2!1sen!2suy!4v1676313153826!,!5m2!1sen!2suy"
          width="1200px"
          height="450px"
          className="w-[100%] h-[450px] border-0 relative"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}

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
