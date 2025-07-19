import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import '../styles/components/reviews.css'


const reviews = [
  {
    title: 'Caring and Supportive',
    text:
      'It is a true pleasure to work with everyone at Thygesen! There is a level of care and support that isn’t seen with most vendors. I truly feel the strong partnership between us and the factory which provides long-term confidence as we grow.',
    author: 'Girlfriend Collective',
  },
  {
    title: 'Professional and Knowledgeable Team',
    text:
      'Our experience with Thygesen Textiles is one of positivity. The team is professional, knowledgeable, friendly, and always goes beyond to provide solutions to product development. I highly recommend Thygesen Textiles.',
    author: 'Amber Medical Ltd',
  },
  {
    title: 'Dedicated, Friendly, and Helpful',
    text:
      'I have been extremely pleased with the great cooperation and professionalism of the Thygesen Textile team. Their efficient customer service response and willingness to provide timely assistance make them a valuable strategic partner.',
    author: 'G-Form',
  },
  {
    title: 'Timely Delivery',
    text:
      'Thygesen consistently delivers our orders on time without compromising on quality. Their commitment to deadlines helps us maintain our production schedules seamlessly.',
    author: 'Calvin Klein',
  },
  {
    title: 'Exceptional Quality',
    text:
      'The quality of products from Thygesen exceeds expectations. The fabrics and finishes are top-notch, aligning perfectly with our brand standards.',
    author: 'Tommy Hilfiger',
  },
  {
    title: 'Responsive Support',
    text:
      'Their customer support is highly responsive. They address our inquiries and concerns promptly, making collaboration smooth and worry-free.',
    author: 'Fjällräven',
  },
  {
    title: 'Collaborative Partnership',
    text:
      'We value Thygesen as a true partner. Their willingness to work closely with us on design and production challenges has strengthened our relationship.',
    author: 'B Free Australia',
  },
]


export default function Reviews() {
  return (
    <section className="reviews-section">
      <span className="reviews-divider" />
      <h2 className="reviews-title">Our Clients Say</h2>


      <Swiper
        modules={[Pagination]}
        loop={true}
        loopedSlides={reviews.length}
        pagination={{ clickable: true }}
        initialSlide={2}
        slidesPerView={'auto'}          
        centeredSlides={true}
        spaceBetween={50}               
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 'auto',
            centeredSlides: true,
          },
        }}
      >
        {reviews.map((r, idx) => (
          <SwiperSlide key={idx}>
            <div className="review-card">
              <h3 className="review-card-title">{r.title}</h3>
              <p className="review-card-text">{r.text}</p>
              <p className="review-card-author">{r.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}






