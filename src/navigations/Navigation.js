import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterComponent from "../screens/RegisterComponent";
import LoginComponent from "../screens/LoginComponent";
import Main from "../screens/Main";
import WelcomeScreen from "../screens/WelcomeScreen";
import SettingsScreen from "../screens/students/SettingsScreen";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
const homeIcon_active = require("../assets/icons/home-active.png");
const homeIcon = require("../assets/icons/home.png");
const savedIcon = require("../assets/icons/saved.png");
const settingsIcon_active = require("../assets/icons/settings-active.png");
const settingsIcon = require("../assets/icons/settings.png");

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? homeIcon_active : homeIcon;
          }
          // } else if (route.name === 'Map') {
          //   iconName = focused ? compass_active : compass;
          // } else if (route.name === 'Saved') {
          //   iconName = focused ? savedIcon_active : savedIcon;
          // }
          else if (route.name === "Settings") {
            iconName = focused ? settingsIcon_active : settingsIcon;
          }

          return (
            <Image
              source={iconName}
              resizeMode="contain"
              style={styles.footerIcon}
            />
          );
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          padding: 10,
          backgroundColor: "black",
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
        },
      })}
    >
      <Tab.Screen name="Home" component={Main} />
      {/* <Tab.Screen name="Map" component={MapScreen} /> */}
      {/* <Tab.Screen name="Saved" component={SavedScreen} /> */}
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginComponent} />
          <Stack.Screen name="Register" component={RegisterComponent} />
          <Stack.Screen name="Main" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    width: 25,
  },
});
