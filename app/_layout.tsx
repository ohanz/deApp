// import { Stack } from "expo-router";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import LandScreen from "@/app/LandingScreen";
// import LaunchScreen from "@/app/launchScreen";
import ProfileScreen from "@/app/ProfileScreen";
import HomeScreen from "@/app/HomeScreen";
import SignUp from "./SignUp";
import Login from "./Login";

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="LandingScreen">
       <Stack.Screen name="HomeScreen" component={HomeScreen} />
       <Stack.Screen name="LandingScreen" component={LandScreen} />
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
