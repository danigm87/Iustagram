import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RutasNoAutenticadas } from './components/noAutenticados/RutasNoAutenticadas';

export default class App extends React.Component {
  constructor(){
    super();

    this.state={
      nombre:'instagram-clone'
    };
  }

  render() {
    return (
      <View style={styles.container}>
      {console.log("mi pene gordo")}
        <RutasNoAutenticadas />
        {console.log("aaaaaaaaaaaaaaaaaaa")}
      </View>
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
