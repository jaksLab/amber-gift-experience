import { useState } from 'react';

export default function ProcessVideo({ content }) {
  const [videoAvailable, setVideoAvailable] = useState(Boolean(content.videoSrc));

  return (
    <section className="room process-room reveal-section" id="process" aria-labelledby="process-title">
      <div className="section-heading">
        <p className="eyebrow">Creation process room</p>
        <h2 id="process-title">{content.title}</h2>
        <p>{content.text}</p>
      </div>

      <div className="gothic-media-frame video-frame">
        {videoAvailable ? (
          <video
            className="process-video"
            controls
            preload="metadata"
            playsInline
            onError={() => setVideoAvailable(false)}
            aria-label="Gift creation process video"
          >
            <source src={content.videoSrc} type="video/mp4" onError={() => setVideoAvailable(false)} />
            The video will be added soon.
          </video>
        ) : (
          <div className="asset-fallback" role="status">The video will be added soon.</div>
        )}
      </div>

      <p className="below-note">{content.subtext}</p>
    </section>
  );
}
