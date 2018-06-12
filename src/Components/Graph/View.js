import React from 'react';
import BarChart from '../BarChart'

const View = ({ runActivities, metricDisplayDistance }) => {
  return (
    <BarChart data={runActivities} metricDisplayDistance={metricDisplayDistance} />
  );
}

export default View;