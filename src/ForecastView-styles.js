'use strict'

import React, {
  StyleSheet
} from 'react-native';

const { Platform } = React;

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
    fontFamily: (Platform.OS === 'ios') ? 'Weather Icons' : 'weathericons',
    fontSize: 40,
  },
  degrees: {
    fontSize: 20,
  }
});
