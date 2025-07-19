import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/components/slider.css'  

export default function Slider({ images = [], interval = 5000 }) {
  return (
    <div className="slider-fullwidth">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: interval, disableOnInteraction: false }}
        grabCursor
        className="mySwiper"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`slide-${idx}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}



