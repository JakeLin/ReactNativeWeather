'use strict'

import Weathericons from 'react-native-iconic-font/weathericons';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class WeatherView extends Component {
  render() {
    return (
      <Image style={styles.background} source={require('../img/background.png')}>
        <View style={styles.container}>
          <Text style={[styles.city, styles.whiteText]}>
            Melbourne
          </Text>
          <Text style={[styles.icon, styles.whiteText]}>
            {Weathericons('day-sunny')}
          </Text>
          <Text style={[styles.degrees, styles.whiteText]}>17°</Text>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    opacity: 0.8
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

module.exports = WeatherView;
