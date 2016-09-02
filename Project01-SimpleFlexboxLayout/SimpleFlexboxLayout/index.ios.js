/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native';

class SimpleFlexboxLayout extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <View style={{flex:1, backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.white}>Powder Blue</Text>
        </View>
        <View style={{flex:2, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.white}>Sky Blue</Text>
        </View>
        <View style={{flex:3, backgroundColor: 'steelblue', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.white}>Steel Blue</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  white: {
    color: 'white',
    fontSize: 20,
  }
});

AppRegistry.registerComponent('SimpleFlexboxLayout', () => SimpleFlexboxLayout);
