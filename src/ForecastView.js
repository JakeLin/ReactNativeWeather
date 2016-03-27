'use strict'

import Weathericons from 'react-native-iconic-font/weathericons';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class ForecastView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.city, styles.whiteText]}>
          Melbourne
        </Text>
        <Text style={[styles.icon, styles.whiteText]}>
          {Weathericons('day-sunny')}
        </Text>
        <Text style={[styles.degrees, styles.whiteText]}>17°</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: 'white'
  },
  city: {
    fontSize: 40
  },
  icon: {
    fontFamily: 'Weather Icons',
    fontSize: 100
  },
  degrees: {
    fontSize: 60
  }
});

module.exports = ForecastView;
