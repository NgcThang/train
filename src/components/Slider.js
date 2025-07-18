import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/components/slider.css'    // path tuỳ theo bạn đặt

export default function Slider({ images = [], interval = 5000 }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      grabCursor={true}
      autoplay={{ delay: interval, disableOnInteraction: false }}
      className="mySwiper"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img src={src} alt={`Slide ${idx+1}`} className="slide-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}



