import { useRef, useState } from 'react';

export default function MusicPlayer({ content }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(Boolean(content.src));

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio || !audioAvailable) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setAudioAvailable(false);
      setIsPlaying(false);
    }
  };

  return (
    <section className="room music-room reveal-section" id="music" aria-labelledby="music-title">
      <div className="music-card">
        <p className="eyebrow">Music chamber</p>
        <h2 id="music-title">{content.title}</h2>
        <div className="music-orb" aria-hidden="true" />
        {audioAvailable ? (
          <>
            <audio
              ref={audioRef}
              src={content.src}
              preload="none"
              onError={() => setAudioAvailable(false)}
              onEnded={() => setIsPlaying(false)}
            />
            <button className="primary-button compact" type="button" onClick={toggleAudio} aria-pressed={isPlaying}>
              {isPlaying ? content.pauseLabel : content.playLabel}
            </button>
            <p className="soft-text">Manual only — the music begins when you choose it.</p>
          </>
        ) : (
          <div className="asset-fallback" role="status">Music will be added soon.</div>
        )}
      </div>
    </section>
  );
}
