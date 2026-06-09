import MusicPlayer from './MusicPlayer.jsx';

export default function Hero({ content, music, onEnter }) {
  return (
    <header className="hero" aria-label="Castle entrance">
      <div className="moon-glow" aria-hidden="true" />
      <div className="castle-door" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="hero-card">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p className="hero-subtitle">{content.subtitle}</p>
        <p className="hero-note">{content.smallText}</p>

        <div className="hero-actions">
          <button className="button button-gold" type="button" onClick={onEnter}>
            {content.button}
          </button>
        </div>

        <MusicPlayer content={music} variant="hero" />
      </div>
    </header>
  );
}
