import React from 'react';
import BarChart from '../BarChart'

const View = ({ runActivities }) => {
  return (
    <BarChart data={runActivities} />
  );
}

export default View;