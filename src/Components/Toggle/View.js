import React from 'react';

// Styles
import styled, { css } from 'styled-components';
import { brandColor } from '../../styles/colors';

const ToggleContainer = styled.div`
  width: 6rem;
  height: 2rem;
  cursor: pointer;
  border: 1px solid ${brandColor.primary};
  border-radius: 100px;
  position: relative;
`;

const Knob = styled.div`
  left: -10%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -25%;
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
  background-size: 200%;
  background-position-x: 0%;
  background-image: linear-gradient(270deg, ${brandColor.primary} 0%, ${brandColor.primaryDark} 100%);
  transition: 0.3s;
  color: white;
  ${props => props.on && css`
    background-position-x: 100%;
    left: 0%;
    transform: translateX(110%);
  `}
`;

const View = ({ on, flip }) => {
  return (
    <ToggleContainer onClick={flip}>
      <Knob on={on}> {on ? "km" : "mi"} </Knob>
    </ToggleContainer>
  );
};

export default View;