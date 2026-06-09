import { useState } from 'react';

export default function FinalQuestion({ content }) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [answered, setAnswered] = useState(false);

  return (
    <section className="room final-room" aria-labelledby="final-title">
      <div className="room-card final-card">
        <p className="eyebrow">Final question room</p>
        <p className="lead-text">{content.intro}</p>

        {!showQuestion && (
          <button className="gold-button" type="button" onClick={() => setShowQuestion(true)}>
            {content.continueButton}
          </button>
        )}

        {showQuestion && (
          <div className="question-panel">
            <h2 id="final-title">{content.question}</h2>
            {!answered ? (
              <div className="answer-buttons">
                <button className="gold-button" type="button" onClick={() => setAnswered(true)}>
                  {content.yesButton}
                </button>
                <button className="outline-button" type="button" onClick={() => setAnswered(true)}>
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
        )}
      </div>
    </section>
  );
}
