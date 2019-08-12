import React, { Component } from 'react';
import { ScrollView, Modal } from 'react-native';
import { Input, Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { folderPressed, showList, nameChanged, showImages, loadImages, newPressed } from '../actions';

class Bucket extends Component {
onButtonPress(name) {
  this.props.folderPressed(name);
}

onCreatePressed(NewName) {
  this.props.newPressed(NewName);
}

onDisplayPressed = async (folderName) => {
  await this.props.loadImages(folderName);
  this.setImagePath(folderName);
}

setImagePath = (folderName) => {
   return this.props.images.map((image) => {
     const name = image.location.path_.split('/')
    return (
      this.DisplayImages(folderName, name[1])
    );
  });
}

sendInput(text) {
  this.props.nameChanged(text);
}

displayModal = () => {
  return (
  <Modal
    animationType={'slide'}
    transparent
  >
      <Input
        label='New Folder!'
        onChangeText={this.sendInput.bind(this)}
      />
      <Button
        title='Create!'
        onPress={this.onCreatePressed.bind(this, this.props.NewName)}
      />
  </Modal>
);
}

DisplayImages(folderName, name) {
  this.props.showImages(folderName, name);
}

renderList = () => {
  return this.props.folders.map((data) => {
    return (
      <Card
        style={{}}
        key={data.location.path_}
        title={data.location.path_}
      >
        <Button
          title='Display Images'
          onPress={this.onDisplayPressed.bind(this, data.location.path_)}
          buttonStyle={{ margin: 5, padding: 5 }}
        />
        <Button
          title='Add images'
          onPress={this.onButtonPress.bind(this, data.location.path_)}
          buttonStyle={{ margin: 5, padding: 5 }}
        />
      </Card>
    );
  });
}

  render() {
    return (
      <ScrollView>
      <Card>
        <Button
          title='New Folder!'
          onPress={this.displayModal.bind(this)}
        />
      </Card>
        {this.renderList()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    folders: state.main.folders,
    NewName: state.main.NewName,
    images: state.main.images,
    url: state.main.imagesURL
  };
};

export default connect(mapStateToProps, { newPressed, folderPressed, showList, nameChanged, showImages, loadImages })(Bucket);
