import { useState } from 'react';
import { useAssetAvailable } from '../utils/assets.js';

export default function ProcessVideo({ content }) {
  const [hasError, setHasError] = useState(false);
  const isVideoAvailable = useAssetAvailable(content.videoSrc, 'video/');
  const showMissingVideo = hasError || isVideoAvailable === false;

  return (
    <section className="room reveal-room" aria-labelledby="process-title">
      <div className="section-heading">
        <p className="eyebrow">{content.roomLabel}</p>
        <h2 id="process-title">{content.title}</h2>
        <p>{content.text}</p>
      </div>

      <ul className="process-tags" aria-label="Gift details">
        {content.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>

      <div className="media-frame" aria-label={content.videoLabel}>
        <div className="media-frame-copy">
          <p>{content.videoLabel}</p>
          <span>{content.videoDescription}</span>
        </div>
        {showMissingVideo ? (
          <div className="asset-placeholder" role="status">{content.missingText}</div>
        ) : isVideoAvailable === null ? (
          <div className="asset-placeholder" role="status">A little glimpse is being prepared…</div>
        ) : (
          <video
            controls
            playsInline
            preload="metadata"
            className="process-video"
            onError={() => setHasError(true)}
            aria-label={content.videoLabel}
          >
            <source src={content.videoSrc} type="video/mp4" onError={() => setHasError(true)} />
            {content.missingText}
          </video>
        )}
      </div>
    </section>
  );
}
