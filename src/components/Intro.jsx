export default function Intro({ content, isOpen, onOpen }) {
  return (
    <section className={`intro castle-entrance ${isOpen ? 'intro-open' : ''}`} aria-label="Castle entrance">
      <div className="castle-door" aria-hidden="true">
        <span className="door-panel left" />
        <span className="door-panel right" />
      </div>
      <div className="intro-glow" aria-hidden="true" />
      <div className="intro-content cinematic-reveal">
        <p className="eyebrow">Amber Gift Experience</p>
        <h1>{content.title}</h1>
        <p className="intro-subtitle">{content.subtitle}</p>
        <button className="primary-button" type="button" onClick={onOpen} aria-controls="castle-rooms">
          {content.button}
        </button>
      </div>
    </section>
  );
}
