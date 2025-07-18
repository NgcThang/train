import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/components/slider.css';

const images = [
  require('../assets/images/carousel1.jpg'),
  require('../assets/images/carousel2.jpg'),
  require('../assets/images/carousel3.jpg'),
  require('../assets/images/carousel4.jpg'),
];

export default function Slider() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }}
      pagination={{ clickable: true }}
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} className="carousel__img" alt={`Slide ${i+1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



