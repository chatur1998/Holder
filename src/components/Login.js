import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Card, Button, Input, Form } from 'react-native-elements';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, removeError } from '../actions';

class Login extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      Alert.alert('Authentication Failed!!');
        this.props.removeError();
    }
  }

  renderButton() {
    if (this.props.loading) {
      return (
      <Button
        loading
      />
    );
  }

    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
        title='Log In!!'
        raised
      />
    );
    }


  render() {
  return (
      <Card
        containerStyle={styles.Card}
      >

        <Input
          containerStyle={styles.Input}
          label='Email'
          placeholder='xyz@gmail.com'
          onChangeText={this.onEmailChange.bind(this)}
        />
        <Input
          containerStyle={styles.Input}
          label='Password'
          placeholder='password'
          secureTextEntry
          onChangeText={this.onPasswordChange.bind(this)}
        />
            {this.renderButton()}
            {this.renderError()}
      </Card>
  );
}
}

const styles = {
  Card: {
      justifyContent: 'center'
  },

  Input: {
    paddingBottom: 10,
    paddingTop: 10
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, removeError })(Login);
