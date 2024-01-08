import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createUserRegister } from '../state/auth/userSLice';
import { useNavigation } from '@react-navigation/native'
const RegisterComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { success } = useSelector((state) => state.register);
  const [name, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleRegister = () => {
    const data = { name, email, password }
    dispatch(createUserRegister(data));
  };

  useEffect(() => {
    if (success) {
        // Show success message
        // message.info("Registration successful");
        // Navigate after 1 second
        const timerId = setTimeout(() => {
          navigation.navigate('Login');
        }, 1000);
        // Cleanup the timer to avoid memory leaks
        return () => clearTimeout(timerId);
    }
}, [success,]);
  return (
    <View style={styles.container} className="flex flex-1  items-center">
      <View>
        <Text className="text-5xl  font-semibold">TutorTrek</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={handleFirstNameChange}
        className="mt-20"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        className="bg-violet-500 font-semibold text-2xl"
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View className="flex-row justify-center mt-4">
        <Text className="text-gray-500 font-semibold">
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="font-semibold ml-4"> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: "80%",
    height: 60,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 30,
    paddingLeft: 8,
  },
  button: {
    padding: 20,
    backgroundColor:'black',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    height: 60,

  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loadingText: {
    marginTop: 16,
    color: 'blue',
  },
  errorText: {
    marginTop: 16,
    color: 'red',
  },
});
