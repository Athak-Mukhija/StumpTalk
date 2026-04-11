import React, { useState } from "react";
import questions from "../data/questions";
import QuestionCard from "./QuestionCard";

function Quiz({ finishQuiz }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);

  function handleAnswer(selected) {
    if (selected === questions[currentQ].answer) {
      setScore(score + 1);
    }

    const next = currentQ + 1;

    if (next < questions.length) {
      setCurrentQ(next);
    } else {
      finishQuiz(score);
    }
  }

  return (
    <div>
      <QuestionCard
        question={questions[currentQ].question}
        options={questions[currentQ].options}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}

export default Quiz;