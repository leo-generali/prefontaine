import React, { Component } from 'react';
import View from './View';

import loadData from './loadData';

export default class extends Component {
  state = {
    data: null,
    loading: true
  }

  async load(query) {
    try {
      const data = await loadData(query);
      this.setState({ loading: false, data });
    } catch(error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.load('activities');
  }

  render() {
    return (
      <View {...this.state} />
    );
  }
}
