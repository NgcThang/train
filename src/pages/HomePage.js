// src/pages/HomePage.js

import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Section from '../components/Section'
import '../styles/components/products.css'

// import ảnh hero & carousel
import heroBg from '../assets/images/hero-bg.jpg'
import carousel1 from '../assets/images/carousel1.jpg'
import carousel2 from '../assets/images/carousel2.jpg'
import carousel3 from '../assets/images/carousel3.jpg'
import carousel4 from '../assets/images/carousel4.jpg'

// import ảnh Product Lines
import aothun from '../assets/images/products/aothun.jpg'
import aothethao from '../assets/images/products/aothethao.jpg'
import aopolo from '../assets/images/products/aopolo.jpg'
import aokhoac from '../assets/images/products/aokhoac.jpg'
import quanjeans from '../assets/images/products/quanjeans.jpg'
import quancongso from '../assets/images/products/quancongso.jpg'

export default function HomePage() {
  const images = [carousel1, carousel2, carousel3, carousel4]

  const products = [
    {
      title: 'Áo thun',
      img: aothun,
      desc: 'Áo thun là trang phục cơ bản nhưng không thể thiếu trong tủ đồ của mọi người, mang lại sự thoải mái và linh hoạt cho người mặc trong mọi hoạt động hàng ngày.'
    },
    {
      title: 'Áo thể thao',
      img: aothethao,
      desc: 'Áo thể thao được thiết kế đặc biệt để hỗ trợ vận động, giúp người mặc cảm thấy thoải mái và tự tin trong các hoạt động thể thao, từ tập gym đến chạy bộ.'
    },
    {
      title: 'Áo polo',
      img: aopolo,
      desc: 'Áo polo là sự kết hợp hoàn hảo giữa sự thanh lịch và tiện dụng, phù hợp cho cả môi trường công sở lẫn các buổi dã ngoại hay thể thao nhẹ nhàng.'
    },
    {
      title: 'Áo khoác',
      img: aokhoac,
      desc: 'Áo khoác là lựa chọn lý tưởng cho những ngày hè nhiều gió, mang lại sự thoải mái tối đa và dễ dàng phối đồ với nhiều phong cách khác nhau.'
    },
    {
      title: 'Quần jeans',
      img: quanjeans,
      desc: 'Quần jeans là item không bao giờ lỗi mốt, có thể mặc trong nhiều hoàn cảnh và dễ dàng kết hợp với các loại áo khác nhau để tạo nên phong cách riêng.'
    },
    {
      title: 'Quần công sở',
      img: quancongso,
      desc: 'Quần công sở mang đến vẻ ngoài chuyên nghiệp, lịch sự và thoải mái cho người mặc, phù hợp với môi trường làm việc và các buổi gặp gỡ quan trọng.'
    }
  ]

  return (
    <>
      <Slider images={images} interval={4000} />

      <Hero
        image={heroBg}
        title="Over 90 Years of Experience in the Textile Industry"
        subtitle="In 1931, Carla Søren Thygesen began a journey that would link the name Thygesen Textile Group (Denmark) with quality in designing, manufacturing and selling textile products."
      />

      <Section className="container values-section">
        <div className="section-cards">
          <div className="card">
            <h3>Mission</h3>
            <p>
              To inspire and motivate change toward <strong>True Values</strong> and{' '}
              <strong>Sustainable Development</strong>.
            </p>
          </div>
          <div className="card">
            <h3>Vision</h3>
            <p>
              To become a prestigious textile supplier in Vietnam and worldwide while
              continually bringing <strong>True Added Values</strong> to our customers,
              partners, employees, and shareholders.
            </p>
          </div>
          <div className="card">
            <h3>Core Values</h3>
            <p>
              From the beginning, Thygesen Textile Vietnam has strived to translate our
              core values into everything we do: <strong>Truthfulness</strong>,{' '}
              <strong>Compassion</strong>, <strong>Kindness</strong>,{' '}
              <strong>Commitment</strong>, and <strong>Persistence</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* Product Lines */}
      <div className="container products-section">
        <h2 className="products-title">Product Lines</h2>
        <p className="products-subtitle">
          We specialize in manufacturing activewear, casualwear, kidswear, underwear, etc.&nbsp;
          offering high-quality apparel to best suit your demands.<br/>
          Every garment is made with care, in our own SA8000 and WRAP certified sewing factory.
         </p>
        <div className="product-cards">
          {products.map((p, idx) => (
            <div className="product-card" key={idx}>
              <img src={p.img} alt={p.title} />
              <div className="overlay"><p>{p.desc}</p></div>
              <div className="info">
                <h4>{p.title}</h4>
                <button className="btn">Discover</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
