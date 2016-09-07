import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = require('../styles.js');

class SearchBooks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search Tab
        </Text>
      </View>
    );
  }
}

module.exports = SearchBooks;
