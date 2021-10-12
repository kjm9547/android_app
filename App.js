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
} from 'react-native';
import Custom_bt from './custom_bt'


export default class App extends React.Component {
  constructor(props){
    super(props);

  
  }
 
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
            <Custom_bt>
            </Custom_bt>
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
  }

})