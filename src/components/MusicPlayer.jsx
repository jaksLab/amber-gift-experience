import { useRef, useState } from 'react';

export default function MusicPlayer({ content, variant = 'room' }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

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
    <section className={`music-player music-player-${variant}`} aria-labelledby="music-title">
      <div className="music-copy">
        <p className="music-kicker">Music chamber</p>
        <h2 id="music-title">{content.title}</h2>
        <p>{content.text}</p>
      </div>

      {hasError ? (
        <p className="asset-message" role="status">{content.missingText}</p>
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
