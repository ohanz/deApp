import { StackNavigationProp } from "@react-navigation/stack";
import { Alert, Button, Image, Platform, Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { ScrollView } from "react-native";
import { Dimensions } from 'react-native';
import Toast from "react-native-toast-message";
import { RootStackParamList } from "./_layout";
import myStyle from'./mystyles';  


// import pImage from '../assets/images/ihype_confidLogo.png';


type LandingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Landing'>;

interface LandingScreenProps{
  navigation: LandingScreenNavigationProp;
}

// Created External CSS

//  Functions
var screenWidth = Dimensions.get('window').width; //full screen width
const date = new Date();
const showYear = date.getFullYear(); 
var User: string = "Ohanz!";

var logBoo = false;


export default function LandingScreen({ navigation }: LandingScreenProps) {
   // General Notice
   /*This codebase performs simple functions and also test Platform Compatability*/
   // Dont get confused!

  // General function
  let webPlatform = Platform.OS === 'web' ? true : false;
  const str = 'All Your Base Are To Belong To Us'
  const showToast0 = () => {
    if (typeof window !== "undefined"){
      alert(str)
      console.log('web platform')
    }
    else{
      ToastAndroid.showWithGravity(
        str,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      console.log('other platform')
    }
   
  };

  const showAlertSignUp = () =>{
    if(typeof window === "undefined"){
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {
            text: 'Cancel',
            onPress: () => Alert.alert('Cancel Pressed'),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
      );
    }
     else{
      // Web Version
      if(window.confirm("Alert Compat for Web")){
        alert('Ok was pressed')
      }
      else{
        alert('Canceled was pressed')
      }
      
    }

    setTimeout(() => {
      navigation.navigate('SignUp');
    }, 2000)

  }
  

  const showToastLogin = () => {
    
    const delayAlert =
    setTimeout(() => {
      // typeof window === "undefined = ALT Method
       if(typeof window === "undefined"){
        Alert.alert("You'll be redirected to Login Screen in a moment..");
       }
       else {
        alert("You'll be redirected to Login Page in a moment.."); 
        } 
        console.log("I'll print third after 3 second");
        console.log(webPlatform)
        setTimeout(() => {
          navigation.navigate('Login');
        }, 2000)
       
        // setInterval(() => {
        //   // redirect after 1min with confirm dialog and if canceled, show the login button
        // })
    }, 3000);

    if(typeof window === "undefined"){
      if(logBoo){
        console.log('true')
        Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
    }); 
    logBoo = false;
  }
    else {
      console.log('false')
      delayAlert;
      logBoo = true;}
    }
    else{
     console.log("Web Alt UI");
    }
    
  }
  
   

  
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     // justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Text>Hello It's Ohanz!</Text>
    //   <Text> </Text>
    //   <Text>We Are Here</Text>

    //   <View
    //       style={{
            
    //       }}>
    //   {/* <Text>copyright{'\u00a9'}</Text> */}
    //   <Text>Copyright&copy;</Text>
    //   </View>
    // </View>


    <View
      style={myStyle.dMain}>
      {/* header */}
      <View style={myStyle.box}>
      <Image 
       style={myStyle.wrapperCustom0}
       source={require('../assets/images/ihype_confidLogo.png')}
       /> 
       <View style={{margin: 'auto'}}>
       <Text style={{position: 'relative', textAlign: 'center',
         top: 5, fontWeight: 'bold', fontStyle: 'italic' }}>
        (from last activity)</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 25}}>
        <Text>Hello, </Text>
        <Text style={{fontWeight: '700', marginRight: 5}}>{User}</Text>
        </Text>
        </View>
       {/* <Text style={{fontSize: 25}}>{"Hello Hyper, "+User}</Text> */}
       </View>
       
      <Pressable style={myStyle.wrapperCustom1} onPress={showToast0}><Text>Press Me</Text></Pressable>
      </View>
      
      {/* Body */}
      <View style={{ height: 500, backgroundColor: '#eee'}}>
      <ScrollView style={myStyle.mScroll}>
      {/* <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: '700', marginRight: 5}}>Contact Type:</Text>
        <Text>{User}</Text>
        </View> */}
            <Text style={{marginBottom: 30, 
              marginTop: 5, fontWeight: 400,
              fontSize: Platform.OS === 'web' ? 30 : 20,}}>
              Welcome Back, Hyper!
              </Text>
            <Image 
            style={myStyle.wrapperCustom2}
             source={require('../assets/images/deMag.png')}
             /> 
          <Text> Main Content Here(0)</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> Main Content Here</Text>
          <Text> HyperContent Here</Text>
          <Text> HyperContent Here</Text>
          <Text> HyperContent Here</Text>
          <Text> HyperContent Here</Text>
          <Text> HyperContent Here</Text>
          <Text> HyperContent Here</Text>
          <Text> HyperContent Here</Text>
          <Text> HyperContent Here</Text>
          <Text> HyperContent Here</Text>
          <Text> HyperContent Here</Text>
          <Text> HyperContent Here</Text>
          <Text> HyperContent Here oooo</Text>
        </ScrollView>
        </View>

        <View style={myStyle.footerStyle}>
      {/* footer */}
      <Text style={{color: "#dee", fontWeight: 'bold' ,position: 'relative', fontSize: 17,
      }}>Copyright&copy;{showYear}</Text>
     {/* <View style={{flex: 1, backgroundColor: 'red'}} /> */}
      <Button title='Login Now' onPress={showToastLogin}
      color= 'darkorange' />
        <Button title="Sign Up"
      onPress={showAlertSignUp}
      color= 'green' 
      // onPress={() => logBoo ? showAlert : Alert.alert('Wish to Sign Up Now?')}
       />
      {/* <Text style={{ backgroundColor: 'green', padding: 10, fontSize: 20, fontWeight: "bold"}}>Sign Up</Text> */}
      </View>

    </View>


    
    
  );
}
