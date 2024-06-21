// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';


// import {RootStackNavigatorParamsList} from './RootStackNavigator';

// const HomeScreen = () => {
//   const navigation =
//     useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

//   const onHandlePress = () => {
//     navigation.navigate("profileScreen");
//   };

//   return (
//     <View style={{}}>
//       <Text style={{color: 'white'}}>HomeScreen</Text>
//       <View style={{marginTop: 10}}>
//         <Button title="Go to Details" onPress={onHandlePress} />
//       </View>
//     </View>
//   );
// };



 const HomeScreen = () => {
    //   const navigation =
    //     useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();
    
      const onHandlePress = () => {
        // navigation.navigate("profileScreen");
        Alert.alert('Now Pressed')
      };
    
      return (
        <View style={{}}>
          <Text style={{color: 'Black'}}>HomeScreen</Text>
          <View style={{marginTop: 10}}>
            <Button title="Go to Details" onPress={onHandlePress} />
          </View>
        </View>
      );
    };

    export default HomeScreen;