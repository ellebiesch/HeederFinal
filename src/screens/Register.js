import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Button, Form, Item, Input, Picker, Icon} from 'native-base';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
      }
      onValueChange2(value= string) {
        this.setState({
          selected2: value
        });
      }
    render() {
      const { navigate } = this.props.navigation;
        return (
        <View style = {styles.container}>
        <Text style = {styles.registerText}>
            Register
        </Text>
          <Form>
          <Item  picker>
              <Picker
                
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: 300, padding: 3 }}
                placeholderStyle={{ color: "#fff",}}
                placeholderIconColor="#fff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Select User" value="key0" />
                <Picker.Item label="I am a Teacher" value="teacher" />
                <Picker.Item label="I am a Student" value="student" />
              </Picker>
            </Item>
            <Item style={styles.inputBox} round border light>
                <Input
                style={styles.inputSt} 
                placeholder="First Name "/>
            </Item>
            <Item style={styles.inputBox} round border light>
                <Input
                style={styles.inputSt} 
                placeholder="Last Name"/>
            </Item>
            <Item style={styles.inputBox} round border light>
                <Input
                style={styles.inputSt} 
                placeholder="Email"/>
            </Item>
            <Item style={styles.inputBox} round border light>
                <Input
                secureTextEntry
                style={styles.inputSt} 
                placeholder="Password"/>
            </Item>
            <Item style={styles.inputBox} round border light>
                <Input
                secureTextEntry
                style={styles.inputSt} 
                placeholder="Confirm Password"/>
            </Item>
          </Form>
          <Button style = {styles.button} bordered light 
          onPress={() => navigate('Login')}>
          <Text style={{color: "#fff", fontSize: 15, textAlign: "center"}}>Submit</Text>
        </Button>
        <Button style = {styles.logBut} 
        onPress={() => navigate('Login')}
        transparent >
          <Text style={{color: "#fff", fontSize: 15, textAlign: "center"}}>Existing Account</Text>
        </Button>
        </View>
        );
    }
  }
  const styles = StyleSheet.create({
   
      container: {
          flex: 1,
          backgroundColor:'#35586C',
          paddingLeft: 50,
          paddingRight: 50,
          paddingTop: 150
      },
      inputBox: {
        width: 300,
        height: 45,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        fontSize: 15,
        paddingLeft: 5,
        marginVertical: 10,
        borderRadius: 25
      },
      inputSt: {
        color: '#ffffff',
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
       logBut:{
        width: 114,
        height: 40,
        marginVertical: 10,
        marginLeft: 100,
       },
       registerText: {
         fontSize: 25,
         color:'#ffffff',
         alignItems:'center',
         justifyContent: 'center',
         paddingLeft: 100
       }
  });


export default Register;