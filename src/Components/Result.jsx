import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const Score = styled.div`
  font-size: 2em;
  transition: all 0.5s ease-in-out;
`;

function Result({ score }) {
  const [name, setName] = useState('');

  const saveScore = () => {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard.slice(0, 10)));
  };

  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <div>
        <h1>Quiz Completed!</h1>
        <Score>Your Score: {score}</Score>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={saveScore}>Save Score</button>
      </div>
    </CSSTransition>
  );
}

export default Result;
