import { useState } from 'react';
import { useAssetAvailable } from '../utils/assets.js';

export default function ProcessVideo({ content }) {
  const [hasError, setHasError] = useState(false);
  const videoSrc = `${import.meta.env.BASE_URL}${content.videoSrc}`;
  const isVideoAvailable = useAssetAvailable(videoSrc, 'video/');
  const showFallback = hasError || isVideoAvailable === false;

  return (
    <section className="room reveal-room" aria-labelledby="process-title">
      <div className="section-heading">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="process-title">{content.title}</h2>
        <p>{content.text}</p>
      </div>

      <ul className="process-tags" aria-label="Gift details">
        {content.tags.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>

      <div className="media-frame" aria-label={content.videoTitle}>
        <div className="media-frame-copy">
          <p>{content.videoTitle}</p>
          <span>{content.videoDescription}</span>
        </div>
        {showFallback ? (
          <div className="asset-placeholder" role="status">{content.videoFallback}</div>
        ) : isVideoAvailable === null ? (
          <div className="asset-placeholder" role="status">A little glimpse is being prepared…</div>
        ) : (
          <video
            className="process-video creation-video"
            src={videoSrc}
            controls
            playsInline
            preload="metadata"
            onError={() => setHasError(true)}
            aria-label={content.videoTitle}
          >
            Sorry, your browser does not support this video.
          </video>
        )}
      </div>
    </section>
  );
}
