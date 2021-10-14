import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './custom_bt';
import Login from './login';
import Sign_in from './sign_in';

const Stack = createNativeStackNavigator();

class App extends Component {
    render () {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Homepage}/>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Sign_in" component={Sign_in}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App;