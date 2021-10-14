import { react } from '@babel/types';
import React, {Component} from 'react';
import {
  Alert,
  AppState,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


import Login from './login';
export default class Homepage extends React.Component {
  constructor(props){
    super(props);

  
  }
 //hmoe
  render() {
    return(
      <View style = {styles.container}>
        <View style = {styles.title}>
          <Text style={{fontSize:35, color:'white'}}>어서와,{'\n'} 여행은 처음이지?</Text>
        </View>
        <View style = {styles.content}>
        <Image
            style={{height:'100%',width:'100%',resizeMode:'cover'}}
            source={require('./10.9.jpg')}/>
          </View>
        <View style = {styles.footer}>
            <TouchableOpacity style={styles.button}
              onPress={()=>{this.props.navigation.navigate('Login')}}>
                  <Text>hi</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_2}
               onPress={()=>{this.props.navigation.navigate('Sign_in')}}>
              <Text>si</Text>
              </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'black'
  },
  title:{
    flex:1,
    backgroundColor:'black'
  },
  content:{
    flex:4,
    backgroundColor:'black'
  },
  footer:{
    flex:1,
    backgroundColor:'black'
  },
  button: {
    margin:10,
    height:30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  button_2:{
      margin:10,
    height:30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  }
})