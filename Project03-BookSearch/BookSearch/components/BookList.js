import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableHighlight,
} from 'react-native';

var FAKE_BOOK_DATA = [
    {volumeInfo: {title: 'The Catcher in the Rye', authors: "J. D. Salinger", imageLinks: {thumbnail: 'http://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}}}
];

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    var books = FAKE_BOOK_DATA;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(books)
    });
  }

  renderBook(book) {
    return (
      <TouchableHighlight>
        <View>
          <View style={styles.container}>
            <Image
              source={{uri: book.volumeInfo.imageLinks.thumbnail}}
              style={styles.thumbnail} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{book.volumeInfo.title}</Text>
            <Text style={styles.author}>{book.volumeInfo.authors}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }

  render() {
  var book = FAKE_BOOK_DATA[0];
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderBook.bind(this)}
        style={styles.listView}
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: 10,
  },
  thumbnail: {
      width: 53,
      height: 81,
      marginRight: 10,
      backgroundColor: 'red',
  },
  rightContainer: {
      flex: 1
  },
  title: {
      fontSize: 20,
      marginBottom: 8
  },
  author: {
      color: '#656565'
  },
  separator: {
       height: 1,
       backgroundColor: '#dddddd'
   }
})

module.exports = BookList;
