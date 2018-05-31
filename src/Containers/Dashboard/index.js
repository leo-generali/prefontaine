import React, { Component } from 'react';
import View from './View';

import { getRunActivities } from "./helpers";

export default class extends Component {
  render() {
    const runActivities = getRunActivities(this.props.data);

    return (
      <View runActivities={runActivities} />
    );
  }
}
