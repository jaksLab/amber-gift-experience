import { useRef, useState } from 'react';

export default function MusicPlayer({ content }) {
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
    <section className="room" aria-labelledby="music-title">
      <div className="room-card music-card">
        <p className="eyebrow">Music chamber</p>
        <h2 id="music-title">{content.title}</h2>

        {hasError ? (
          <div className="asset-placeholder compact-placeholder" role="status">Music will be added soon.</div>
        ) : (
          <>
            <audio
              ref={audioRef}
              src={content.src}
              preload="none"
              onError={() => setHasError(true)}
              onEnded={() => setIsPlaying(false)}
            />
            <button className="gold-button" type="button" onClick={toggleMusic} aria-pressed={isPlaying}>
              {isPlaying ? content.pauseLabel : content.playLabel}
            </button>
          </>
        )}
      </div>
    </section>
  );
}
