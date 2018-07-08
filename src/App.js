import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyA1m9sSy-OJUaTPx29LMa7uqpDUHIoIUE4',
        authDomain: 'manager-92aa6.firebaseapp.com',
        databaseURL: 'https://manager-92aa6.firebaseio.com',
        projectId: 'manager-92aa6',
        storageBucket: 'manager-92aa6.appspot.com',
        messagingSenderId: '194298223017'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
         <Router/>
      </Provider>
    );
  }
}

export default App;
