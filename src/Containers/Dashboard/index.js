import React, { Component } from 'react';
import View from './View';

import { getRunActivities } from "./helpers";

export default class extends Component {
  constructor(props) {
    super(props);
    this.updateToggle = this.updateToggle.bind(this);
  }

  state = {
    metricDisplayDistance: false
  };

  updateToggle() {
    const metricDisplayDistance = !this.state.metricDisplayDistance;
    console.log('clicked!!');
    this.setState({ metricDisplayDistance });
  }

  render() {
    const runActivities = getRunActivities(this.props.data);

    return (
      <View
        runActivities={runActivities}
        metricDisplayDistance={this.state.metricDisplayDistance}
        updateToggle={this.updateToggle}
      />
    );
  }
}
