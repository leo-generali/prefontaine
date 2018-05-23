import React from 'react';
import Dashboard from '../Dashboard';

// Styles
import styled from 'styled-components';

const AppContainer = styled.div`
  align-items: center;
  background: #603866;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const View = ({ data }) => (
  <AppContainer>
    <Dashboard data={ data }/>
  </AppContainer>
);

export default View;