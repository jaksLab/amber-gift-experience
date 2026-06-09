export default function Welcome({ content }) {
  return (
    <section className="room welcome-room reveal-section" id="welcome" aria-labelledby="welcome-title">
      <div className="room-card candle-card">
        <p className="eyebrow">Welcome room</p>
        <h2 id="welcome-title">{content.title}</h2>
        <p className="lead-text">{content.text}</p>
        <p className="soft-text">{content.subtext}</p>
      </div>
    </section>
  );
}
