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

      <ul className="process-tags" aria-label="Creation process details">
        {content.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>

      <div className="media-frame">
        {showMissingVideo ? (
          <div className="asset-placeholder" role="status">{content.missingText}</div>
        ) : isVideoAvailable === null ? (
          <div className="asset-placeholder" role="status">Preparing the process video…</div>
        ) : (
          <video
            controls
            playsInline
            preload="metadata"
            className="process-video"
            onError={() => setHasError(true)}
            aria-label="Gift creation process video"
          >
            <source src={content.videoSrc} type="video/mp4" onError={() => setHasError(true)} />
            {content.missingText}
          </video>
        )}
      </div>
    </section>
  );
}
