import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/components/slider.css'

export default function Slider({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={4}           // luôn show 4 slides
      navigation                  // mũi tên
      pagination={{ clickable: true }} // chấm pagination
      loop
      breakpoints={{
        0:    { slidesPerView: 1 },
        640:  { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      className="my-swiper"
    >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt={`Slide ${i+1}`} className="slider-image"/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}



