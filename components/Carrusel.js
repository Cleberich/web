import React, { useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Numeros from "./Numeros";
import "swiper/css";

const Carrusel = () => {
  return (
    <>
      <div className=" pl-5 md:px-24  pb-64 relative bg-transparent -mt-[480px] carruselTop">
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
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[300px] h-[200px]">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Desarrollo <br></br>de marca
                </h5>
              </a>
              <div>
                {" "}
                <img src="/img/marca.gif" className="w-24 mx-auto relative" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[300px] h-[200px]">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Crecimiento de ecommerce
                </h5>
              </a>
              <div>
                <img
                  src="/img/ecommerce.gif"
                  className="w-24 mx-auto relative"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[300px] h-[200px]">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Generación de leads y prospección
                </h5>
              </a>
              <div>
                {" "}
                <img src="/img/leads.gif" className="w-24 mx-auto relative" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[300px] h-[200px]">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Crecimiento en redes sociales
                </h5>
              </a>
              <div>
                <img src="/img/redes.gif" className="w-24 mx-auto relative" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[300px] h-[200px]">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Desarrollo <br></br> web
                </h5>
              </a>
              <div>
                {" "}
                <img src="/img/web.gif" className="w-24 mx-auto relative" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[300px] h-[200px]">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Producción <br></br>audiovisual
                </h5>
              </a>
              <div>
                {" "}
                <img src="/img/visual.gif" className="w-24 mx-auto relative" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pt-12 -mt-12   pb-24 relative bg-black carruselBottom">
        <h1 className="text-center  text-white font-extrabold text-4xl mb-12 ">
          Servicios
        </h1>
        <Swiper
          slidesPerView={"1.5"}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[250px] h-[250px]">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Desarrollo <br></br>de marca
                </h5>
              </a>
              <div>
                {" "}
                <img src="/img/marca.gif" className="w-24 mx-auto relative" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[250px] h-[250px]">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Crecimiento de ecommerce
                </h5>
              </a>
              <div>
                <img
                  src="/img/ecommerce.gif"
                  className="w-24 mx-auto relative"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[250px] h-[250px]">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Generación de leads y prospección
                </h5>
              </a>
              <div>
                {" "}
                <img src="/img/leads.gif" className="w-24 mx-auto relative" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[250px] h-[250px]">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Crecimiento en redes sociales
                </h5>
              </a>
              <div>
                <img src="/img/redes.gif" className="w-24 mx-auto relative" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[250px] h-[250px]">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Desarrollo <br></br> web
                </h5>
              </a>
              <div>
                {" "}
                <img src="/img/web.gif" className="w-24 mx-auto relative" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-sm p-6 bg-[#121212] shadow-xl  rounded-lg w-[250px] h-[250px]">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">
                  Producción <br></br>audiovisual
                </h5>
              </a>
              <div>
                {" "}
                <img src="/img/visual.gif" className="w-24 mx-auto relative" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carrusel;
