import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';

 class Splash extends Component {
  
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true
    }).start()
  }
  
  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
        <Image
          style={{width: 300, height: 300}}
          source={{uri: 'https://i.imgur.com/0Lx3MxV.png'}}
        />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A1C1C'
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: '#0A1C1C',
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#FFF"
  }
});

export default Splash;