import CardServicos from "../components/CardServicos";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import Card6 from "../components/Card6";
import Layout2 from "../components/Layout2";
import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import "animate.css";

export default function servicios() {
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
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
            <Card6 />
          </main>
        </section>
      </Layout2>
    </>
  );
}
