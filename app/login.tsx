import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { RootStackParamList } from "./_layout";
import axios from 'axios';


type LoginScreenNavigationPro = StackNavigationProp<RootStackParamList,'Login'
>;

interface LoginScreenProps {
navigation: LoginScreenNavigationPro;
}

type FormData = {
  username: string;
  password: string;
};

const Login = ({navigation}: LoginScreenProps) => {

  const goSignUp = () => {
    navigation.navigate('SignUp');
  }

  const onHandlePress = () => {
    // Alert.alert('Pressed.');
    navigation.goBack();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8081/login', data);
      const token = response.data.token;
      // Store the token in secure storage (e.g. AsyncStorage)
      console.log('Login successful!');
    } catch (error) {
      console.log('Login Error:', JSON.stringify(error));
      setError('An Unknown error occured');
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 35}}>Welcome! Enter Your Login Details.</Text>
      <View style={{marginTop: 10}}>
        {/* <Button title="Tap Now" onPress={onHandlePress} /> */}

        <Text style={styles.title}>Login Form</Text>
        <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={styles.input}
            placeholder="Username"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="username"
        rules={{ required: true }}
      />
      {errors.username && <Text style={styles.error}>This field is required</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
      />
      {errors.password && <Text style={styles.error}>This field is required</Text>}

      {/* <Button title="Login" onPress={handleSubmit(onSubmit)} /> */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>{loading ? 'Loading... ': 'Login'}</Text></TouchableOpacity>
    
      <View style={{marginBottom: 10}}/>
      <Button color='green' title="Sign Up Here Instead" onPress={goSignUp} />
      <View style={{marginBottom: 50}}/>
        <Button color='black'title="Go Back" onPress={onHandlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,fontSize:18,
    padding: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },

  Button:{
    color: 'black'
  },
  button: {
    width: '50%', padding: 10, backgroundColor: '#007bff', alignItems: "center",
  },
  buttonText: {
   color: '#ffffff', fontWeight: 'bold', fontSize:18,
  }
});


export default Login;