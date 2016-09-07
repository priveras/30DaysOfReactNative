import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = require('../styles.js');

class Search extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search Tab
        </Text>
      </View>
    );
  }
}

module.exports = Search;
