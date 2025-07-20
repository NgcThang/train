import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '0px',   // không thừa khoảng, chỉ 3 slide visible
    slidesToShow: 3,        // desktop: 3 slide
    initialSlide: 2,        // default slide thứ 3
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,   // mobile: 1 slide full-width
          centerMode: false, // tắt peek 2 bên
        },
      },
    ],
    customPaging: i => <button />,
  }


  return (
    <section className="reviews-section">
      <span
          style={{
            display: 'block',
            width: '40px',
            height: '1px',
            backgroundColor: '#3526aaff', 
            margin: '0 auto 12px',
            borderRadius: '2px',
          }}
        />
      <h2 className="reviews-title">Our Clients Say</h2>
      <Slider {...settings} className="reviews-slider">
        {reviews.map((r, i) => (
          <div key={i}>
            <div className="review-card">
              <h3 className="review-card-title">{r.title}</h3>
              <p className="review-card-text">{r.text}</p>
              <p className="review-card-author">{r.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}








