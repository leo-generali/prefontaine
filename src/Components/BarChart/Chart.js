import React from 'react';

import { brandColor } from '../../styles/colors';

const Chart = ({ children, width, height }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width={width}
    height={height}
  >
    <defs>
      <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={brandColor.primary} />
        <stop offset="100%" stopColor={brandColor.primaryDark} />
      </linearGradient>
    </defs>
    {children}
  </svg>
);

export default Chart;