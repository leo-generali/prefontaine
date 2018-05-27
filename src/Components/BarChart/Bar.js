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
    const { displayMileage } = this.state;

    return (
      <g>
        <rect
          id={`rect-${this.props.index}`}
          x={this.props.x}
          y={this.props.y}
          width={this.props.width}
          height={this.props.height}
          fill="url(#linear)"
          rx={this.props.rx}
          ry={this.props.ry}
          onMouseEnter={() => this.setState({displayMileage: true})}
          onMouseLeave={() => this.setState({displayMileage: false})}
        >
          <animate
            attributeName="y"
            from={200}
            to={this.props.y}
            dur="1s"
            fill="freeze"
          />
          <animate
            attributeName="height"
            from={0}
            to={this.props.height}
            dur="1s" fill="freeze"
          />
        </rect>
        <text x={this.props.x + this.props.width/2 } y={this.props.base} textAnchor="middle">
          {this.props.day}
        </text>
        <text x={this.props.x + this.props.width/2 } y={this.props.base - 22} textAnchor="middle" fill={this.setColor(this.props.height)}>
          {displayMileage ? this.convertDistance(this.props.distance) : this.props.date}
        </text>
      </g>
    );

  };
};

export default Bar;