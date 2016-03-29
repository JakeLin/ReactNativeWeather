'use strict'

import React, {
  Component,
  StyleSheet,
  ActivityIndicatorIOS,
  Text,
  View,
  Image
} from 'react-native';

import Weathericons from 'react-native-iconic-font/weathericons';

import ForecastView from './ForecastView';

class WeatherView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Melbourne',
      temperature: '27°',
      icon: Weathericons('day-sunny'),
      isLoading: false,
      message: ''
    };
  }

  componentDidMount() {
    this.queryOpenWeatherMap();
  }

  render() {
    let spinner = this.state.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='true'
          size='large'/> ) :
      ( <View/>);

    return (
      <Image style={styles.backgroundImage} source={require('../img/background.png')}>
        <View style={styles.container}>
          {spinner}
          <Text style={[styles.city, styles.whiteText]}>
            {this.state.city}
          </Text>
          <Text style={[styles.icon, styles.whiteText]}>
            {this.state.icon}
          </Text>
          <Text style={[styles.temperature, styles.whiteText]}>
            {this.state.temperature}
          </Text>
          <View style={styles.forecastContainer}>
            <ForecastView style={styles.forecast}/>
            <ForecastView style={styles.forecast}/>
            <ForecastView style={styles.forecast}/>
            <ForecastView style={styles.forecast}/>
          </View>
        </View>
      </Image>
    );
  }

  queryOpenWeatherMap() {
    // TODO: temporarily used
    let url = 'http://api.openweathermap.org/data/2.5/forecast?lat=-33.8634&lon=151.211&appid=fcc9c74f4b63e290811cb0d0d93d796f'
    fetch(url).then((response) => response.json())
              .then((json) => {
      let weatherList = json.list[0]

      // Store nextColor, since we'd like to start next time with it.
      var current = this.state.nextColor;

      this.setState({
        city: weatherList.name,
        temperature: weatherList.main.temp,
        icon: Weathericons('day-sunny'),
        isLoading: false
      });

    }, (err) => {console.log(err);});
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    opacity: 0.8,
  },
  whiteText: {
    color: 'white',
  },
  city: {
    fontSize: 40,
  },
  icon: {
    fontFamily: 'Weather Icons',
    fontSize: 100,
  },
  temperature: {
    fontSize: 60,
  },
  forecastContainer: {
    width: 320,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  forecast: {
    flex: 1,
  }
});

export default WeatherView;
