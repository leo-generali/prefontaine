import React from 'react';
import Graph from '../../Components/Graph';
import Toggle from '../../Components/Toggle';

// Styles
import * as Text from '../../styles/typography';
import styled from 'styled-components';

const OptionsContainer = styled.div`
  margin-top: 3rem;
`;

const TogglesContainer = styled.div`
  padding: 2rem 0 0 0;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = Text.Span.extend`
  margin-right: 2rem;
`;

const View = ({ runActivities, metricDisplayDistance, updateToggle }) => (
  <React.Fragment>
    <Graph runActivities={runActivities} metricDisplayDistance={metricDisplayDistance} />
    <OptionsContainer>
      <Text.Span>Modifiers:</Text.Span>
      <TogglesContainer>
        <ToggleContainer>
          <Label>Unit:</Label>
          <Toggle on={metricDisplayDistance} flip={updateToggle} />
        </ToggleContainer>

      </TogglesContainer>
    </OptionsContainer>
  </React.Fragment>
);

export default View;