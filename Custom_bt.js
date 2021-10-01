import React, {Component, component} from "react";
import{
    TouchableOpacity,
    Text,
    StyleSheet,
}from 'react-native';

export default class Custom_bt extends Component{

    render(){
        return(
            <Custom_bt name="리액트" />,
            <TouchableOpacity>
                <Text>회원가입</Text>
            </TouchableOpacity>
        )
    }
}
