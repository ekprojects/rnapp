/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CodePush from 'react-native-code-push';

export default class rnapp1 extends Component {
  componentDidMount(){
    CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE });    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
<<<<<<< HEAD
          Welcome to React Native! this is my first react app
=======
          Welcome to React Native! this is my first react native app
>>>>>>> cd9fecb348af8b67be727afb55b5e1c63303cbc3
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnapp1', () => rnapp1);
