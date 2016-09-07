import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = require('../styles.js');

class BookList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Featured Tab
        </Text>
      </View>
    );
  }
}

module.exports = BookList;
