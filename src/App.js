import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategorySelection from './Components/CategorySelection';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import Leaderboard from './Components/Leaderboard';

function App() {
  const [category, setCategory] = useState('');
  const [questionCount, setQuestionCount] = useState(10);
  const [score, setScore] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategorySelection setCategory={setCategory} setQuestionCount={setQuestionCount} />} />
        <Route path="/quiz" element={<Quiz category={category} questionCount={questionCount} setScore={setScore} />} />
        <Route path="/result" element={<Result score={score} />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
