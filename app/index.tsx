import { Alert, AppRegistry, Button, Image, Platform, Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { ScrollView } from "react-native";
import { Dimensions } from 'react-native';
import Toast from "react-native-toast-message";
import RootLayout from "./_layout";
import { Provider } from "react-native-paper";

// import pImage from '../assets/images/ihype_confidLogo.png';



// export default function Index() {

// }

const Index = () =>{
  return(
    <Provider>
      <RootLayout />
    </Provider>
  )
}

AppRegistry.registerComponent('myapp', () => Index)








// import { Alert, Button, Image, Platform, Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
// import { ScrollView } from "react-native";
// import { Dimensions } from 'react-native';
// import Toast from "react-native-toast-message";

// // import pImage from '../assets/images/ihype_confidLogo.png';


// const myStyle = StyleSheet.create({
//   dMain: {
//    flex: 1, 
//   },
//   box: {
//     backgroundColor:'white',
//     // backgroundColor: 'rgba(255,255,255,0.6)',
//     height: 47,
//     width: '100%',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.4,
//     shadowRadius: 20,
//     elevation: 20,
//   },
//   wrapperCustom0: {
//     // borderRadius: 8,
//     // padding: 6,
//     // marginTop: -25,
//     marginRight: 'auto',
//     position: 'absolute', left: 10,
//     width: 40, height: 40
//   },
//   wrapperCustom2: {
//     // borderRadius: 8,
//     // padding: 6,
//     // marginTop: -25,
//     margin: 'auto', marginBottom: 10,
//     width: '100%', height: 450
//   },
//   wrapperCustom1: {
//     borderRadius: 8,
//     padding: 6,
//     marginTop: -25,
//     marginLeft: 'auto',
//   },
//   containerMain: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   mScroll:{
//    paddingBottom: 10, paddingStart: 5, 
//   },
//   footerStyle: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     height: 50,
//      backgroundColor: "#009900",
//      flexDirection: 'row',
//      justifyContent: 'space-around',
//      alignItems: 'center', alignContent: 'space-between'
//   },
// })





