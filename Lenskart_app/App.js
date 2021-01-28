import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Providers from './src/navigation/index';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './config/config';
import * as Notifications from 'expo-notifications';


export default class App extends React.Component {
  constructor() {
    super();
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

  }
  render() {
    return (
      <Providers />
    );
  }
}


