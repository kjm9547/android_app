import React, {Component, component} from "react";
import{
    TouchableOpacity,
    Text,
    StyleSheet,
    Button,
}from 'react-native';

export default class Custom_bt extends Component{

    render(){
        return(
         
                <TouchableOpacity
                onPress={this.props.onPress}>
                 <Text>회원가입</Text>
                </TouchableOpacity>
                
            
        )
    }
}

