import {Alert, Button, StyleSheet, Text, View} from 'react-native';


const SignUp = () => {

  const onHandlePress = () => {
    Alert.alert('Pressed');
  };

  return (
    <View style={{}}>
      <Text style={{color: 'black'}}>SignUp Screen</Text>
      <View style={{marginTop: 10}}>
        <Button title="Sign Now" onPress={onHandlePress} />
      </View>
    </View>
  );
};

export default SignUp;