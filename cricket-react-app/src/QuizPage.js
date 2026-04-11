import React, { useState } from "react";
import questions from "./Questions";
import QuestionCard from "./QuestionCard";
import ScoreBoard from "./ScoreBoard";
import "./styles.css";

function QuizPage() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function handleAnswer(selected) {
    if (selected === questions[index].answer) {
      setScore(score + 1);
    }

    const next = index + 1;

    if (next < questions.length) {
      setIndex(next);
    } else {
      setFinished(true);
    }
  }

  return (
    <div className="container">
      <h1>🏏 Cricket Quiz</h1>

      {finished ? (
        <ScoreBoard score={score} total={questions.length} />
      ) : (
        <QuestionCard
          question={questions[index].question}
          options={questions[index].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default QuizPage;