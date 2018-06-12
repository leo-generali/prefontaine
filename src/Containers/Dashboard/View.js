import React from 'react';
import Graph from '../../Components/Graph';
import Toggle from '../../Components/Toggle';

const View = ({ runActivities, metricDisplayDistance, updateToggle }) => (
  <React.Fragment>
    <Toggle on={metricDisplayDistance} flip={updateToggle} />
    <Graph runActivities={runActivities} metricDisplayDistance={metricDisplayDistance} />
  </React.Fragment>
);

export default View;