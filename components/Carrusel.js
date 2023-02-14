import React, { useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import Link from "next/link";

const Carrusel = () => {
  return (
    <>
      <div className=" pl-5 md:px-24  pb-64 relative bg-transparent -mt-[150px] carruselTop">
        <h1 className="text-center text-white font-extrabold text-5xl mb-0 md:mb-24 ">
          Servicios
        </h1>
        <Swiper
          slidesPerView={"4 "}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[300px] h-[250px]">
              <a href="#">
                <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Desarrollo <br></br>de marca
                </h2>
              </a>
              <div>
                {" "}
                <Image
                  width={200}
                  height={200}
                  src="/img/marca.webp"
                  className="w-24 mx-auto relative"
                  alt="creacion de marca"
                ></Image>
              </div>
              <div className="flex justify-center">
                <Link
                  className="text-white bg-blue-600 w-full text-center py-2 mt-2 hover:bg-blue-800 rounded-xl"
                  href="/servicios"
                >
                  Ir a servicios
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[300px] h-[250px]">
              <a href="#">
                <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Crecimiento de ecommerce
                </h2>
              </a>
              <div>
                <Image
                  width={200}
                  height={200}
                  src="/img/ecommerce.webp"
                  className="w-24 mx-auto relative"
                  alt="ecommerce"
                ></Image>
                <div className="flex justify-center">
                  <Link
                    className="text-white bg-blue-600 w-full text-center py-2 mt-2 hover:bg-blue-800 rounded-xl"
                    href="/servicios"
                  >
                    Ir a servicios
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[300px] h-[250px]">
              <a href="#">
                <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Generación de leads y prospección
                </h2>
              </a>
              <div>
                {" "}
                <Image
                  width={200}
                  height={200}
                  src="/img/leads.webp"
                  className="w-24 mx-auto relative"
                  alt="leads"
                ></Image>
              </div>
              <div className="flex justify-center">
                <Link
                  className="text-white bg-blue-600 w-full text-center py-2 mt-2 hover:bg-blue-800 rounded-xl"
                  href="/servicios"
                >
                  Ir a servicios
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[300px] h-[250px]">
              <a href="#">
                <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Crecimiento en redes sociales
                </h2>
              </a>
              <div>
                <Image
                  width={200}
                  height={200}
                  src="/img/redes.webp"
                  className="w-24 mx-auto relative"
                  alt="redes sociales"
                ></Image>
              </div>
              <div className="flex justify-center">
                <Link
                  className="text-white bg-blue-600 w-full text-center py-2 mt-2 hover:bg-blue-800 rounded-xl"
                  href="/servicios"
                >
                  Ir a servicios
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[300px] h-[250px]">
              <a href="#">
                <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Desarrollo <br></br> web
                </h2>
              </a>
              <div>
                {" "}
                <Image
                  width={200}
                  height={200}
                  src="/img/web.webp"
                  className="w-24 mx-auto relative"
                  alt="diseño web"
                ></Image>
              </div>
              <div className="flex justify-center">
                <Link
                  className="text-white bg-blue-600 w-full text-center py-2 mt-2 hover:bg-blue-800 rounded-xl"
                  href="/servicios"
                >
                  Ir a servicios
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[300px] h-[250px]">
              <a href="#">
                <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Producción <br></br>audiovisual
                </h2>
              </a>
              <div>
                {" "}
                <Image
                  width={200}
                  height={200}
                  src="/img/visual.webp"
                  className="w-24 mx-auto relative"
                  alt="audiovisual"
                ></Image>
              </div>
              <div className="flex justify-center">
                <Link
                  className="text-white bg-blue-600 w-full text-center py-2 mt-2 hover:bg-blue-800 rounded-xl"
                  href="/servicios"
                >
                  Ir a servicios
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pt-12 -mt-12   pb-24 relative bg-transparent carruselBottom">
        <h1 className="text-center  text-white font-extrabold text-4xl mb-12 ">
          Servicios
        </h1>
        <Swiper
          slidesPerView={"1"}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[90%] mx-auto h-[250px]">
              <a href="#">
                <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Desarrollo <br></br>de marca
                </h2>
              </a>
              <div>
                {" "}
                <Image
                  width={200}
                  height={200}
                  src="/img/marca.webp"
                  className="w-24 mx-auto relative"
                  alt="marca"
                ></Image>
              </div>
              <div className="bg-blue-600 w-full py-2 rounded-lg text-center text-white">
                <Link href="/servicios">Ir a servicios</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[90%] mx-auto h-[250px]">
              <a href="#">
                <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Crecimiento <br></br>de ecommerce
                </h2>
              </a>
              <div>
                <Image
                  width={200}
                  height={200}
                  src="/img/ecommerce.webp"
                  className="w-24 mx-auto relative"
                  alt="ecommerce"
                ></Image>
              </div>
              <div className="bg-blue-600 w-full py-2 rounded-lg text-center text-white">
                <Link href="/servicios">Ir a servicios</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[90%] mx-auto h-[250px]">
              <a href="#">
                <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Generación de leads y prospección
                </h2>
              </a>
              <div>
                {" "}
                <Image
                  width={200}
                  height={200}
                  src="/img/leads.webp"
                  className="w-24 mx-auto relative"
                  alt="leads"
                ></Image>
              </div>
              <div className="bg-blue-600 w-full py-2 rounded-lg text-center text-white">
                <Link href="/servicios">Ir a servicios</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[90%] mx-auto h-[250px]">
              <a href="#">
                <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Crecimiento en redes sociales
                </h2>
              </a>
              <div>
                <Image
                  width={200}
                  height={200}
                  src="/img/redes.webp"
                  className="w-24 mx-auto relative"
                  alt="redes sociales"
                ></Image>
              </div>
              <div className="bg-blue-600 w-full py-2 rounded-lg text-center text-white">
                <Link href="/servicios">Ir a servicios</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[90%] mx-auto h-[250px]">
              <a href="#">
                <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Desarrollo <br></br> web
                </h2>
              </a>
              <div>
                {" "}
                <Image
                  width={200}
                  height={200}
                  src="/img/web.webp"
                  className="w-24 mx-auto relative"
                  alt="diseño web"
                ></Image>
              </div>
              <div className="bg-blue-600 w-full py-2 rounded-lg text-center text-white">
                <Link href="/servicios">Ir a servicios</Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[90%] mx-auto h-[250px]">
              <a href="#">
                <h2 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Producción <br></br>audiovisual
                </h2>
              </a>
              <div>
                {" "}
                <Image
                  width={200}
                  height={200}
                  src="/img/visual.webp"
                  className="w-24 mx-auto relative"
                  alt="audiovisual"
                ></Image>
              </div>
              <div className="bg-blue-600 w-full py-2 rounded-lg text-center text-white">
                <Link href="/servicios">Ir a servicios</Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carrusel;
