import React, { useState } from 'react';

function Question({ data, handleAnswer, currentQuestion, questionCount }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [...data.incorrect_answers, data.correct_answer].sort();

  const selectOption = (option) => {
    setSelectedOption(option);
    handleAnswer({
      answer: option,
      isCorrect: option === data.correct_answer,
    });
  };

  return (
    <div>
      <h2>{`Question ${currentQuestion + 1} of ${questionCount}`}</h2>
      <p>{data.question}</p>
      <div>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => selectOption(option)}
            style={{ backgroundColor: selectedOption === option ? 'lightblue' : 'white' }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
