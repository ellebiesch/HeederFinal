import React, { Component } from 'react';
import { 
  createAppContainer, 
  createDrawerNavigator , 
  createBottomTabNavigator, 
  createSwitchNavigator,
  createStackNavigator } from 'react-navigation';
import Profile from '../screens/Profile';
import Logout from '../screens/Logout';
import Channels from '../screens/Channels';
import Settings from '../screens/Settings';
import Icon from '@expo/vector-icons/Ionicons';


 class HomeScreen extends React.Component {
  render(){
    
    return <AppContainer />
    
  }
}

const TabNavigator = createBottomTabNavigator (
  {
   Profile,
   Channels,
   Settings
}, {
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
  }
}, 
  tabBarOptions: {
    labelStyle: { fontSize: 15, padding: 15, backgroundColor: '#ffffff' },
    }

})

const AppStackNavigator = createStackNavigator ({
  TabNavigator: TabNavigator
},{
  defaultNavigationOptions:({navigation}) => {
    return{
      headerLeft: (
        <Icon style ={{paddingLeft: 20}}
         onPress={()=>navigation.openDrawer()}
        name="md-menu" size={30}/>
      )
    }         
  }
  });

const AppDrawerNavigator = createDrawerNavigator({
  
    Profile: {
      screen: AppStackNavigator,
    }, 
    Settings: {
      screen: Settings,
    }, 
    Channels: {
      screen: Channels,
    },
    Logout: {
      screen: Logout,
  }, 
    
     }); 
 

 

const AppSwitchNavigator = createSwitchNavigator({
  Home: { screen: AppDrawerNavigator },
 
})


const AppContainer = createAppContainer(AppSwitchNavigator);


export default HomeScreen;