import React, { Component } from 'react';

const unitMultipliers = {
  mi: 0.000621371,
  km: 0.001
};

class Bar extends Component {
  state = {
    displayMileage: false
  };

  setColor(height) {
    const fill = height ? 'white' : 'black';
    return fill;
  };

  convertDistance(distance, unit) {
    const unitMultiplier = unitMultipliers[unit];
    const convertedDistance = distance * unitMultiplier;
    const roundedConvertedDistance = Number(Math.round(convertedDistance+'e2')+'e-2');
    return `${roundedConvertedDistance}${unit}`;
  };

  render() {
    const { displayMileage } = this.state;
    const {
      index, x, y,
      height, width,
      rx, ry, base,
      day, distance, date,
      metricDisplayDistance
    } = this.props;
    const distanceInMiles = this.convertDistance(distance, "mi");
    const distanceInKilometers = this.convertDistance(distance, "km");

    const displayedDistance = metricDisplayDistance ? distanceInKilometers : distanceInMiles;

    return (
      <g>
        <rect
          id={`rect-${index}`}
          x={x}
          y={200}
          width={width}
          height={0}
          fill="url(#linear)"
          rx={rx}
          ry={ry}
          onMouseEnter={() => this.setState({displayMileage: true})}
          onMouseLeave={() => this.setState({displayMileage: false})}
        >
          <animate
            attributeName="y"
            from={200}
            to={y}
            dur="1s"
            fill="freeze"
            begin={`0.${index}s`}
          />
          <animate
            attributeName="height"
            from={0}
            to={height}
            dur="1s"
            fill="freeze"
            begin={`0.${index}s`}
          />
        </rect>
        <text x={x + width/2 } y={base} textAnchor="middle">
          {day}
        </text>
        <text x={x + width/2 } y={base - 22} textAnchor="middle" fill={this.setColor(height)}>
          {displayMileage ? displayedDistance : date}
        </text>
      </g>
    );

  };
};

export default Bar;