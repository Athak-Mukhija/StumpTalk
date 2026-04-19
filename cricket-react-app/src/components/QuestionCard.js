import React from "react";

function QuestionCard({ question, options, handleAnswer }) {
  return (
    <div className="card">
      <h2>{question}</h2>

      {options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default QuestionCard;