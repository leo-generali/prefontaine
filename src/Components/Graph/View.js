import React from 'react';
import BarChart from '../BarChart'

// Styles
import * as Text from '../../styles/typography';

const View = ({ runActivities }) => {
  return (
    <div>
      <Text.P light uppercase>Leo's Running</Text.P>
      <BarChart data={runActivities} />
    </div>
  );
}

export default View;