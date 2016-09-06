import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
const styles = require('../styles.js');

class ListItems extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItems;
