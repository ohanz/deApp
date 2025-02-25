// import { Stack } from "expo-router";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import LandScreen from "@/app/LandingScreen";
import LaunchScreen from "@/app/launchScreen";
import ProfileScreen from "@/app/ProfileScreen";
import HomeScreen from "@/app/HomeScreen";
import SignUp from "./SignUp";
import Login from "./Login";

export type RootStackParamList = {
  Launch: undefined;
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
  Profile: undefined;
  Home: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Launch">
       <Stack.Screen name="Launch" component={LaunchScreen} />
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Landing" component={LandScreen} />
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="SignUp" component={SignUp} />
       <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
