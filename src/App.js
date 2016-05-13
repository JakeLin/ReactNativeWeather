'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
} from 'react-native';

import weathericons from 'react-native-iconic-font/weathericons';
import WeatherView from './WeatherView';

class ReactNativeWeather extends Component {
  render() {
    return (
      <WeatherView />
    );
  }
};

export default ReactNativeWeather;
