import React from 'react';
import BarChart from '../BarChart'

// Styles
import * as Text from '../../styles/typography';

const View = ({ runActivities }) => {
  return (
    <BarChart data={runActivities} />
  );
}

export default View;