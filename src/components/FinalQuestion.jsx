import { useState } from 'react';

export default function FinalQuestion({ content, id }) {
  const [answered, setAnswered] = useState(false);

  return (
    <section className="room final-room reveal-room final-room-unlocked" id={id} aria-labelledby="final-title">
      <div className="room-shell final-card">
        <p className="eyebrow">{content.roomLabel}</p>
        <h2 id="final-title">{content.title}</h2>
        <p className="room-text">{content.text}</p>

        <div className="question-panel">
          <h3>{content.question}</h3>
          {!answered ? (
            <div className="answer-buttons">
              <button className="button button-gold" type="button" onClick={() => setAnswered(true)}>
                {content.yesButton}
              </button>
              <button className="button button-ghost" type="button" onClick={() => setAnswered(true)}>
                {content.ofCourseButton}
              </button>
            </div>
          ) : (
            <div className="answer-response" role="status">
              <p>{content.response}</p>
              <p>{content.forever}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
