import React, { Component } from 'react';
import View from './View';
import Loading from '../App/Loading';

import { getRunActivities } from "./helpers";

export default class extends Component {
  render() {
    const runActivities = getRunActivities(this.props.data);

    return (
      <View runActivities={runActivities} />
    );
  }
}
