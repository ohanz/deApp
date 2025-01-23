import { StackNavigationProp } from '@react-navigation/stack';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import { RootStackParamList } from "./_layout";

type SignUpScreenNavigationPro = StackNavigationProp<RootStackParamList,'SignUp'
>;

interface SignuUpScreenProps {
navigation: SignUpScreenNavigationPro;
}

const SignUp = ({ navigation }: SignuUpScreenProps) => {

  const onHandlePress = () => {
    // Alert.alert('Pressed');
    navigation.goBack();
  };

  return (
    <View style={{}}>
      <Text style={{color: 'black'}}>SignUp Screen</Text>
      <View style={{marginTop: 10}}>
        {/* <Button title="Sign Now" onPress={onHandlePress} /> */}
        <Button title="Go Back" onPress={onHandlePress} />

      </View>
    </View>
  );
};

export default SignUp;