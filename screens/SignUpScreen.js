import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,Image,Alert} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';
import firebase from 'firebase';
import db from '../config';


export default class SignUpScreen extends React.Component{
    constructor(){
        super()

        this.state = {
            email: '',
            password : '',
            confirmPassword : '',
            
        }
    }

    userSignUp= (email,password,confirmPassword)=>{
        if(password !== confirmPassword){
            return Alert.alert("password doesnt match")
        }
        else{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(response=>{
            return Alert.alert("User Added Successfully")
        })
        .catch(error=>{
            var errorCode = error.code
            var errorMessage = error.message
            return Alert.alert(errorMessage)
        })
       
    }
}
    render(){
        return(
            <View style = {styles.container}>
                <View>
                <TextInput
          style = {styles.inputBox}
          placeholder = {'Enter Email Id'}
          keyboardType = 'email-address'
          onChangeText = {(text)=>{
            this.setState({
            email: text
            })
          }}
          
          />
          <TextInput
          style = {styles.inputBox}
          placeholder = {'Enter Password'}
          secureTextEntry = {true}
          onChangeText = {(text)=>{
            this.setState({
              password:text
            })
          }}
          
          />
           <TextInput
          style = {styles.inputBox}
          placeholder = {'Confirm Password'}
          secureTextEntry = {true}
          onChangeText = {(text)=>{
            this.setState({
              confirmPassword:text
            })
          }}
          
          />
                </View>
                <TouchableOpacity style = {styles.button}
                onPress = {()=>{
                    this.userSignUp(this.state.email,this.state.password,this.state.confirmPassword)
                }}>
               
                    <Text style = {styles.btnText} 
                    >CREATE 
                    ACCOUNT</Text>
                </TouchableOpacity>

                
                    <TouchableOpacity style = {{position: 'absolute', bottom:20, right : 20}} onPress = {()=>{
                        this.props.navigation.navigate('Login')
                    }}>
                        <Image 
                        source = {require('../assets/backArrow.png')}
                        style = {{width:100,height:100,alignSelf:'center'}}
                        />

                    </TouchableOpacity>
                



            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex :1,
        justifyContent:'center',
        alignItems :'center'
    },
    button:{
        backgroundColor: 'blue',
        width : 100,
        height :50
    },
    btnText:{
    color :'grey',
    fontSize: 20,
    fontWeight : 'bold'
    }

})