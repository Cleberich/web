import Head from "next/head";
import Layout2 from "../components/Layout2";
import "animate.css";
import { useState } from "react";
import Link from "next/link";

export default function nosotros() {
  const [mostrar, setMostrar] = useState(false);
  return (
    <>
      <Head>
        <title>Actitud Digital - Nosotros</title>
        <meta
          name="description"
          content="Tenemos el plan que tu negocio necesita para aumentar tus ventas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout2>
        <main className="fondoAnimado">
          <h2 className="text-3xl text-white mx-5 md:mx-24 font-light py-12 animate__animated animate__jackInTheBox">
            Un mercado cada vez más competitivo y desafiante nos impulsa a
            buscar nuevas formas de comunicarnos y llegar a nuestros clientes.
          </h2>
          <h2 className="text-3xl text-white  mx-5 md:mx-24 font-light pb-12  animate__animated animate__jackInTheBox">
            Actitud nace con la misión de ayudarte a crecer como organización y
            lograr objetivos comerciales.
          </h2>
          <h2 className="text-3xl text-white  mx-5 md:mx-24 font-light animate__animated animate__jackInTheBox">
            Nuestra metodología de trabajo se basa en crear un camino medible,
            sostenible y ambicioso trazado por accionables concretos que permite
            tener claridad de cada aspecto de la estrategia definida.
          </h2>
          <h2 className="text-3xl text-white  mx-5 md:mx-24 font-light mt-12 animate__animated animate__jackInTheBox">
            Creamos un vínculo que nos permite nutrir a nuestros equipos de
            trabajo logrando de esta forma un diferencial a la hora de
            plantearnos objetivos ya que buscamos ser parte de tu empresa y
            ayudarte en todos los procesos necesarios para crecer.
          </h2>

          <Link
            href="/contacto"
            className="boton  flex flex-nowrap rounded-3xl py-2 px-3 text-white ml-24 mt-12  gap-12 w-12 hover:w-44"
          >
            <span
              onMouseEnter={() => setMostrar(true)}
              onMouseOut={() => setMostrar(false)}
              className={
                mostrar ? " text-white absolute" : "text-transparent absolute"
              }
            >
              Trabajemos juntos
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </Link>
        </main>
      </Layout2>
    </>
  );
}
