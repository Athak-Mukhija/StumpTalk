import React, { useState, useEffect } from "react";
import questions from "./Questions";
import QuestionCard from "./QuestionCard";
import "./styles.css";

// 🔊 Sounds
const correctSound = new Audio("/sounds/correct.mp3");
const wrongSound = new Audio("/sounds/wrong.mp3");

function QuizPage() {
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(getRandomQuestion([]));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [totalTime, setTotalTime] = useState(0);
  const [timeTaken, setTimeTaken] = useState([]);
  const [questionStartTime, setQuestionStartTime] = useState(0);

  const [mode, setMode] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);

  const [totalQuestions, setTotalQuestions] = useState(0);
  const [highScore, setHighScore] = useState(0);
const [newHigh, setNewHigh] = useState(false);
const [noMoreQuestions, setNoMoreQuestions] = useState(false);

  // 🎲 Random Question
  function getRandomQuestion(used) {
  const remaining = questions.filter(q => !used.includes(q));

  if (remaining.length === 0) {
    return null; // 🔥 IMPORTANT
  }

  return remaining[Math.floor(Math.random() * remaining.length)];
}

  // 🔊 Safe sound
  function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }

  // ⏱️ Total Timer
  useEffect(() => {
    if (gameOver || !mode) return;

    const timer = setInterval(() => {
      setTotalTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameOver, mode]);

  // ⚡ Speed Mode Timer
  useEffect(() => {
    if (gameOver || mode !== "speed") return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);


    return () => clearInterval(timer);
  }, [gameOver, mode]);


useEffect(() => {
  if (!gameOver) return;

  const key =
    mode === "survival"
      ? "highScore_survival"
      : "highScore_speed";

  if (score > highScore) {
    localStorage.setItem(key, score);
    setHighScore(score);
    setNewHigh(true);
  }
}, [gameOver, score, highScore, mode]); // ✅ FIXED

useEffect(() => {
  if (!mode) return;

  const key = mode === "survival" ? "highScore_survival" : "highScore_speed";
  const stored = localStorage.getItem(key) || 0;

  setHighScore(Number(stored));
}, [mode]);


function handleAnswer(selected) {
  const newUsed = [...usedQuestions, currentQ];

  setTotalQuestions(prev => prev + 1);

  if (selected === currentQ.answer) {
    playSound(correctSound);

    const timeForThisQ = totalTime - questionStartTime;

    setTimeTaken(prev => [...prev, timeForThisQ]);
    setQuestionStartTime(totalTime);

    setScore(prev => prev + 1);
  } else {
    playSound(wrongSound);

    if (mode === "survival") {
      setGameOver(true);
      return;
    }
    // speed mode → continue
  }

  // 🎯 Get next question ONCE
  const nextQ = getRandomQuestion(newUsed);

  if (!nextQ) {
    setGameOver(true);
    setNoMoreQuestions(true);
    return;
  }

  // ✅ Update states properly
  setUsedQuestions(newUsed);
  setCurrentQ(nextQ);
}


  // 🔁 Restart
  function restartGame() {
    setScore(0);
    setGameOver(false);
    setUsedQuestions([]);
    setTimeTaken([]);
    setTotalTime(0);
    setQuestionStartTime(0);
    setTimeLeft(60);
    setMode(null);
    setCurrentQ(getRandomQuestion([]));
    setTotalQuestions(0);
setNewHigh(false);
setNoMoreQuestions(false);
  }

  // 📊 Avg Time
  const avgTime =
    timeTaken.length > 0
      ? (timeTaken.reduce((a, b) => a + b, 0) / timeTaken.length).toFixed(2)
      : 0;

      const accuracy =
  totalQuestions > 0
    ? ((score / totalQuestions) * 100).toFixed(1)
    : 0;

  // 🎮 Mode Selection Screen
  if (!mode) {
    return (
      <div className="container">
        <h1>🏏 Cricket Quiz</h1>

        <div className="card">
          <h2>Select Mode</h2>

          <button onClick={() => setMode("survival")}>
            💀 Survival Mode
          </button>

          <button onClick={() => setMode("speed")}>
            ⚡ Speed Run (60s)
          </button>

          
        </div>
      </div>
    );
  }

  return (
    <div className={`container ${gameOver ? "game-over" : ""}`}>
      <h1>🏏 Cricket Quiz</h1>

      {!gameOver ? (
        <>
          {mode === "speed" ? (
            <h4>⏱️ Time Left: {timeLeft}s</h4>
          ) : (
            <h4>⏱️ Total Time: {totalTime}s</h4>
          )}

          <h3>Score: {score}</h3>
          <h3>🏆 High Score: {highScore}</h3>

          <QuestionCard
            question={currentQ.question}
            options={currentQ.options}
            handleAnswer={handleAnswer}
          />
        </>
      ) : (
        <div className="card">
          <h2>💀 Game Over</h2>
          {noMoreQuestions && (
  <h2 style={{ color: "orange" }}>
    🚀 You finished all questions! Too fast!
  </h2>
)}
          <h3>Your Score: {score}</h3>
          <h3>Avg Time per Question: {avgTime}s</h3>
          {mode === "speed" && (
  <>
    <h3>Questions Attempted: {totalQuestions}</h3>
    <h3>Accuracy: {accuracy}%</h3>
  </>
)}


          <p>
            {score === 0
              ? "😅 No correct answers yet!"
              : avgTime < 3
              ? "⚡ Lightning Fast!"
              : avgTime < 6
              ? "🔥 Good Speed!"
              : "🐢 Try Faster!"}
          </p>

          {newHigh && <h2 className="new-high">🎉 NEW HIGH SCORE!</h2>}

          <button className="play-btn" onClick={restartGame}>
            🔁 Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizPage;