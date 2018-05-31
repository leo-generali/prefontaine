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
    const convertedDistance = distance * unitMultiplier;
    const roundedConvertedDistance = Number(Math.round(convertedDistance+'e2')+'e-2');
    return roundedConvertedDistance ? `${roundedConvertedDistance}${unit}` : '';
  };

  render() {
    const { displayMileage } = this.state;
    const {
      index, x, y,
      height, width,
      rx, ry, base,
      day, distance, date
    } = this.props;

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
          {displayMileage ? this.convertDistance(distance) : date}
        </text>
      </g>
    );

  };
};

export default Bar;