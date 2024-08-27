import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #f4f4f4;
  text-align: center;
  
  @media (min-width: 768px) {
    max-width: 800px;  // Ensures max width on larger screens
    margin-top: 50px;
  }
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const NavButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }

  @media (max-width: 768px) {
    margin: 5px 0;
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 20px;
`;

export const ButtonHomePage = styled.button`
  padding: 15px 30px;
  margin: 10px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 5px 0;
  }
`;

export const Button = styled.button`
  display: inline-block;
  margin: 10px 5px;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const QuestionContainer = styled.div`
  margin: 20px 0;
  position: relative;
`;

export const QuestionText = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

export const AnswerOption = styled.button`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  background-color: ${(props) => {
    if (props.selected && props.incorrect) return "#f8d7da"; // Red for selected wrong answer
    if (props.selected && props.correct) return "#d4edda"; // Green for selected correct answer
    if (props.correct) return "#d4edda"; // Green for correct answer
    return "#f4f4f4"; // Default background
  }};
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  border: 2px solid #ddd;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? "#0056b3" : "#ddd")};
  }

  &:disabled {
    background-color: ${(props) => (props.selected ? "#007bff" : "#f4f4f4")};
    cursor: not-allowed;
  }
`;


export const Timer = styled.div`
  text-align: right;
  font-size: 18px;
  color: #888;
  margin-top: 10px;
`;

export const Score = styled.h2`
  text-align: center;
  color: #333;
  font-size: 24px; // Adjusted font size
  margin-bottom: 10px;
`;

export const CategorySelect = styled.select`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const InstructionText = styled.div`
  text-align: left;
  margin: 20px 0;
  font-size: 18px;
  color: #333;

  ul {
    margin-top: 10px;
    list-style-type: disc;
    padding-left: 20px;
  }

  p {
    margin: 0;
    font-weight: bold;
  }
`;

// Styles for the ProgressBar
export const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 200px; // Adjust height as needed
`;

export const ProgressBarCircle = styled.svg`
  transform: rotate(-90deg);
  overflow: visible;
  width: 150px;
  height: 150px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const ProgressBarPath = styled.circle`
  fill: none;
  stroke-width: 15;
  stroke-linecap: round;
`;

export const ProgressBarBackground = styled(ProgressBarPath)`
  stroke: #d3d3d3;
`;

export const ProgressBarForeground = styled(ProgressBarPath)`
  stroke: #007bff;
  stroke-dasharray: ${({ percentage }) => `${percentage} 100`};
  transition: stroke-dasharray 2s ease;
`;
