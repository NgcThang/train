// src/pages/HomePage.js

import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Section from '../components/Section'
import { Link } from 'react-router-dom';
import '../styles/components/products.css'
import '../styles/components/capability.css'


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

// import ảnh Our capabilities
import capable1 from '../assets/images/capable1.jpg'
import capable2 from '../assets/images/capable2.jpg'
import capable3 from '../assets/images/capable3.jpg'
import capable4 from '../assets/images/capable4.jpg'
import capabilityHighlight from '../assets/images/capability.jpg'


export default function HomePage() {
  const images = [carousel1, carousel2, carousel3, carousel4]

  const products = [
    {
      title: 'Áo thun',
      img: aothun,
      slug: 'tshirt',
      desc: 'Áo thun là trang phục cơ bản nhưng không thể thiếu trong tủ đồ của mọi người, mang lại sự thoải mái và linh hoạt cho người mặc trong mọi hoạt động hàng ngày.'
    },
    {
      title: 'Áo thể thao',
      img: aothethao,
      slug: 'activewear',
      desc: 'Áo thể thao được thiết kế đặc biệt để hỗ trợ vận động, giúp người mặc cảm thấy thoải mái và tự tin trong các hoạt động thể thao, từ tập gym đến chạy bộ.'
    },
    {
      title: 'Áo polo',
      img: aopolo,
      slug: 'poloshirt',
      desc: 'Áo polo là sự kết hợp hoàn hảo giữa sự thanh lịch và tiện dụng, phù hợp cho cả môi trường công sở lẫn các buổi dã ngoại hay thể thao nhẹ nhàng.'
    },
    {
      title: 'Áo khoác',
      img: aokhoac,
      slug: 'jacket',
      desc: 'Áo khoác là lựa chọn lý tưởng cho những ngày hè nhiều gió, mang lại sự thoải mái tối đa và dễ dàng phối đồ với nhiều phong cách khác nhau.'
    },
    {
      title: 'Quần jeans',
      img: quanjeans,
      slug: 'jeans',
      desc: 'Quần jeans là item không bao giờ lỗi mốt, có thể mặc trong nhiều hoàn cảnh và dễ dàng kết hợp với các loại áo khác nhau để tạo nên phong cách riêng.'
    },
    {
      title: 'Quần công sở',
      img: quancongso,
      slug: 'workpants',
      desc: 'Quần công sở mang đến vẻ ngoài chuyên nghiệp, lịch sự và thoải mái cho người mặc, phù hợp với môi trường làm việc và các buổi gặp gỡ quan trọng.'
    }
  ]

  const capabilities = [
    {
      img: capable1,
      title: 'Continuous Efforts for R&D',
      desc: `Our development team studies your specifications to design readily practical tools, methods and work instructions, which in combination with the deployment of today’s technology, ensure timely production and consistent quality standards.`
    },
    {
      img: capable2,
      title: 'LEAN Manufacturing System',
      desc: `Being one of the sustainable clothing manufacturers in Vietnam, we prioritize sustainability and responsibility in our manufacturing processes. By applying the LEAN system, we minimize waste at every step and optimize lead time.`
    },
    {
      img: capable3,
      title: 'OEM/ODM Manufacturing',
      desc: `We specialize in OEM/ODM manufacturing. Our skillful employees and high-technology machine system allow us to manage the entire process from development to delivery with precision and efficiency.`
    },
    {
      img: capable4,
      title: 'Certified Fabrics',
      desc: `Based on customer’s requirements, we have the capability to source high-quality, sustainable materials, certified by GOTS, OCS, FSC, GRS, and OEKO-TEX® Standard 100 through our reliable supplier network in Vietnam and globally.`
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
      <span
          style={{
            display: 'block',
            width: '40px',
            height: '3px',
            backgroundColor: '#a09eb0ff', 
            margin: '0 auto 12px',
            borderRadius: '2px',
          }}
        />
        <h2 className="products-title">Product Lines</h2>
        <p className="products-subtitle">
         We specialize in manufacturing activewear, casualwear, kidswear, underwear, etc.&nbsp;
         offering high-quality apparel to best suit your demands.<br/>
         Every garment is made with care, in our own SA8000 and WRAP certified sewing factory.
         </p>
        <div className="product-cards">
          {products.map((p, idx) => (
            <div className="product-card" key={idx}>
              <div className="image-wrapper">
                <img src={p.img} alt={p.title} />
                <div className="overlay">
                  <p>{p.desc}</p>
                </div>
              </div>
              <h4 className="product-title">{p.title}</h4>
              <Link to={`/products/${p.slug}`} className="btn">Xem thêm</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Our capabilities */}
      <section className="capability-section">
        {/* Header trên nền xanh full-bleed */}
        <div className="capability-header">
          <span className="capability-divider" />
          <h2 className="capability-title">Năng lực của chúng tôi</h2>
          <p className="capability-subtitle">
            With over 90 years of experience in textile industry, we support many global
            fashion brands in bringing their designs to life through full-package OEM/ODM
            solutions, innovative product development consulting, sustainable and efficient
            manufacturing.
          </p>
        </div>

        {/* Cards trên nền trắng, overlap header */}
        <div className="capability-cards-section">
          <div className="capability-cards">
            {capabilities.map((c) => (
              <div className="capability-card" key={c.title}>
                <img src={c.img} alt={c.title} />
                <div className="capability-card-content">
                  <h3 className="capability-card-title">{c.title}</h3>
                  <p className="capability-card-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Highlight image full-bleed */}
        <div className="capability-highlight">
          <img src={capabilityHighlight} alt="Capability highlight" />
        </div>
      </section>
    </>
  )
}
