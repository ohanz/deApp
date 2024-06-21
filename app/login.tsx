import {Alert, Button, StyleSheet, Text, View} from 'react-native';


const Login = () => {

  const onHandlePress = () => {
    Alert.alert('Pressed.');
  };

  return (
    <View style={{}}>
      <Text style={{color: 'black'}}>Login Screen</Text>
      <View style={{marginTop: 10}}>
        <Button title="Tap Now" onPress={onHandlePress} />
      </View>
    </View>
  );
};

export default Login;