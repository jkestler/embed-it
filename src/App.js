import React, { Component } from 'react';
import Navigation from './components/Navigation';
import './App.css';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCpIJcOtEOElv9JRWgN1MDVYofa_qEzCsc",
  authDomain: "embedit-ad51e.firebaseapp.com",
  databaseURL: "https://embedit-ad51e.firebaseio.com",
  projectId: "embedit-ad51e",
  storageBucket: "",
  messagingSenderId: "978158528389",
  appId: "1:978158528389:web:b558ab919557b3eb96c6ec"
};

firebase.initializeApp(firebaseConfig);


class App extends Component {
  state = {
    authenticated: false
  };
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
          }))
        : this.setState(() => ({
          authenticated: false
        }));
    });
  }
  
  render() {
    return <Navigation authenticated={this.state.authenticated} />
  }
}

export default App;


