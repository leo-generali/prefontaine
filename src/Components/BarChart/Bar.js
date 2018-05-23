import React from 'react';

const Bar = ({ x, y, width, height }) => (
  <rect
    x={x}
    y={y}
    width={width}
    height={height}
    fill="url(#linear)"
    rx={4}
    ry={4}
  />
);

export default Bar;