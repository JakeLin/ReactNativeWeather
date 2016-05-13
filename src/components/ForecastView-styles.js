'use strict'

import { StyleSheet } from 'react-native';
import { weatherIconsFontFamily } from '../styles/Icons';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
  },
  time: {
    fontSize: 20,
  },
  icon: {
    fontFamily: weatherIconsFontFamily,
    fontSize: 40,
  },
  degrees: {
    fontSize: 20,
  }
});
