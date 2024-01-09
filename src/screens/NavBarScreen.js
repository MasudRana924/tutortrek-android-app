import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import iconsImage from '../assets/favicon.png';
import Icon from 'react-native-vector-icons/Ionicons';
const NavBarScreen = () => {
    return (
        <View style={styles.navSection}>
            <Image source={iconsImage} style={styles.image} />
            <Icon name="notifications" size={30}color='black'></Icon>
        </View>
    );
};

export default NavBarScreen;

const styles = StyleSheet.create({
    navSection: {
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop:40,
        padding:15,
        justifyContent:'space-between',
        height:80,
        // backgroundColor:'#FF5733',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    image: {
        width:40,
        height:40,
        borderRadius:20,
    },
    text: {  },
});