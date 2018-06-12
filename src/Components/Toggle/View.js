import React from 'react';

// Styles
import styled from 'styled-components';

const View = ({ on, flip }) => {
  return (
    <h1 onClick={flip}>{on ? "km" : "mi"}</h1>
  );
};

export default View;