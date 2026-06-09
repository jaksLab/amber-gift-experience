import { useState } from 'react';

export default function AncientLetter({ content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="room letter-room reveal-section" id="letter" aria-labelledby="letter-title">
      <div className="section-heading">
        <p className="eyebrow">Ancient letter room</p>
        <h2 id="letter-title">{content.title}</h2>
      </div>
      <button className="secondary-button wax-button" type="button" onClick={() => setIsOpen(true)} aria-expanded={isOpen}>
        {content.button}
      </button>
      <article className={`parchment ${isOpen ? 'parchment-open' : ''}`} aria-hidden={!isOpen}>
        <span className="wax-seal" aria-hidden="true">A</span>
        <div className="letter-copy">
          {content.body.split('\n').map((line, index) => (
            <p key={`${line}-${index}`}>{line || '\u00A0'}</p>
          ))}
        </div>
      </article>
    </section>
  );
}
