// src/components/FeatureSection.js
import React from 'react';

export default function FeatureSection({
  title,
  text = [],            // mảng string hoặc phần tử <ul>…
  images = [],          // mảng đường dẫn ảnh
  imagePosition = 'right' // 'left' | 'right' | 'center'
}) {
  // đảm bảo class tương ứng với CSS
  const sectionClass = `feature-section feature-section--${imagePosition}`;

  return (
    <section className={sectionClass}>
      {/* Khi imagePosition là 'left', ảnh sẽ nằm trước */}
      {imagePosition !== 'center' && (
        <div className="feature-images">
          {images.map((src, i) => <img key={i} src={src} alt={`${title} ${i + 1}`} />)}
        </div>
      )}

      <div className="feature-text">
        <h2>{title}</h2>
        {text.map((block, i) =>
          typeof block === 'string'
            ? <p key={i}>{block}</p>
            : React.cloneElement(block, { key: i })
        )}
      </div>

      {/* Khi imagePosition là 'right', ảnh sẽ nằm sau */}
      {imagePosition === 'right' && (
        <div className="feature-images">
          {images.map((src, i) => <img key={i} src={src} alt={`${title} ${i + 1}`} />)}
        </div>
      )}

      {/* Khi imagePosition là 'center', ảnh nằm dưới text */}
      {imagePosition === 'center' && (
        <div className="feature-images">
          {images.map((src, i) => <img key={i} src={src} alt={`${title} ${i + 1}`} />)}
        </div>
      )}
    </section>
  );
}



