/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  TabBarIOS,
} from 'react-native';

const styles = require('./styles.js');
const Featured = require('./components/Featured');
const Search = require('./components/Search');

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'featured'
    };
  }

  render () {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'featured'}
          systemIcon="featured"
          onPress={() => {
            this.setState({
              selectedTab: 'featured'
            });
          }}>
          <Featured/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'search'}
          systemIcon="search"
          onPress={() => {
            this.setState({
              selectedTab: 'search'
            });
          }}>
          <Search/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('BookSearch', () => BookSearch);
