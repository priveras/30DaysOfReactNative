import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

const styles = require('../styles.js');
const SearchBooks = require('./SearchBooks');

class Search extends Component {
  render () {
    return (
      <NavigatorIOS
        style={styles.navbar}
        initialRoute={{
          title: 'Search Books',
          component: SearchBooks,
        }}/>
    );
  }
}

module.exports = Search;
