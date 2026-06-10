import { useState } from 'react';

export default function AncientLetter({ content, onContinue }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openLastRoom = () => {
    setIsClosing(true);
    window.setTimeout(() => {
      onContinue();
    }, 420);
  };

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
        <article className={isClosing ? 'parchment parchment-closing' : 'parchment'}>
          <span className="wax-seal" aria-hidden="true">A</span>
          {content.body.split('\n').map((line, index) => (
            <p key={`${index}-${line}`}>{line || '\u00A0'}</p>
          ))}
          <div className="letter-continue">
            <button className="button button-gold" type="button" onClick={openLastRoom} disabled={isClosing}>
              {content.continueLabel}
            </button>
          </div>
        </article>
      )}
    </section>
  );
}
