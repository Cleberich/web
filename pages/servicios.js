import CardServicos from "../components/CardServicos";
import Layout2 from "../components/Layout2";
import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import "animate.css";

export default function servicios() {
  const { servicios, contactados } = useAuth();
  const [animacion, setAnimacion] = useState(true);
  setTimeout(() => {
    setAnimacion(true);
  }, 1000);

  return (
    <>
      <Layout2>
        <video
          className="w-full  fixed top-0 object-cover portadaDesktop"
          playsInline
          loop
          muted
          autoPlay
          alt="All the devices"
          src="/img/video.mp4"
          type="video/mp4"
        />
        <img
          className="w-full  fixed top-0 object-cover portadaCelular"
          alt="All the devices"
          src="/img/videoportada.gif"
        />

        <script src="https://player.vimeo.com/api/player.js"></script>
        <section className="md:hvr-shutter-in-vertical2">
          <h1
            id="servicios"
            className="text-white font-bold text-4xl md:text-6xl absolute top-32 left-6 md:left-44"
          >
            Servicios
          </h1>

          <main className="p-5 md:p-24 flex bg-transparent flex-wrap gap-2 justify-center relative top-32 md:top-32">
            {" "}
            {servicios.map((service) => (
              <CardServicos key={service.id} service={service} />
            ))}
          </main>
        </section>
      </Layout2>
    </>
  );
}
