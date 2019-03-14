import React, { Component } from 'react';
//import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Button, TextInput} from 'native-base';
import {createStackNavigator} from 'react-navigation';


class Test extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {styles.container}>
            <View style = {styles.logoContainer}>
            <Image style = {styles.logo} source={require('../images/logo-02.png')}/>
             
             <Button primary>
              
              </Button>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        backgroundColor:'#35586C',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      paddingTop: 100,
     
    },
   logo: {
       width:280,
       height: 280,
    },
  
    logText: {
      fontSize: 15,
      color: 'rgba(255, 255, 255, 255)',
      paddingBottom: 20,      
      justifyContent: 'center',
      alignSelf: 'center',
      marginLeft: -70
       
    },
    logButton: {
      fontSize: 15,
      fontWeight: '100',
      color: '#98F5FF',
      justifyContent: 'center',
      alignSelf: 'center',
      
     
     },
     inputBox: {
       width: 300,
       height: 45,
       backgroundColor: 'rgba(255, 255, 255, 0.3)',
       borderRadius: 25,
       fontSize: 15,
       marginVertical: 10,
      
   },
});

Test.propTypes = {

};

export default Test;