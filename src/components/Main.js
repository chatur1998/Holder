import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { showList } from '../actions';


class Main extends Component {
onButtonPress() {
  this.props.showList(this.props.name);
}
// onButtonPress() {
//   this.props.imagePressed(this.props.name);
// }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card
          style={{ flex: 1, backgroundColor: 'black' }}
          image={{ uri: 'https://mirage-group.eu/cache/thumbnails/ee8f2408152547dde144adfe2b517b90d50961d6/daa016c54fa6fd756b81cb3ef3ffa8f1eb30eae8-99174abc46bf9dce0e03f104bec5cc80.jpg' }}
        >
          <Button
            onPress={this.onButtonPress.bind(this)}
            raised
            title='Files!'
          />
        </Card>

      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      name: state.main.name,
      NewName: state.auth.NewName
  };
};

export default connect(mapStateToProps, { showList })(Main);
