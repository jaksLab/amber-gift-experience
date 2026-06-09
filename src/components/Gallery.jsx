import { useState } from 'react';

function MemoryImage({ src, index }) {
  const [isMissing, setIsMissing] = useState(false);

  return (
    <figure className={`memory-card ${isMissing ? 'missing-memory' : ''}`}>
      {!isMissing ? (
        <img
          src={src}
          alt={`Amber gift memory ${index + 1}`}
          loading="lazy"
          onError={() => setIsMissing(true)}
        />
      ) : (
        <div className="image-placeholder" role="img" aria-label={`Placeholder for memory ${index + 1}`}>
          <span>Memory frame</span>
          <small>Photo will be added soon</small>
        </div>
      )}
      <figcaption>Memory {String(index + 1).padStart(2, '0')}</figcaption>
    </figure>
  );
}

export default function Gallery({ content }) {
  const images = content.images?.length ? content.images : [];

  return (
    <section className="room gallery-room reveal-section" id="memories" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">Memories room</p>
        <h2 id="gallery-title">{content.title}</h2>
        <p>{content.subtitle}</p>
      </div>
      <div className={`gallery-track ${images.length === 1 ? 'single-image' : ''}`}>
        {images.map((image, index) => (
          <MemoryImage src={image} index={index} key={`${image}-${index}`} />
        ))}
        {!images.length && <MemoryImage src="" index={0} />}
      </div>
    </section>
  );
}
