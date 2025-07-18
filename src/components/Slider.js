// src/components/Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Bổ sung đúng path cho các module
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import CSS của Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation            // nút prev/next
      pagination={{ clickable: true }}  // chấm pagination có thể click
      loop                  // vòng lặp vô tận
      style={{ padding: '1rem 0' }}
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`Slide ${idx + 1}`}
            loading="lazy"
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



