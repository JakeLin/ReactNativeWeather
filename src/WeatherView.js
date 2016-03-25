'use strict'

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'

class WeatherView extends Component {
  render() {
    return (
      <View>
        <Text style={Styles.icon}>Cloudy!!!Cloudy!!!Cloudy!!!Cloudy!!!Cloudy!!!Cloudy!!!</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = WeatherView;
