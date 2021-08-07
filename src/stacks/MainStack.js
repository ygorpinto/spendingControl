import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PreLoad" component={}/>
            <Stack.Screen name="SignIn" component={}/>
            <Stack.Screen name="SignUp" component={}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;