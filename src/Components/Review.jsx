import React from 'react';
import { decodeHtml } from "../utils/decodeHtml";

const Review = ({ questions, userAnswers, onBackToResults }) => {
    var qno = 1;

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', borderRadius: '10px', backgroundColor: '#f4f4f4' }}>
            <h2>Review Your Answers</h2>
            <h3>Answer of all the Questions irrespective of wrong answers</h3>
            {questions.map((question, index) => {
                const correctAnswer = question.correct_answer;
                const userAnswer = userAnswers[index];
                
                return (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h3 style={{ color: '#333', marginBottom: '10px', textAlign: 'left' }}>{qno++}. {decodeHtml(question.question)}</h3>
                        {question.incorrect_answers.concat(correctAnswer).sort().map((answer) => {

                            const isSelected = answer === userAnswer;
                            const isCorrect = answer === correctAnswer;
                            const isIncorrect = isSelected && !isCorrect;
                            
                            // Inline styles for AnswerOption
                            const answerStyle = {
                                display: 'block',
                                width: '100%',
                                margin: '10px 0',
                                padding: '10px',
                                backgroundColor: isSelected
                                    ? (isIncorrect ? '#f8d7da':'#d4edda') // Red for selected wrong, Green for selected correct
                                    : (isCorrect? '#d4edda' : '#f4f4f4'), // Green for correct, default otherwise
                                color: isSelected ? '#fff' : '#333',
                                border: '2px solid #ddd',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                textAlign: 'left'
                            };

                            return (
                                <button
                                    key={answer}
                                    style={answerStyle}
                                    disabled={true} // Disable buttons to prevent interaction
                                >
                                    {decodeHtml(answer)}
                                </button>
                            );
                        })}
                    </div>
                );
            })}
            <button
                onClick={onBackToResults}
                style={{ padding: '15px 30px', fontSize: '18px', color: '#fff', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}
            >
                Back to Results
            </button>
        </div>
    );
};

export default Review;
