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
              Lo que no<br></br> podemos medir <br></br>{" "}
              <span className="text-[#1C4ED8]  relative top-0 ">
                no podemos mejorar
              </span>
            </h2>
          </div>
        </div>
        {/* <div class="contenedora">
          <div class="caja">
            <h2 class="titulo">Cordón</h2>
            <p>Av. 18 de Julio 2035 Bis</p>
            <p>Lunes a vienes de 09 a 19hs </p>
            <p>Sábados de 09 a 14hs</p>
            <div class="cajaEnalces">
              <a class="enlace" href="https://goo.gl/maps/s3rgPxm7nENo2H4M7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Google maps
              </a>
              <a class="enlaceAzul" href="tel:099685821">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Teléfono
              </a>
            </div>
          </div>
          <div class="caja">
            <h2 class="titulo">Cordón</h2>
            <p>Camino Carrasco 4557 bis esquina Está de Israel</p>
            <p>Lunes a vienes de 09 a 19hs </p>
            <p>Sábados de 09 a 14hs</p>
            <div class="cajaEnalces">
              <a class="enlace" href="https://g.co/kgs/C9NPrQ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Google maps
              </a>
              <a class="enlaceAzul" href="tel:098614262">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Teléfono
              </a>
            </div>
          </div>
          <div class="caja">
            <h2 class="titulo">Ciudad Vieja</h2>
            <p>Sarandi 645 Esq. Bartolome Mitre</p>
            <p>Lunes a vienes de 09 a 19hs </p>
            <p>Sábados de 09 a 14hs</p>
            <div class="cajaEnalces">
              <a
                class="enlace"
                href="https://www.google.com/maps/place/Eternity+%C3%93ptica+Ciudad+Vieja/@-34.9065669,-56.2351387,14z/data=!4m7!3m6!1s0x959f81d50260c7f3:0x75e6fcff09235f44!8m2!3d-34.9065669!4d-56.2021797!15sChxvcHRpY2EgZXRlcm5pdHkgY2l1ZGFkIHZpZWphWh4iHG9wdGljYSBldGVybml0eSBjaXVkYWQgdmllamGSAQhvcHRpY2lhbuABAA!16s%2Fg%2F11s7rjf6jz?coh=164777&entry=tt"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Google maps
              </a>
              <a class="enlaceAzul" href="tel:099097909">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Teléfono
              </a>
            </div>
          </div>
          <div class="caja">
            <h2 class="titulo">Cerro</h2>
            <p>Carlos Maria Ramirez 1528 Esq. Vigo</p>
            <p>Lunes a vienes de 09 a 19hs </p>
            <p>Sábados de 09 a 14hs</p>
            <div class="cajaEnalces">
              <a class="enlace" href="https://goo.gl/maps/kVT7UvkEKirpV1Dx5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Google maps
              </a>
              <a class="enlaceAzul" href="tel:091511012">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Teléfono
              </a>
            </div>
          </div>
          <div class="caja">
            <h2 class="titulo">Pocitos</h2>
            <p>Rivera 2902 Esq. Lamas</p>
            <p>Lunes a viernes de 09: a 19hs</p>
            <p>Sábados de 09 a 14hs</p>
            <div class="cajaEnalces">
              <a
                class="enlace"
                href="https://www.google.com/maps/place/Eternity+Optica+Pocitos/@-34.9033206,-56.185398,14z/data=!4m7!3m6!1s0x959f81a395554f75:0x8c85683339714322!8m2!3d-34.9033206!4d-56.152439!15sChxvcHRpY2EgZXRlcm5pdHkgY2l1ZGFkIHZpZWphWh4iHG9wdGljYSBldGVybml0eSBjaXVkYWQgdmllamGSAQhvcHRpY2lhbuABAA!16s%2Fg%2F11sbrnjd_0?coh=164777&entry=tt"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Google maps
              </a>
              <a class="enlaceAzul" href="tel:091577243">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Teléfono
              </a>
            </div>
          </div>
          <div class="caja">
            <h2 class="titulo">Unión</h2>
            <p>8 de octubre 3964 Esq. Cerrato</p>
            <p>Lunes a vienes de 09 a 19hs </p>
            <p>Sábados de 09 a 14hs</p>
            <div class="cajaEnalces">
              <a class="enlace" href="https://goo.gl/maps/xbnaDKRKqpkpQmDF6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Google maps
              </a>
              <a class="enlaceAzul" href="tel:091205104">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Teléfono
              </a>
            </div>
          </div>
          <div class="caja">
            <h2 class="titulo">Nuevo Centro Shopping</h2>
            <p>Luis alberto de Herrera 3365</p>
            <p>Lunes a Domingos</p>
            <p>10:00 a 22:00hs</p>
            <div class="cajaEnalces">
              <a class="enlace" href="https://goo.gl/maps/gUghnTCoSfv3oDBt6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Google maps
              </a>
              <a class="enlaceAzul" href="tel:091699832">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  class="icono"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Teléfono
              </a>
            </div>
          </div>
        </div> */}
        ;
        {/* <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26178.019311727632!2d-56.206978920898464!3d-34.900114599999974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81d5b7207517%3A0xa27be7b571f03bcb!2sEternity%20%C3%B3n!5e0!3m2!1sen!2suy!4v1676313060674,!1m16!1m12!1m3!1d26175.96257789156!2d-56.23719862089845!3d-34.906566899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sEternity%!5e0!3m2!1sen!2suy!4v1676313153826!,!1m18!1m12!1m3!1d52378.424155848195!2d-56.21033110152288!3d-34.86498284283257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f812fbe004ce5%3A0x376f1743aff6b9bc!2sEternity%Nuevo%Centro%Shopping!5e0!3m2!1sen!2suy!4v1676664669511!5m2!1sen!2suy,!5m2!1sen!2suy"
            width="100%"
            height="450px"
            referrerpolicy="no-referrer-when-downgrade"
            loading="lazy"
          ></iframe>
        </div> */}
        <div className=" relative md:bg-white bg-black   text-white  md:text-black transition-colors">
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
