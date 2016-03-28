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
        <Text style={[styles.time, styles.whiteText]}>
          12:30
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
  time: {
    fontSize: 20
  },
  icon: {
    fontFamily: 'Weather Icons',
    fontSize: 40
  },
  degrees: {
    fontSize: 30
  }
});

export default ForecastView;
