import React, { Component } from 'react';
import View from './View';

import { createArray } from './helpers';

export default class extends Component {
  componentDidMount() {
    this.setState({
      array: createArray(this.props.runActivities)
    })
  }

  render() {
    return (
      <View {...this.state} {...this.props} />
    );
  }
}