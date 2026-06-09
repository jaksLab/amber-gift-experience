import { useState } from 'react';

export default function FinalQuestion({ content }) {
  const [showQuestion, setShowQuestion] = useState(false);
  const [answered, setAnswered] = useState(false);

  return (
    <section className="room final-room reveal-section" id="final-question" aria-labelledby="final-title">
      <div className="final-card">
        <p className="eyebrow">Final question room</p>
        <p className="final-intro">{content.intro}</p>

        {!showQuestion && (
          <button className="primary-button" type="button" onClick={() => setShowQuestion(true)}>
            {content.continueButton}
          </button>
        )}

        {showQuestion && (
          <div className="question-panel final-reveal">
            <h2 id="final-title">{content.question}</h2>
            {!answered ? (
              <div className="answer-buttons" aria-label="Answer options">
                <button className="primary-button" type="button" onClick={() => setAnswered(true)}>
                  {content.yesButton}
                </button>
                <button className="secondary-button" type="button" onClick={() => setAnswered(true)}>
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
