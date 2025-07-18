import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';          
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
      modules={[Navigation, Pagination]}                  // ← đăng ký 2 module này
      navigation                                        // ← bật nút next/prev
      pagination={{ clickable: true }}                  // ← bật dot pagination
      loop                                              // ← cho slider chạy vòng lặp
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640:  { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }}
      style={{ padding: '2rem 5%' }}
    >
      {images.map((src,i) => (
        <SwiperSlide key={i}>
          <img src={src} className="carousel__img" alt={`Slide ${i+1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



