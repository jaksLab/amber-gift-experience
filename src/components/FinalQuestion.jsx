import { useState } from 'react';

export default function FinalQuestion({ content, id }) {
  const [answered, setAnswered] = useState(false);
  const [noClicks, setNoClicks] = useState(0);
  const noLabelIndex = Math.min(noClicks, content.noLabels.length - 1);
  const noButtonStyle = {
    '--no-scale': Math.max(0.48, 1 - noClicks * 0.12),
    '--no-shift-x': `${Math.min(noClicks * 0.35, 1.35)}rem`,
    '--no-shift-y': `${noClicks % 2 === 0 ? '-' : ''}${Math.min(noClicks * 0.12, 0.48)}rem`
  };

  const teaseNo = () => {
    setNoClicks((current) => Math.min(current + 1, content.noLabels.length - 1));
  };

  return (
    <section className="room final-room reveal-room final-room-unlocked" id={id} aria-labelledby="final-title">
      <div className="room-shell final-card">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id="final-title">{content.title}</h2>
        <p className="room-text">{content.text}</p>

        <div className="question-panel">
          <h3>{content.question}</h3>
          {!answered ? (
            <div className="answer-buttons answer-buttons-playful">
              <button className="button button-gold answer-yes" type="button" onClick={() => setAnswered(true)}>
                {content.yesLabel}
              </button>
              <button
                className={`button button-ghost answer-no answer-no-${noLabelIndex}`}
                type="button"
                onClick={teaseNo}
                style={noButtonStyle}
                aria-label={`Playful no response: ${content.noLabels[noLabelIndex]}`}
              >
                {content.noLabels[noLabelIndex]}
              </button>
            </div>
          ) : (
            <div className="answer-response" role="status">
              <p>{content.acceptedMessage}</p>
              <p>{content.acceptedSubtext}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
