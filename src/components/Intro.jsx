export default function Intro({ content, onOpen }) {
  return (
    <header className="intro" aria-label="Amber Gift Experience entrance">
      <div className="intro-card">
        <p className="eyebrow">Amber Gift Experience</p>
        <h1>{content.title}</h1>
        <p className="intro-subtitle">{content.subtitle}</p>
        <button className="gold-button" type="button" onClick={onOpen}>
          {content.button}
        </button>
      </div>
    </header>
  );
}
