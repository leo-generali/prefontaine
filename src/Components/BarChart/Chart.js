import React from 'react';

const Chart = ({ children, width, height }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width={width}
    height={height}
  >
    <defs>
      <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stop-color="#fc4c02"/>
        <stop offset="100%" stop-color="#e8381b"/>
      </linearGradient>
    </defs>
    {children}
  </svg>
);

export default Chart;