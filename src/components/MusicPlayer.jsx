import { useId, useRef, useState } from 'react';
import { asset } from '../data/content.js';
import { useAssetAvailable } from '../utils/assets.js';

export default function MusicPlayer({ content, variant = 'room' }) {
  const titleId = useId();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioSrc = asset(content.src);
  const isAudioAvailable = useAssetAvailable(audioSrc, 'audio/');

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio || isAudioAvailable === false) {
      setHasError(true);
      setIsPlaying(false);
      return;
    }

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        return;
      }

      audio.volume = 0.65;
      await audio.play();
      setHasError(false);
      setIsPlaying(true);
    } catch (error) {
      console.error('Audio play failed:', error);
      setHasError(true);
      setIsPlaying(false);
    }
  };

  return (
    <section className={`music-player music-player-${variant}`} aria-labelledby={titleId}>
      <div className="music-copy">
        <p className="music-kicker">{content.eyebrow}</p>
        <h2 id={titleId}>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <audio
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        loop
        onError={() => {
          setHasError(true);
          setIsPlaying(false);
        }}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {isAudioAvailable === null && (
        <p className="asset-message" role="status">Preparing the music chamber…</p>
      )}

      {isAudioAvailable !== false && (
        <button className="button button-ghost music-button" type="button" onClick={toggleMusic} aria-pressed={isPlaying}>
          {isPlaying ? content.pauseLabel : content.playLabel}
        </button>
      )}

      {(hasError || isAudioAvailable === false) && (
        <p className="asset-message music-error" role="status">
          Music could not load yet.
        </p>
      )}
    </section>
  );
}
