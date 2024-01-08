import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterComponent from '../screens/RegisterComponent';
import LoginComponent from '../screens/LoginComponent';
import Main from '../screens/Main';
const Stack = createNativeStackNavigator();
export default class Navigation extends Component {

  render() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginComponent} />
          <Stack.Screen name="Register" component={RegisterComponent} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
