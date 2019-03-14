import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Welcome extends Component {
    render() {
        return (
            <View style = {styles.container}>
            <Button title='Login' onPress={()=> this.props.navigation.navigate('Log in')}/>
            <Button title='Sign up' onPress={()=> this.props.navigation.navigate('Sign Up')}/>       
           </View>
        );
    }
}

Welcome.propTypes = {

};

export default Welcome;