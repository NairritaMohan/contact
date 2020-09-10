import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {FAB } from 'react-native-paper';

export default class HomeScreen extends React.Component{

 
  render(){
    return(
      <View style = {styles.container}>
        <Text > HomeScreen</Text>
        <FAB 
        style = {styles.fab}
        icon ="plus"
        small
        onPress = {()=>{
          this.props.navigation.navigate('Add')
        }}/>
        <TouchableOpacity style = {{position: 'absolute',top:50,right:20}}
        onPress  = {()=>{
          firebase.auth().signOut()
          this.props.navigation.navigate('Login')
        }}>
        <Image 
                        source = {require('../assets/logout.png')}
                        style = {{width:50,height:50}}
                        />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab:{
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 16
  }
});
