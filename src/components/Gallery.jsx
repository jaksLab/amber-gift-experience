import { useState } from 'react';

function GalleryImage({ src, index }) {
  const [missing, setMissing] = useState(false);

  return (
    <figure className="memory-card">
      {!missing ? (
        <img src={src} alt={`Amber memory ${index + 1}`} loading="lazy" onError={() => setMissing(true)} />
      ) : (
        <div className="image-placeholder" role="img" aria-label={`Missing memory ${index + 1}`}>
          <span>Photo coming soon</span>
        </div>
      )}
      <figcaption>Memory {index + 1}</figcaption>
    </figure>
  );
}

export default function Gallery({ content }) {
  return (
    <section className="room" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">Memories room</p>
        <h2 id="gallery-title">{content.title}</h2>
        <p>{content.subtitle}</p>
      </div>
      <div className="gallery-grid">
        {content.images.map((image, index) => (
          <GalleryImage src={image} index={index} key={image} />
        ))}
      </div>
    </section>
  );
}
