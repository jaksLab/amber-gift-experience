import { useState } from 'react';

export default function AncientLetter({ content, closing }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="room reveal-room" aria-labelledby="letter-title">
      <div className="section-heading">
        <p className="eyebrow">{content.roomLabel}</p>
        <h2 id="letter-title">{content.title}</h2>
      </div>

      <button className="button button-ghost" type="button" onClick={() => setIsOpen(true)} aria-expanded={isOpen}>
        {content.button}
      </button>

      {isOpen && (
        <article className="parchment">
          <span className="wax-seal" aria-hidden="true">A</span>
          {content.body.split('\n').map((line, index) => (
            <p key={`${index}-${line}`}>{line || '\u00A0'}</p>
          ))}
          {closing && (
            <aside className="letter-final-message" aria-labelledby="closing-title">
              <p className="eyebrow">{closing.eyebrow}</p>
              <h3 id="closing-title">{closing.title}</h3>
              {closing.message.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="letter-final-signature">{closing.signature}</p>
            </aside>
          )}
        </article>
      )}
    </section>
  );
}
