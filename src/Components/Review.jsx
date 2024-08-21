import React from 'react';
import { Container, QuestionText, AnswerOption, Button } from '../styles';

const Review = ({ questions, userAnswers, onBackToResults }) => {
    return (
        <Container>
            <h2>Review Your Answers</h2>
            {questions.map((question, index) => {
                const correctAnswer = question.correct_answer;
                const userAnswer = userAnswers[index];

                return (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <QuestionText>{question.question}</QuestionText>
                        {question.incorrect_answers.concat(correctAnswer).sort().map((answer) => (
                            <AnswerOption
                                key={answer}
                                correct={answer === correctAnswer}
                                incorrect={answer === userAnswer && answer !== correctAnswer}
                                selected={answer === userAnswer}
                            >
                                {answer}
                            </AnswerOption>
                        ))}
                    </div>
                );
            })}
            <Button onClick={onBackToResults}>Back to Results</Button>
        </Container>
    );
};

export default Review;
