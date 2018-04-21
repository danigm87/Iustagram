/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RutasNoAutenticadas } from './components/noAutenticados/RutasNoAutenticadas'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: 'Iustagram-clone'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <RutasNoAutenticadas />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
