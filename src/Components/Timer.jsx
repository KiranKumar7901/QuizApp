import React, { useEffect, useState } from 'react';

function Timer({ nextQuestion }) {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      nextQuestion();
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, nextQuestion]);

  return (
    <div>
      <p>Time Left: {timeLeft}s</p>
    </div>
  );
}

export default Timer;
