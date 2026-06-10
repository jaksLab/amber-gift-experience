import { useId, useRef, useState } from 'react';
import { useAssetAvailable } from '../utils/assets.js';

export default function MusicPlayer({ content, variant = 'room' }) {
  const titleId = useId();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudioError, setHasAudioError] = useState(false);
  const [showYouTube, setShowYouTube] = useState(false);
  const isLocalAudioAvailable = useAssetAvailable(content.src, 'audio/');
  const canUseLocalAudio = isLocalAudioAvailable === true && !hasAudioError;
  const shouldUseYouTube = showYouTube || isLocalAudioAvailable === false || hasAudioError;

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!canUseLocalAudio || !audio) {
      setShowYouTube(true);
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setHasAudioError(true);
      setIsPlaying(false);
      setShowYouTube(true);
    }
  };

  return (
    <section className={`music-player music-player-${variant}`} aria-labelledby={titleId}>
      <div className="music-copy">
        <p className="music-kicker">Music chamber</p>
        <h2 id={titleId}>{content.title}</h2>
        <p>{content.text}</p>
      </div>

      {canUseLocalAudio && (
        <audio
          ref={audioRef}
          src={content.src}
          preload="none"
          onError={() => {
            setHasAudioError(true);
            setShowYouTube(true);
          }}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      <button className="button button-ghost music-button" type="button" onClick={toggleMusic} aria-pressed={isPlaying}>
        {canUseLocalAudio && isPlaying ? content.pauseLabel : content.playLabel}
      </button>

      {isLocalAudioAvailable === null && (
        <p className="asset-message" role="status">Preparing the music chamber…</p>
      )}

      {shouldUseYouTube && (
        <div className="youtube-music-card" role="group" aria-label="YouTube music player">
          <div className="youtube-music-copy">
            <span>{content.youtubeLabel}</span>
            <p>{content.youtubeText || content.missingText}</p>
          </div>
          <iframe
            title={content.title}
            src={content.youtubeEmbedSrc}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
    </section>
  );
}
