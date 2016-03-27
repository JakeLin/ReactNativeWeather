'use strict'

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
          <Text style={styles.welcome}>
            Welcome to React Native Weather haha!
            </Text>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    opacity: 0.4
  },
});

module.exports = WeatherView;
