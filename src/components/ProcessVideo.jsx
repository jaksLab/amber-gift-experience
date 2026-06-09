import { useState } from 'react';

export default function ProcessVideo({ content }) {
  const [hasError, setHasError] = useState(false);

  return (
    <section className="room" aria-labelledby="process-title">
      <div className="section-heading">
        <p className="eyebrow">Creation process room</p>
        <h2 id="process-title">{content.title}</h2>
        <p>{content.text}</p>
      </div>

      <div className="media-frame">
        {!hasError ? (
          <video
            controls
            playsInline
            preload="metadata"
            className="process-video"
            onError={() => setHasError(true)}
            aria-label="Gift creation process video"
          >
            <source src={content.videoSrc} type="video/mp4" />
            The video will be added soon.
          </video>
        ) : (
          <div className="asset-placeholder" role="status">The video will be added soon.</div>
        )}
      </div>

      <p className="below-note">{content.subtext}</p>
    </section>
  );
}
