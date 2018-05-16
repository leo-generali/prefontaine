import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;

  > div {
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    background: #8385aa;
    border-radius: 50%;
    animation: ${bounce} 0.6s infinite alternate;
  }

  > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const Loading = () => (
  <Loader>
    <div></div>
    <div></div>
    <div></div>
  </Loader>
);

export default Loading;