const ornaments = ['✦', '☾', '❦', '✧', '◆', '✥'];

export default function AdorationList({ content }) {
  return (
    <section className="room reveal-room" aria-labelledby="adoration-title">
      <div className="section-heading">
        <p className="eyebrow">{content.roomLabel}</p>
        <h2 id="adoration-title">{content.title}</h2>
      </div>

      <div className="adoration-grid">
        {content.items.map((item, index) => (
          <article className="adoration-card" key={item}>
            <span aria-hidden="true">{ornaments[index % ornaments.length]}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
