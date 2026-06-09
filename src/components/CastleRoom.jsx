export default function CastleRoom({ content, id }) {
  return (
    <section className="room castle-room reveal-room" id={id} aria-labelledby={`${id}-title`}>
      <div className="room-shell arch-card">
        <p className="eyebrow">{content.roomLabel}</p>
        <h2 id={`${id}-title`}>{content.title}</h2>
        <p className="room-text">{content.text}</p>
      </div>
    </section>
  );
}
