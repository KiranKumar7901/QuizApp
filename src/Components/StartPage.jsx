import React from 'react';
import { Container, Title, InstructionText, Button, CategorySelect } from '../styles';

const StartPage = ({ onStart, categories, selectedCategory, onSelectCategory, numberOfQuestions, onSelectNumberOfQuestions }) => {
    return (
        <Container>
            <Title>Welcome to the Quiz App</Title>
            <CategorySelect onChange={onSelectCategory} value={selectedCategory}>
                <option value="">Select Category</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </CategorySelect>
            <CategorySelect onChange={onSelectNumberOfQuestions} value={numberOfQuestions}>
                <option value="">Number of Questions</option>
                <option value="5">5 Questions</option>
                <option value="10">10 Questions</option>
                <option value="15">15 Questions</option>
                <option value="20">20 Questions</option>
            </CategorySelect>
            <InstructionText>
                <p>Instructions:</p>
                <ul>
                    <li>You will be asked a series of multiple-choice questions.</li>
                    <li>Each question has a time limit of 15 seconds.</li>
                    <li>You can select your answer by clicking on one of the options.</li>
                    <li>Once you select an answer, you can click "Next" to move to the next question.</li>
                    <li>If you do not click "Next" and the timer runs out, the quiz will automatically move to the next question with your selected answer.</li>
                    <li>Your score will be displayed at the end of the quiz.</li>
                </ul>
                <p>Good luck!</p>
            </InstructionText>
            <Button onClick={onStart} disabled={!selectedCategory || !numberOfQuestions}>Start Quiz</Button>
        </Container>
    );
};

export default StartPage;
