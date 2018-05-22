import React, { Component } from 'react';
import View from './View';

export default class extends Component {
  render() {
    return (
      <View {...this.state} {...this.props} />
    );
  }
}