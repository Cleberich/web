import React, { useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarrsuselSkeletor from "./CarrsuselSkeletor";

const Carrusel2 = () => {
  return (
    <>
      <div className="w-9/12 carruselClientes mx-auto pb-64 mt-24">
        <Swiper
          slidesPerView={"4"}
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
              <img src="/img/clientes/1.gif" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src="/img/clientes/2.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src="/img/clientes/3.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src="/img/clientes/4.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src="/img/clientes/5.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src="/img/clientes/6.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src="/img/clientes/7.webp" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full md:hidden mx-auto pb-64 mt-24">
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
            <div className="animate-pulse">
              <img src="/img/clientes/1.gif" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src="/img/clientes/2.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src="/img/clientes/3.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src="/img/clientes/4.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src="/img/clientes/5.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src="/img/clientes/6.webp" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="animate-pulse">
              <img src="/img/clientes/7.webp" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carrusel2;
