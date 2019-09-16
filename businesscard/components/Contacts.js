import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';

const Contacts = (props) =>{
  return (
    <View style = {styles.container}>
      <View>
      <Text style={styles.contextText}>{props.phone} </Text>
      <Text style={styles.contextText}>{props.email} </Text>
      <Text style={styles.contextText}>{props.linkedIn} </Text>
      </View>
      <Image
        style={styles.image}
        source={require('./images/qr.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000000',
  //  height: 200
    //alignItems:'center',
  },

  contextText:{
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight:'900',
    marginLeft: 10,
    //alignItems:'center',
    justifyContent: 'center'
  },


  image:{
    width: 75,
    height: 75,
    marginRight: 10,

  },


});

export default Contacts;
