'use strict';

import { StyleSheet, Dimensions } from 'react-native';
import { weatherIconsFontFamily } from '../styles/Icons';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
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
    fontFamily: weatherIconsFontFamily,
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
  },
  message: {
    fontSize: 15,
  },
});
