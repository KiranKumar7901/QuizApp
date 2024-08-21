import React, { useState } from 'react';
import Question from './Question';
import Timer from './Timer';

function Quiz({ questions, handleScore, resetQuiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Ensure that questions are defined and not an empty array
  if (!questions || questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  const handleAnswer = (answerData) => {
    if (answerData.isCorrect) {
      setScore(score + 1);
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      handleScore(score + (answerData.isCorrect ? 1 : 0));
    }
  };

  return (
    <div>
      <Timer nextQuestion={() => handleAnswer({ isCorrect: false })} />
      <Question
        data={questions[currentQuestionIndex]}
        handleAnswer={handleAnswer}
        currentQuestion={currentQuestionIndex}
        questionCount={questions.length}
      />
    </div>
  );
}

export default Quiz;
