import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['Science', 'Math', 'History', 'Sports'];

function CategorySelection({ setCategory, setQuestionCount }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  const startQuiz = () => {
    setCategory(selectedCategory);
    setQuestionCount(count);
    navigate('/quiz');
  };

  return (
    <div>
      <h1>Select Category</h1>
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="" disabled>Select a category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <h2>Select Number of Questions</h2>
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />

      <button onClick={startQuiz} disabled={!selectedCategory}>Start Quiz</button>
    </div>
  );
}

export default CategorySelection;
