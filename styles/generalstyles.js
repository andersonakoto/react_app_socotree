import React, {
  Dimensions,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch'
  },
  launcherCirclesStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
    color: '#ffffff',
    fontFamily: 'Grotesk',
  },
  discoverStyle: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 80,
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    color: '#ffffff',
  },
  containter: {
    position: 'relative',
    width: Dimensions.get('window').width, //for full screen
    height: Dimensions.get('window').height, //for full screen
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollview: {
    backgroundColor: 'transparent',
  },
});
