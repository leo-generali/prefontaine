import React from 'react';
import BarChart from '../BarChart'

const View = ({ array }) => {
  const hasData = Boolean(array);

  return (
    hasData ? <BarChart data={array} /> : null
  );
}

export default View;