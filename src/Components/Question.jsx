import React, { useCallback, useState, useEffect } from 'react';
import { QuestionContainer, QuestionText, AnswerOption, Timer, Button } from '../styles';
import {decodeHtml} from "../utils/decodeHtml";

const Question = ({ question, onAnswer, current, total, onNext, category }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [timeLeft, setTimeLeft] = useState(15);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        setTimeLeft(15); // Reset the timer for each new question
        setIsAnswered(false); // Reset the answer state for each new question
        setSelectedAnswer(''); // Clear the selected answer
    }, [question]);

    const handleNext = useCallback(() => {
        setTimeout(() => {
            onNext(); // Move to the next question after a brief pause
        }, 500); // Delay to show the selected answer
    }, [onNext]); // Include onNext in the dependency array

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            handleNext();
        }
    }, [timeLeft,handleNext]);

    const handleAnswer = (answer) => {
        if (!isAnswered) {
            setSelectedAnswer(answer);
            setIsAnswered(true);
            onAnswer(answer === question.correct_answer);
        }
    };


    return (
        <>
        {category && <h3 style={{ textAlign: 'center', color: '#555' }}>{category}</h3>}
        <QuestionContainer>
            <QuestionText>
            {current}/{total}: {decodeHtml(question.question)}
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
                        {decodeHtml(answer)}
                    </AnswerOption>
                ))}
            <Timer>Time Left: {timeLeft}s</Timer>
            <Button onClick={handleNext} disabled={!isAnswered && timeLeft > 0}>
                Next
            </Button>
        </QuestionContainer>
        </>
    );
};

export default Question;
