import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { useNavigation } from '@react-navigation/native'
import { createUserLogin } from "../state/auth/loginSlice";
const LoginComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleLogin = () => {
    const data = { email, password };
    dispatch(createUserLogin(data));
    navigation.navigate('Main');
  }
  useEffect(() => {
    if (success) {
        // Show success message
        // message.info("Registration successful");
        // Navigate after 1 second
        const timerId = setTimeout(() => {
          navigation.navigate('Main');
        }, 1000);
        // Cleanup the timer to avoid memory leaks
        return () => clearTimeout(timerId);
    }
}, [success,]);
  return (
    <View style={styles.container} className=" flex  flex-1  items-center">
      <View>
        <Text className="text-5xl font-bold ">TutorTrek</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        className="mt-28"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
       
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        // disabled={isLoading}
        
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View className="flex-row justify-center mt-4">
          <Text className="text-gray-500 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="font-bold ml-4"> Create new </Text>
          </TouchableOpacity>
        </View>

    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  forgotText:{
    textAlign:'start',
    marginBottom:10,
    marginLeft:-150,
    fontSize:16
   
  },
  button: {
    backgroundColor:'black',
    padding: 20,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    height: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop:"10"
  },
  loadingText: {
    marginTop: 16,
    color: "blue",
  },
  errorText: {
    marginTop: 16,
    color: "red",
  },
});
