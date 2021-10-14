import React from "react";
import { Button,Text, View, Stylesheet, TextInput, StyleSheet } from "react-native";
import Custom_bt from './custom_bt'


export default class Login extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header} >
                    <Text style={{fontSize:30,paddingTop:30}}>로그인</Text>
                    <View style={{width:'100%',borderColor:'gray', borderBottomWidth:0.5}}/>
                </View>
                <View style={styles.content}>
                  <View style={styles.input_box}>
                    <Text style={{paddingRight:10, fontSize:20}}>아이디</Text>
                    <TextInput style={{width:'70%',height:30,borderColor:'black', justifyContent:'space-between',borderWidth:1,padding:5,marginBottom:10}}></TextInput>   
                  </View>
                  <View style={styles.input_box}>
                    <Text style={{paddingRight:10, fontSize:20}}>비밀번호</Text>
                      <TextInput style={{width:'70%',height:30,borderColor:'black',justifyContent:'space-between', borderWidth:1,padding:5}}></TextInput>
                  </View>
                </View>
               
                <View style={styles.footer}>
                  <Custom_bt></Custom_bt>
                </View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    header:{
        flex:1,
        
    },
    content:{
        flex:4,
        
        
        padding:10
    },
    input_box:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    footer:{
        flex:1,
        
        
    }

})