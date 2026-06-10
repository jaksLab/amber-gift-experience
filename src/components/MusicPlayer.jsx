import { useId, useRef, useState } from 'react';
import { useAssetAvailable } from '../utils/assets.js';

export default function MusicPlayer({ content, variant = 'room' }) {
  const titleId = useId();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const isAudioAvailable = useAssetAvailable(content.src, 'audio/');
  const showMissingAudio = hasError || isAudioAvailable === false;

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio || showMissingAudio || isAudioAvailable !== true) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setHasError(true);
      setIsPlaying(false);
    }
  };

  return (
    <section className={`music-player music-player-${variant}`} aria-labelledby={titleId}>
      <div className="music-copy">
        <p className="music-kicker">Music chamber</p>
        <h2 id={titleId}>{content.title}</h2>
        <p>{content.text}</p>
      </div>

      {showMissingAudio ? (
        <p className="asset-message" role="status">{content.missingText}</p>
      ) : isAudioAvailable === null ? (
        <p className="asset-message" role="status">Preparing the music chamber…</p>
      ) : (
        <>
          <audio
            ref={audioRef}
            src={content.src}
            preload="none"
            onError={() => setHasError(true)}
            onEnded={() => setIsPlaying(false)}
          />
          <button className="button button-ghost music-button" type="button" onClick={toggleMusic} aria-pressed={isPlaying}>
            {isPlaying ? content.pauseLabel : content.playLabel}
          </button>
        </>
      )}
    </section>
  );
}
