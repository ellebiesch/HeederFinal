import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Button, Form, Item, Input,} from 'native-base';


class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
      return (
      <View style = {styles.container}>
      <View style = {styles.logoContainer}>
      <Image style = {styles.logo} source={require('../images/logo-02.png')}/>

        <Form>
        <Item style={styles.inputBox}>
          <Input
          style = {{color: "#fff"}}
          placeholder="Email"
          placeholderTextColor="#fff"
          />
        </Item>

        <Item style={styles.inputBox}>
          <Input
          style = {{color: "#fff"}}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry/>
        </Item>

        </Form>
        
        <Button style = {styles.button}
        onPress={() => navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>

        <Button style = {styles.SignButton} 
        onPress={() => navigate('Register')}
        transparent >
          <Text style={styles.buttonText}>Sign Up</Text>
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

    inputBox: {
      width: 300,
      height: 45,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 25,
      fontSize: 15,
      marginVertical: 10,
       },
   
   button: {
    backgroundColor: '#73B1B7',
    width: 114,
    height: 40,
    marginVertical: 10,
    marginLeft: 100,
    textAlign: 'center',
    borderRadius: 25,
    justifyContent: 'center'
   },

   SignButton:{
    width: 114,
    height: 40,
    marginVertical: 10,
    marginLeft: 100,
    color: "#fff", 
    fontSize: 15, 
    justifyContent: 'center'
   
   },
   buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: "#ffffff", 

   }
   

});

export default Login;