import CardServicos from "../components/CardServicos";
import Layout2 from "../components/Layout2";
import ModalServicios from "../components/ModalServicios";
import useActitud from "../hooks/useActitud";
import { useState, useEffect } from "react";
import "animate.css";

export default function servicios() {
  const { servicios } = useActitud();
  const [animacion, setAnimacion] = useState(true);
  setTimeout(() => {
    setAnimacion(true);
  }, 1000);

  return (
    <>
      <Layout2>
        <video
          className="w-full  fixed top-0 object-cover "
          playsInline
          loop
          muted
          autoPlay
          alt="All the devices"
          src="/img/video.mp4"
        />
        <section className="md:hvr-shutter-in-vertical2">
          <h1
            id="servicios"
            className="text-white font-bold text-4xl md:text-6xl absolute top-32 left-6 md:left-44"
          >
            Servicios
          </h1>

          <ModalServicios />
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
