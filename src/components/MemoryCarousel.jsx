import { useMemo, useState } from 'react';
import { asset } from '../data/content.js';

function MissingMemory({ title }) {
  return (
    <div className="memory-image-placeholder" role="img" aria-label={`Missing image for ${title}`}>
      <span>Memory waiting</span>
      <small>This photo needs a web-safe JPG upload.</small>
    </div>
  );
}

export default function MemoryCarousel({ memory, index, onOpenImage }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [missingImages, setMissingImages] = useState(() => new Set());
  const hasMultipleImages = memory.images.length > 1;

  const activeImage = memory.images[activeIndex];
  const activeSrc = useMemo(() => asset(activeImage), [activeImage]);
  const activeImageMissing = missingImages.has(activeImage);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? memory.images.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % memory.images.length);
  };

  const markMissing = (image) => {
    if (import.meta.env.DEV) {
      console.warn(`Missing or unsupported memory image: ${image}`);
    }
    setMissingImages((current) => {
      const next = new Set(current);
      next.add(image);
      return next;
    });
  };

  const openImage = () => {
    if (activeImageMissing) return;

    onOpenImage({
      src: activeSrc,
      alt: `${memory.title} memory ${activeIndex + 1}`,
      title: memory.title,
      caption: memory.caption
    });
  };

  return (
    <article className="memory-frame" style={{ '--memory-delay': `${index * 80}ms` }}>
      <div className="memory-frame-copy">
        <p className="memory-frame-kicker">Memory {String(index + 1).padStart(2, '0')}</p>
        <h3>{memory.title}</h3>
        <p>{memory.caption}</p>
      </div>

      <div className="memory-carousel" data-multiple={hasMultipleImages}>
        <button
          className="memory-photo-button"
          type="button"
          onClick={openImage}
          aria-label={`Enlarge ${memory.title} memory`}
          disabled={activeImageMissing}
        >
          {activeImageMissing ? (
            <MissingMemory title={memory.title} />
          ) : (
            <img
              key={activeImage}
              src={activeSrc}
              alt={`${memory.title} memory ${activeIndex + 1}`}
              loading={index < 2 ? 'eager' : 'lazy'}
              onError={() => markMissing(activeImage)}
            />
          )}
        </button>

        {hasMultipleImages && (
          <>
            <button className="memory-arrow memory-arrow-prev" type="button" onClick={showPrevious} aria-label={`Previous ${memory.title} image`}>
              ‹
            </button>
            <button className="memory-arrow memory-arrow-next" type="button" onClick={showNext} aria-label={`Next ${memory.title} image`}>
              ›
            </button>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div className="memory-dots" aria-label={`${memory.title} image selector`}>
          {memory.images.map((image, dotIndex) => (
            <button
              className={dotIndex === activeIndex ? 'memory-dot memory-dot-active' : 'memory-dot'}
              type="button"
              key={image}
              onClick={() => setActiveIndex(dotIndex)}
              aria-label={`Show ${memory.title} image ${dotIndex + 1}`}
              aria-current={dotIndex === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </article>
  );
}
