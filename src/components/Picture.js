import React, { Component } from 'react';
import { Modal } from 'react-native';
//import { Card } from 'react-native-elements';
import ImageViewer from 'react-native-image-zoom-viewer';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const images = new Array();

class Picture extends Component {
  generateArray() {
     this.props.imageURL.map((url) => {
        return images.push({ url });
    });
  }

  render() {
     return (
         <Modal
          visible
          transparent
          onRequestClose={() => Actions.pop()}
         >
           {this.generateArray()}
             <ImageViewer
               imageUrls={images}
               enableSwipeDown
               enableImageZoom
             />
          </Modal>

       // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       //    <Image
       //      source={{ uri: this.props.url }}
       //      style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width, resizeMode: 'contain' }}
       //    />
       //  </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.main.url,
    imageURL: state.main.imagesURL
  };
};

export default connect(mapStateToProps)(Picture);
