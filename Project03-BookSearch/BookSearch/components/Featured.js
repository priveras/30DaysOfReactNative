import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = require('../styles.js');

class Featured extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Featured Tab
        </Text>
      </View>
    );
  }
}

module.exports = Featured;
