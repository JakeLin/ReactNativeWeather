'use strict'

var icon = require('react-native-iconic-font/weathericons');

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

class WeatherView extends Component {
  render() {
    return (
      <Image style={styles.background} source={require('../img/background.png')}>
        <View style={styles.container}>
          <Text style={[styles.city, styles.whiteText]}>
            Melbourne
          </Text>
          <Text style={{fontFamily: 'weathericons',fontSize:30}}>
            {icon('day-sunny')}
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
  degrees: {
    fontSize: 60
  }
});

module.exports = WeatherView;
