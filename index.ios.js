/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
} from 'react-native';

import WeatherView from './src/WeatherView';

class ReactNativeWeather extends Component {
  render() {
    return (
      <WeatherView />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('ReactNativeWeather', () => ReactNativeWeather);
