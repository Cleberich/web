import Head from "next/head";
import Formulario from "../components/Formulario";
import Layout2 from "../components/Layout2";

export default function contacto() {
  return (
    <>
      <Head>
        <title>Actitud Digital - Contacto</title>
        <meta
          name="description"
          content="Contactanos ahora y empieza a vender más"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout2>
        {" "}
        <ul className="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h1
          className="text-white font-bold text-6xl relative top-24 pl-44 tituloContacto"
          id="contact"
        >
          Contacto
        </h1>
        <main className=" h-[50vh] flex justify-center relative mt-24 formularioContacto">
          <Formulario
            estilos={
              "w-full text-white bg-blue-600 hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            }
          />
          <div className="w-full md:w-[50%] block md:pl-[17%] my-auto">
            <h2 className="text-white font-light flex justify-left  my-1 text-sm gap-3">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              lucia@actitud.io
            </h2>
            <h2 className="text-white font-light  flex justify-left my-1 text-sm gap-3 ">
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Lunes a viernes de 9:00 a 18:00 hs.
            </h2>
          </div>
        </main>
      </Layout2>
    </>
  );
}
