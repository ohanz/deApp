import { StackNavigationProp } from '@react-navigation/stack';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import { RootStackParamList } from "./_layout";


type LoginScreenNavigationPro = StackNavigationProp<RootStackParamList,'Login'
>;

interface LoginScreenProps {
navigation: LoginScreenNavigationPro;
}

const Login = ({navigation}: LoginScreenProps) => {

  const onHandlePress = () => {
    // Alert.alert('Pressed.');
    navigation.goBack();
  };

  return (
    <View style={{}}>
      <Text style={{color: 'black'}}>Login Screen</Text>
      <View style={{marginTop: 10}}>
        {/* <Button title="Tap Now" onPress={onHandlePress} /> */}
        <Button title="Go Back" onPress={onHandlePress} />
      </View>
    </View>
  );
};

export default Login;