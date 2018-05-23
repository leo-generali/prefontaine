import React from 'react';
import BarChart from '../BarChart'

// Styles
import * as Text from '../../styles/typography';
import styled from 'styled-components';

const GraphContainer = styled.div`
  background-color: rgb(244,237,242, 0.85);
  box-shadow: 0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);
  border-radius: 0.5rem;
  padding: 4rem 5rem;
`;

const View = ({ runActivities }) => {
  return (
    <GraphContainer>
      <Text.P light uppercase>Leo's Running</Text.P>
      <BarChart data={runActivities} />
    </GraphContainer>
  );
}

export default View;