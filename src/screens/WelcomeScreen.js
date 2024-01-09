import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text,  TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoSection}>
        {/* Welcome text */}
        <Text style={styles.welcomeText}>TutorTrek</Text>
      </View>

      <View style={styles.buttonSection}>
        {/* Your buttons */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Student</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>teacher</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'white'
  },
  logoSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    marginTop: 20,
    fontSize: 60,
    fontWeight: 'bold',
    color:'black'
  },
  buttonSection: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end', 
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
