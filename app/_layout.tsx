// import { Stack } from "expo-router";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import LandScreen from "@/app/LandingScreen";
// import LaunchScreen from "@/app/launchScreen";
import ProfileScreen from "@/app/ProfileScreen";
import HomeScreen from "@/app/HomeScreen";
import SignUp from "./SignUp";
import Login from "./Login";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    // <Stack>
    //   <Stack.Screen name="index" />
    // </Stack>
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
