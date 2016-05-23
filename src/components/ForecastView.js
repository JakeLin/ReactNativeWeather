'use strict';

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './ForecastView-styles';

class ForecastView extends Component {
  render() {
    if (!this.props.forecast) {
      return <View/>;
    }

    return (
      <View style={styles.container}>
        <Text style={[styles.time, styles.whiteText]}>
          {this.props.forecast.time}
        </Text>
        <Text style={[styles.icon, styles.whiteText]}>
          {this.props.forecast.icon}
        </Text>
        <Text style={[styles.degrees, styles.whiteText]}>
          {this.props.forecast.degrees}
        </Text>
      </View>
    );
  }
}

export default ForecastView;
