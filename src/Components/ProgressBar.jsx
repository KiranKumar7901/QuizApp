import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #ddd;
  margin: 20px 0;
`;

const Progress = styled.div`
  width: ${props => props.progress}%;
  height: 10px;
  background-color: #4caf50;
`;

function ProgressBar({ progress }) {
  return (
    <ProgressBarContainer>
      <Progress progress={progress} />
    </ProgressBarContainer>
  );
}

export default ProgressBar;
