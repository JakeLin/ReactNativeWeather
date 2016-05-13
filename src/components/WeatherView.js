'use strict'

import React, {
  Component,
  StyleSheet,
  ActivityIndicatorIOS,
  Text,
  View,
  Image
} from 'react-native';

import weathericons from 'react-native-iconic-font/weathericons';
import moment from 'moment';
import ForecastView from './ForecastView';

import styles from './WeatherView-styles';

class WeatherView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      temperature: '',
      icon: '',
      forecasts: [],
      isLoading: true,
      message: ''
    };
  }

  componentDidMount() {
    this.startLocationSearch();
  }

  render() {
    return (
      <Image style={styles.backgroundImage} source={require('../../img/background.png')}>
        <View style={styles.container}>
          {this.getSpinner()}
          {this.getMessageView()}
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

  getSpinner() {
    return this.state.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='false'
          size='large'/> ) :
      ( <View/> );
  }

  getMessageView() {
    return this.state.message ?
      ( <Text style={[styles.whiteText, styles.message]}>{this.state.message}</Text> ) :
      ( <View/> );
  }

  startLocationSearch() {
    navigator.geolocation.getCurrentPosition(
      location => {
        this.queryOpenWeatherMap(location);
      },
      error => {
        this.setState({
          message: error.message || error
        });
      },
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000}
    );
  }

  queryOpenWeatherMap(location) {
    // TODO: temporarily used
    const data = {
      lat: location.coords.latitude,
      lon: location.coords.longitude,
      appid: 'fcc9c74f4b63e290811cb0d0d93d796f',
    };
    let queryString = Object.keys(data)
        .map(key => key + '=' + encodeURIComponent(data[key]))
        .join('&');

    const url = 'http://api.openweathermap.org/data/2.5/forecast?' + queryString;

    fetch(url)
    .then(response => response.json())
    .then(json => {
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
    .catch(error => {
      this.setState({
        message: error.message,
      });
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

export default WeatherView;
