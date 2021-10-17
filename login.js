import React,{Component} from "react";
import { Button,Text, View, Stylesheet, TextInput, StyleSheet,TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sign_in from './sign_in';
import Homepage from './App'
const Stack = createNativeStackNavigator();


class App extends Component {
    render () {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Homepage}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}


class Login extends React.Component {
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
                <TouchableOpacity style={styles.button}
                  onPress={()=>{this.props.navigation.navigate('Home')}}>
                      <Text>hi</Text>
                  </TouchableOpacity>
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
    button: {
        margin:10,
        height:30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
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
export default Login;