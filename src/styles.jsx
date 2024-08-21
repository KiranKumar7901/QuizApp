import styled, {css} from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #f4f4f4;
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
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
  background-color: ${(props) => (props.selected ? "#007bff" : "#f4f4f4")};
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  border: 2px solid #ddd;
  border-radius: 5px;
  cursor: pointer;

  background-color: ${({ selected }) => (selected ? "#f0f0f0" : "#fff")};

  ${({ correct }) =>
    correct &&
    css`
      border-color: green;
      background-color: #d4edda; /* Green background for correct answers */
    `}

  ${({ incorrect }) =>
    incorrect &&
    css`
      border-color: red;
      background-color: #f8d7da; /* Red background for incorrect answers */
    `}
  
  &:hover {
    background-color: ${(props) => (props.selected ? "#0056b3" : "#ddd")};
  }

  &:disabled {
    background-color: ${(props) => (props.selected ? "#007bff" : "#f4f4f4")};
    cursor: not-allowed;
  }
`;

// export const AnswerOption = styled.button`
//     padding: 10px 20px;
//     margin: 5px 0;
//     font-size: 16px;
//     cursor: pointer;
//     border: 2px solid #ccc;
//     background-color: ${({ selected }) => (selected ? '#f0f0f0' : '#fff')};

//     ${({ correct }) => correct && css`
//         border-color: green;
//         background-color: #d4edda; /* Green background for correct answers */
//     `}

//     ${({ incorrect }) => incorrect && css`
//         border-color: red;
//         background-color: #f8d7da; /* Red background for incorrect answers */
//     `}
// `;

export const Timer = styled.div`
  text-align: right;
  font-size: 18px;
  color: #888;
  margin-top: 10px;
`;

export const Score = styled.h2`
  text-align: center;
  color: #333;
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
