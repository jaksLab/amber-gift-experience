import { useState } from 'react';

function GalleryImage({ src, index }) {
  const [missing, setMissing] = useState(false);

  return (
    <figure className="memory-card">
      {!missing ? (
        <img src={src} alt={`Amber memory ${index + 1}`} loading="lazy" onError={() => setMissing(true)} />
      ) : (
        <div className="image-placeholder" role="img" aria-label={`Missing memory ${index + 1}`}>
          <span>Memory frame</span>
          <small>Photo will be added soon</small>
        </div>
      )}
      <figcaption>Memory {String(index + 1).padStart(2, '0')}</figcaption>
    </figure>
  );
}

export default function Gallery({ content }) {
  return (
    <section className="room reveal-room" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">{content.roomLabel}</p>
        <h2 id="gallery-title">{content.title}</h2>
        <p>{content.subtitle}</p>
      </div>
      <div className="gallery-track">
        {content.images.map((image, index) => (
          <GalleryImage src={image} index={index} key={image} />
        ))}
      </div>
    </section>
  );
}
