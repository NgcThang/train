import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      style={{ padding: '1rem 0' }}
    >
      {images.map((src,i) => (
        <SwiperSlide key={i}>
          <img
            src={src}
            alt={`Slide ${i+1}`}
            loading="lazy"
            style={{ width:'100%', borderRadius:8 }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



