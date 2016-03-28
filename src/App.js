'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
} from 'react-native';

import WeatherView from './WeatherView';

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

export default ReactNativeWeather;
