import React, { Component } from "react";
import { StyleSheet, Text, View,Button, TouchableOpacity, ImageBackground } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default class Custom_bt extends Component{
    constructor(props){
        super(props);
      }
    
      render(){
          return(
            <View>
              <TouchableOpacity style={styles.button}
              onPress={()=>alert('hi')}>
                  <Text>hi</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_2}>
              <Text>si</Text>
              </TouchableOpacity>
          </View>
          )
      }
}
const styles = StyleSheet.create({
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
});