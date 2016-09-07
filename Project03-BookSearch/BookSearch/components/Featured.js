import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

const styles = require('../styles.js');
const BookList = require('./BookList');

class Featured extends Component {
  render () {
    return (
      <NavigatorIOS
        style={styles.navbar}
        initialRoute={{
          title: 'Featured Books',
          component: BookList,
        }}/>
    );
  }
}

module.exports = Featured;
