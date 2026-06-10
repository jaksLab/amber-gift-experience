import { useState } from 'react';
import ImageLightbox from './ImageLightbox.jsx';
import MemoryCarousel from './MemoryCarousel.jsx';

export default function Gallery({ content }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section className="room reveal-room memories-room" aria-labelledby="gallery-title">
      <div className="section-heading memories-heading">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="gallery-title">{content.title}</h2>
        <p>{content.subtitle}</p>
      </div>

      <div className="memories-grid">
        {content.memories.map((memory, index) => (
          <MemoryCarousel memory={memory} index={index} key={memory.title} onOpenImage={setLightboxImage} />
        ))}
      </div>

      <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </section>
  );
}
