import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';

const Profile = (props) =>{
  return (
    <View style = {styles.container}>
      <Image
        style={styles.image}
        source={require('./images/selfie.jpg')}
      />
      <Text style={styles.name}>{props.name} </Text>
      <Text style={styles.title}>{props.title} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: 400,
    alignItems:'center',
  },
  image:{
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 50
  },

  name: {
    color: '#000000',
    fontSize: 35,
    fontWeight:'900',
  },

  title: {
    color: '#696969',
    fontSize: 28,
    fontWeight:'900',
  }


});

export default Profile;
