import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Channels extends Component {
    render() {
        return (
          <View style = {styles.container}>
            <Text>Channel</Text>
          </View>
        );
    }
}

export default Channels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
     
  },
  text : {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50
  }
});
