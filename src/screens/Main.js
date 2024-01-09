import React from 'react';
import { Text, View ,SafeAreaView, ScrollView} from 'react-native';
import NavBarScreen from './NavBarScreen';
import { StyleSheet } from 'react-native';

const Main = () => {
    return (
        <ScrollView>
            <NavBarScreen></NavBarScreen>
        </ScrollView>
    );
};

export default Main;

