import React from 'react';
import { Container, Title, Button } from '../styles';

const Result = ({ score, total, onReview, onRestart }) => {
    return (
        <Container>
            <Title>Quiz Completed!</Title>
            <p>Your score: {score} out of {total}</p>
            <Button onClick={onReview}>Review Answers</Button>
            <Button onClick={onRestart}>Restart Quiz</Button>
        </Container>
    );
};

export default Result;
