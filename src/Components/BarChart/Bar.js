import React, { Component } from 'react';

class Bar extends Component {
  state = {
    displayMileage: false
  }

  setColor(height) {
    const fill = height ? 'white' : 'black';
    return fill;
  };

  convertDistance(distance) {
    const unitMultiplier = 0.000621371;
    const unit = 'm';
    const convertedDistance = (distance / 2) * unitMultiplier;
    const roundedConvertedDistance = Number(Math.round(convertedDistance+'e2')+'e-2');
    return roundedConvertedDistance ? `${roundedConvertedDistance}${unit}` : '';
  };

  render() {
    const { options } = this.props;
    const { displayMileage } = this.state;

    return (
      <g>
        <rect
          x={options.x}
          y={options.y}
          width={options.width}
          height={options.height}
          fill="url(#linear)"
          rx={options.rx}
          ry={options.ry}
          onMouseEnter={() => this.setState({displayMileage: true})}
          onMouseLeave={() => this.setState({displayMileage: false})}
        />
        <text x={options.x + options.width/2 } y={options.base} textAnchor="middle">
          {options.day}
        </text>
        <text x={options.x + options.width/2 } y={options.base - 22} textAnchor="middle" fill={this.setColor(options.height)}>
          {displayMileage ? this.convertDistance(options.distance) : options.date}
        </text>
      </g>
    );

  };
};

export default Bar;