import React, { useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carrusel2 = ({ cambiarFondo }) => {
  return (
    <>
      <div className="w-9/12 carruselClientes mx-auto pb-64 mt-24">
        <Swiper
          slidesPerView={"4"}
          spaceBetween={25}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 800, disableOnInteraction: false }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="animate-pulse">
              <img
                src={
                  cambiarFondo ? "/img/logos/1negro.webp" : "/img/logos/1.webp"
                }
                alt="logos de clientes"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img
                src={
                  cambiarFondo ? "/img/logos/2negro.webp" : "/img/logos/2.webp"
                }
                alt="logos de clientes"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img
                src={
                  cambiarFondo ? "/img/logos/3negro.webp" : "/img/logos/3.webp"
                }
                alt="logos de clientes"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="animate-pulse">
              <img
                src={
                  cambiarFondo ? "/img/logos/6negro.webp" : "/img/logos/6.webp"
                }
                alt="logos de clientes"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img
                src={
                  cambiarFondo ? "/img/logos/7negro.webp" : "/img/logos/7.webp"
                }
                alt="logos de clientes"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img
                src={
                  cambiarFondo ? "/img/logos/8negro.webp" : "/img/logos/8.webp"
                }
                alt="logos de clientes"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full md:hidden mx-auto pb-64 mt-24">
        <Swiper
          slidesPerView={"2"}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="animate-pulse">
              <img src={"/img/logos/1negro.webp"} alt="logos de clientes" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src={"/img/logos/2negro.webp"} alt="logos de clientes" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src={"/img/logos/3negro.webp"} alt="logos de clientes" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="animate-pulse">
              <img src={"/img/logos/6negro.webp"} alt="logos de clientes" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src={"/img/logos/7negro.webp"} alt="logos de clientes" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src={"/img/logos/8negro.webp"} alt="logos de clientes" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carrusel2;
