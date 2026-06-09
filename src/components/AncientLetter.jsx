import { useState } from 'react';

export default function AncientLetter({ content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="room" aria-labelledby="letter-title">
      <div className="section-heading">
        <p className="eyebrow">Ancient letter room</p>
        <h2 id="letter-title">{content.title}</h2>
      </div>

      <button className="outline-button" type="button" onClick={() => setIsOpen(true)} aria-expanded={isOpen}>
        {content.button}
      </button>

      {isOpen && (
        <article className="parchment">
          <span className="wax-seal" aria-hidden="true">A</span>
          {content.body.split('\n').map((line, index) => (
            <p key={`${index}-${line}`}>{line || '\u00A0'}</p>
          ))}
        </article>
      )}
    </section>
  );
}
