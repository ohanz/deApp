// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

const pStyles = StyleSheet.create({
  pMain: {
    flex: 1,
  },
})

const ProfileScreen = () => {

  const onHandlePress = () => {
    Alert.alert('Pressed');
  };

  return (
    <View style={pStyles.pMain}>
      <Text style={{color: 'black'}}>ProfileScreen</Text>
      <View style={{marginTop: 10}}>
        <Button title="Go to Home" onPress={onHandlePress} />
      </View>
    </View>
  );
};

export default ProfileScreen;