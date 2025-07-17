import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider({ images }) {
  return (
    <Swiper slidesPerView={1} loop>
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt="" loading="lazy" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
