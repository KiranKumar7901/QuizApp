// src/components/Question.js
import React, { useState, useEffect } from 'react';
import { QuestionContainer, QuestionText, AnswerOption, Timer, Button } from '../styles';

const Question = ({ question, onAnswer, current, total, onNext }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [timeLeft, setTimeLeft] = useState(15);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        setTimeLeft(15); // Reset the timer for each new question
        setIsAnswered(false); // Reset the answer state for each new question
        setSelectedAnswer(''); // Clear the selected answer
    }, [question]);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            handleNext();
        }
    }, [timeLeft]);

    const handleAnswer = (answer) => {
        if (!isAnswered) {
            setSelectedAnswer(answer);
            setIsAnswered(true);
            onAnswer(answer === question.correct_answer);
        }
    };

    const handleNext = () => {
        setTimeout(() => {
            onNext(); // Move to the next question after a brief pause
        }, 500); // Delay to show the selected answer
    };

    return (
        <QuestionContainer>
            <QuestionText>
                {current}/{total}: {question.question}
            </QuestionText>
            {question.incorrect_answers.concat(question.correct_answer)
                .sort()
                .map((answer) => (
                    <AnswerOption
                        key={answer}
                        selected={selectedAnswer === answer}
                        onClick={() => handleAnswer(answer)}
                        disabled={isAnswered} // Disable options only after an answer is selected
                    >
                        {answer}
                    </AnswerOption>
                ))}
            <Timer>Time Left: {timeLeft}s</Timer>
            <Button onClick={handleNext} disabled={!isAnswered && timeLeft > 0}>
                Next
            </Button>
        </QuestionContainer>
    );
};

export default Question;
