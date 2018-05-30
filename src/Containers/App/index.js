import React, { Component } from 'react';
import View from './View';

import loadData from './loadData';

export default class extends Component {
  state = {
    data: null,
    personalData: null,
    loading: true
  }

  async load() {
    try {
      const data = await loadData('activities');
      const personalData = await loadData('athlete');
      this.setState({ loading: false, data, personalData });
    } catch(error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.load();
  }

  render() {
    return (
      <View {...this.state} />
    );
  }
}
