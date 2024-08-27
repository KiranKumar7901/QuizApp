import React, {useEffect, useState} from 'react';
import { Container, Title, Button } from '../styles';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Result = ({ score, total, onReview, onRestart,category }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0); // Start at 0%
    const percentage = (score / total) * 100;

    useEffect(() => {
        // Animate progress to the final percentage over 2-3 seconds
        const timeout = setTimeout(() => {
            setAnimatedProgress(percentage);
        }, 100); // Small delay before starting the animation
        return () => clearTimeout(timeout);
    }, [percentage]);

    return (
        <Container style={{ textAlign: 'center' }}>
            <Title>Quiz Completed!</Title>
            {category && <h3 style={{ textAlign: 'center', color: '#555' }}>{category}</h3>}
            <div style={{ width: 150, margin: '20px auto' }}>
                <CircularProgressbar 
                    value={animatedProgress} 
                    text={`${Math.round(animatedProgress)}%`} 
                    styles={buildStyles({
                        textColor: '#333',
                        pathColor: '#007bff', // Blue color for the progress
                        trailColor: '#ccc',   // Light grey color for the full circle
                        pathTransitionDuration: 2.5, // Animation duration for filling
                        strokeLinecap: 'butt', // Flat edges for the progress bar
                    })}
                />
            </div>
            <p style={{ fontSize: '20px', color: '#333', margin: '20px 0' }}>Your score: {score} out of {total}</p>
            <Button onClick={onReview} style={{ width: '180px'}}>Review Answers</Button>
            <Button onClick={onRestart} style={{ width: '180px'}}>Restart Quiz</Button>
        </Container>
    );
};

export default Result;
