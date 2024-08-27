import React, { useState, useEffect } from 'react';
import { fetchQuestions, fetchCategories } from '../api';
import Question from './Question';
import Result from './Result';
import Review from './Review';
import StartPage from './StartPage';
import { Container, Title } from '../styles';
import { useParams } from 'react-router-dom';

const Quiz = () => {
    const { type } = useParams();
    const [categories, setCategories] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);
    const [reviewMode, setReviewMode] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    const [numberOfQuestions, setNumberOfQuestions] = useState();

    useEffect(() => {
        const loadCategories = async () => {
            const categories = await fetchCategories();
            setCategories(categories);
        };
        loadCategories();
    }, []);

    useEffect(() => {
        const loadQuestions = async () => {
            const questions = await fetchQuestions(type, numberOfQuestions);
            setQuestions(questions);
        };
        loadQuestions();
    }, [type]);

    const startQuiz = async () => {
        const questions = await fetchQuestions(selectedCategory, numberOfQuestions);
        setQuestions(questions);
        setScore(0);
        setCurrentQuestionIndex(0);
        setQuizCompleted(false);
        setQuizStarted(true);
        setUserAnswers([]); // Reset user answers
    };

    const handleAnswer = (correct) => {
        if (correct) {
            setScore(score + 1);
        }
        setUserAnswers([...userAnswers, correct]);
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleReview = () => {
        setReviewMode(true);
    };

    const handleBackToResults = () => {
        setReviewMode(false);
    };

    const handleRestart = () => {
      setQuizStarted(false);
      setReviewMode(false);
      setQuestions([]);
      setCurrentQuestionIndex(0);
      setScore(0);
      setUserAnswers([]);
  };
  
    return (
        <Container>
            <Title>Quiz App</Title>
            {!quizStarted ? (
                <StartPage
                    onStart={startQuiz}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={(e) => setSelectedCategory(e.target.value)}
                    numberOfQuestions={numberOfQuestions}
                    onSelectNumberOfQuestions={(e) => setNumberOfQuestions(e.target.value)}
                />
            ) : reviewMode ? (
                <Review 
                    questions={questions} 
                    userAnswers={userAnswers} 
                    onBackToResults={handleBackToResults} 
                />
            ) : quizCompleted ? (
                <Result score={score} 
                        total={questions.length} 
                        onReview={handleReview} 
                        onRestart={handleRestart} 
                        category={categories.find(cat => cat.id === Number(selectedCategory))?.name} 
                />
            ) : questions.length > 0 ? (
                <Question
                    question={questions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                    current={currentQuestionIndex + 1}
                    total={questions.length}
                    onNext={handleNext}
                    category={categories.find(cat => cat.id === Number(selectedCategory))?.name}
                />
            ) : null}
        </Container>
    );
};

export default Quiz;
