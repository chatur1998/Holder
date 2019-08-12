import React, { Component } from 'react';
import * as firebase from 'firebase';
import { StyleSheet } from 'react-native';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers';
import Router from './src/Router';

class App extends Component {
 componentWillMount() {
   const firebaseConfig = {
   apiKey: 'AIzaSyBs0-Rqr2CgAqmZZmKLG8rLf2-JkcaOdK8',
   authDomain: 'holder-711a8.firebaseapp.com',
   databaseURL: 'https://holder-711a8.firebaseio.com',
   projectId: 'holder-711a8',
   storageBucket: 'gs://holder-711a8.appspot.com/',
   messagingSenderId: '1086703737590',
   appId: '1:1086703737590:web:1ea2b4c3c653bf39'
 };
 // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
  return (
    <Provider store={createStore(reducer, {}, applyMiddleware(ReduxThunk))}>
      <Router />
    </Provider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
