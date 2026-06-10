import { useEffect } from 'react';

export default function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('lightbox-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('lightbox-open');
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="image-lightbox" role="presentation" onMouseDown={onClose}>
      <div
        className="lightbox-frame"
        role="dialog"
        aria-modal="true"
        aria-label={image.alt}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="lightbox-close" type="button" onClick={onClose} aria-label="Close enlarged memory">
          ×
        </button>
        <img src={image.src} alt={image.alt} />
        <div className="lightbox-caption">
          <p>{image.title}</p>
          <span>{image.caption}</span>
        </div>
      </div>
    </div>
  );
}
