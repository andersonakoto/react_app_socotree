import React from 'react';
import {
  Text,
  View,
  Alert,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;

import StyleSheet from './styles/generalstyles';
import Button from './styles/buttonstyle';
import TransparentButton from './styles/transparentButton';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={StyleSheet.containter}>
        <StatusBar hidden={true} />
        <View style={StyleSheet.fixed}>
          <ImageBackground
            source={require('./assets/images/launcher_image.png')}
            style={StyleSheet.backgroundImage}
          />
        </View>
        <ScrollView style={StyleSheet.fixed}>
          <Text style={StyleSheet.launcherCirclesStyle}>CIRCLES</Text>

          <Text style={StyleSheet.discoverStyle}>
            Discover like{'\n'}minded people
          </Text>

          <Button //onPress={}
          >
            Login with Facebook
          </Button>

          <Button //onPress={}
          >
            Login with Phone Number
          </Button>

          <TransparentButton //onPress={}
          >
            Don’t have an account? Sign up
          </TransparentButton>
        </ScrollView>
      </View>
    );
  }
}

export default LoginScreen;
