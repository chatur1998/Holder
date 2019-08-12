import React, { Component } from 'react';
import { Tile } from 'react-native-elements';
import { Image, View, ScrollView, FlatList, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import ImageView from 'react-native-image-view';
import { showImage } from '../actions';

class Images extends Component {
imageSelected(url) {
  this.props.showImage(url);
}
  render() {
    return (
      <ScrollView>
        <FlatList
          numColumns='2'
          data={this.props.imagesURL}
          renderItem={({ item }) =>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TouchableHighlight
                onPress={this.imageSelected.bind(this, item)}
              >
              <Image
                source={{ uri: item }}
                style={{ margin: 2,
                         height: (Dimensions.get('window').height) / 4,
                         width: (Dimensions.get('window').width - 10) / 2,
                         resizeMode: 'cover',
                         paddingLeft: 5,
                         paddingRight: 5 }}
              />
              </TouchableHighlight>
            </View>
          }
        />
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   gridView: {
//     paddingTop: 25,
//     flex: 1,
//   },
//   itemContainer: {
//     justifyContent: 'flex-end',
//     borderRadius: 5,
//     padding: 10,
//     height: 150,
//   }
// });

const mapStateToProps = (state) => {
  return {
    images: state.main.images,
    imagesURL: state.main.imagesURL
  };
};

export default connect(mapStateToProps, { showImage })(Images);
