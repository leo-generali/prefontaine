import React, { Component } from 'react';
import View from './View';

import { createArray } from './helpers';

export default class extends Component {
  render() {
    return (
      <View runActivities={createArray(this.props.runActivities)} />
    );
  }
}