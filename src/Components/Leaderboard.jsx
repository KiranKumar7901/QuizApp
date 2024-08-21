import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
    setLeaderboard(storedScores);
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {leaderboard.map((entry, index) => (
          <li key={index}>{entry.name}: {entry.score}</li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;
