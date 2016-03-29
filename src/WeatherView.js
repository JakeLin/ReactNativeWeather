'use strict'

import React, {
  Component,
  StyleSheet,
  ActivityIndicatorIOS,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

import moment from 'moment';
import weathericons from 'react-native-iconic-font/weathericons';
import ForecastView from './ForecastView';

const { width, height } = Dimensions.get('window');

class WeatherView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      temperature: '',
      icon: '',
      forecasts: [],
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
            <ForecastView style={styles.forecast} forecast={this.state.forecasts[0]}/>
            <ForecastView style={styles.forecast} forecast={this.state.forecasts[1]}/>
            <ForecastView style={styles.forecast} forecast={this.state.forecasts[2]}/>
            <ForecastView style={styles.forecast} forecast={this.state.forecasts[3]}/>
          </View>
        </View>
      </Image>
    );
  }

  queryOpenWeatherMap() {
    // TODO: temporarily used
    const url = 'http://api.openweathermap.org/data/2.5/forecast?lat=-33.8634&lon=151.211&appid=fcc9c74f4b63e290811cb0d0d93d796f'
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      let weatherList = json.list[0];
      let tempDegrees = weatherList.main.temp;
      let country = json.city.country;
      let city = json.city.name;
      let degrees = this.convertTemperature(country, tempDegrees);
      let weatherCondition = weatherList.weather[0].id;
      let iconString = weatherList.weather[0].icon;

      let forecasts = [];
      // Get the first four forecasts
      for (let i=0; i<4; ++i) {
        let forecastList = json.list[i];

        let forecast = {};
        forecast.time = moment.unix(forecastList.dt).format('H:mm');
        let forecastTempDegrees = forecastList.main.temp;
        forecast.degrees = this.convertTemperature(country, forecastTempDegrees);
        let forecastCondition = forecastList.weather[0].id;
        let forecastIconString = forecastList.weather[0].icon;
        forecast.icon = this.weatherIcon(forecastCondition, forecastIconString);
        forecasts[i] = forecast;
      }

      this.setState({
        city: city,
        temperature: degrees,
        icon: this.weatherIcon(weatherCondition, iconString),
        isLoading: false,
        forecasts: forecasts,
      });
    })
    .catch(function (error) {
      // console.error('An error occured');
      console.error(error.message);
    });
  }

  convertTemperature(country, openWeatherMapDegrees) {
    if (country === 'US') {
      // Convert temperature to Fahrenheit if user is within the US
      return Math.round(((openWeatherMapDegrees - 273.15) * 1.8) + 32) + '\u00B0 F';
    } else {
      // Otherwise, convert temperature to Celsius
      return Math.round(openWeatherMapDegrees - 273.15) + '\u00B0 C';
    }
  }

  weatherIcon(condition, iconString) {
    if (iconString.includes('n')) {
      return weathericons('owm-night-' + condition);
    }
    return weathericons('owm-day-' + condition);
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
    paddingTop: 80,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  forecast: {
    flex: 1,
  }
});

export default WeatherView;
