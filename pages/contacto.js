import Layout2 from "../components/Layout2";

export default function contacto() {
  return (
    <Layout2>
      {" "}
      {/* <video
        className="w-full h-screen fixed top-0 object-cover -mt-20"
        playsInline
        loop
        muted
        autoPlay
        alt="All the devices"
        src="/img/videoportada.mp4"
      /> */}
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
        <div className="w-full md:w-[40%] md:pl-24 mx-auto rounded-xl  ">
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
            contacto@actitud.com
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            +598 92 997 991
          </h2>
        </div>
      </main>
    </Layout2>
  );
}
