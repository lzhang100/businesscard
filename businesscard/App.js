import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './components/Profile';
import Contacts from './components/Contacts';


export default class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.statusbar}></View>
        <Profile name="Lester Zhang" title="Software Developer"/>
        <Contacts phone="6503399682" email="lester.zhang@sjsu.edu" linkedIn="linkedin.com/in/lesterzhang"/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#EBE6E6',
  },

  statusbar: {
    backgroundColor: '#808080',
    height: 25
  }
});
