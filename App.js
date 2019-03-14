import React, { Component } from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './src/screens/Login';
import Register from './src/screens/Register';
import HomeScreen from './src/screens/HomeScreen';

const Application = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
        header: null
      }
    },

    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Register',
        header: null
      }
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Profile',
        header: null
      }
    },
    
    
});

const AppContainer = createAppContainer(Application);

export default class App extends React.Component {
  render() {
    return (
     <AppContainer />
     
    );
  }
}

