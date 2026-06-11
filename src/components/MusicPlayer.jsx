import { useId, useRef, useState } from 'react';

export default function MusicPlayer({ content, variant = 'room' }) {
  const titleId = useId();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioSrc = `${import.meta.env.BASE_URL}${content.src}`;

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

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
        <p className="music-kicker">{content.eyebrow}</p>
        <h2 id={titleId}>{content.title}</h2>
        <p>{content.description}</p>
      </div>

      <audio
        ref={audioRef}
        src={audioSrc}
        preload="none"
        onError={() => {
          setHasError(true);
          setIsPlaying(false);
        }}
        onEnded={() => setIsPlaying(false)}
      />

      {hasError ? (
        <p className="asset-message" role="status">Music will be added soon.</p>
      ) : (
        <button className="button button-ghost music-button" type="button" onClick={toggleMusic} aria-pressed={isPlaying}>
          {isPlaying ? content.pauseLabel : content.playLabel}
        </button>
      )}
    </section>
  );
}
