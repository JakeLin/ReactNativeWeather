'use strict'

import React, {
  Component,
  Text,
  View
} from 'react-native';

import weathericons from 'react-native-iconic-font/weathericons';
import styles from './ForecastView-styles'

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
