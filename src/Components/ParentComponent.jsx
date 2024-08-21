import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';

function ParentComponent() {
  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        console.log('Fetching questions...');
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple');
        const data = await response.json();
        console.log('Fetched data:', data);
        if (data.results) {
          setQuestions(data.results);
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleScore = (finalScore) => {
    setScore(finalScore);
    setQuizStarted(false);
  };

  return (
    <div>
      {quizStarted ? (
        <Quiz 
          questions={questions} 
          handleScore={handleScore} 
          resetQuiz={() => setQuizStarted(true)} 
        />
      ) : (
        <div>
          <h1>Welcome to the Quiz</h1>
          <button onClick={() => setQuizStarted(true)}>Start Quiz</button>
          {score !== null && <p>Your Score: {score}</p>}
        </div>
      )}
    </div>
  );
}

export default ParentComponent;
