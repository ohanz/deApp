import { Alert, Button, Image, Pressable, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { ScrollView } from "react-native";
import { Dimensions } from 'react-native';
import Toast from "react-native-toast-message";

// import pImage from '../assets/images/ihype_confidLogo.png';

var screenWidth = Dimensions.get('window').width; //full screen width

const myStyle = StyleSheet.create({
  dMain: {
   flex: 1, 
  },
  box: {
    // backgroundColor:'white',
    backgroundColor: 'rgba(255,255,255,0.6)',
    height: 45,
    width: '100%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 20,
  },
  wrapperCustom0: {
    // borderRadius: 8,
    // padding: 6,
    // marginTop: -25,
    marginRight: 'auto',
    position: 'absolute', left: 10,
    width: 40, height: 40
  },
  wrapperCustom2: {
    // borderRadius: 8,
    // padding: 6,
    // marginTop: -25,
    margin: 'auto',
    width: 500, height: 500
  },
  wrapperCustom1: {
    borderRadius: 8,
    padding: 6,
    marginTop: -25,
    marginLeft: 'auto',
  },
  containerMain: {
    flex: 1,
    alignItems: 'center',
  },
  mScroll:{
   paddingBottom: 10, paddingStart: 5, 
  },
  footerStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
     backgroundColor: "#009900",
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center', alignContent: 'space-between'
  },
})

const date = new Date();
const showYear = date.getFullYear(); 

var logBoo = false;


export default function Index() {

  const showToast0 = () => {
    ToastAndroid.showWithGravity(
      'All Your Base Are Belong To Us',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showAlert = () =>
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

  const showToast = () => {
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
    Alert.alert("You'll be redirected to Login in a moment..")
    logBoo = true;
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
        {/* <Text>I am</Text> */}
      <Image 
       style={myStyle.wrapperCustom0}
       source={require('../assets/images/ihype_confidLogo.png')}
       /> 
      <Text style={{fontSize: 25, textAlign: "center"}}>Hello Hyper, Ohanz!</Text>
      <Pressable style={myStyle.wrapperCustom1} onPress={showToast0}><Text>Press Me</Text></Pressable>
      </View>
      
      {/* Body */}
      <View style={{flex: 0.9, backgroundColor: '#eee'}}>
      <ScrollView style={myStyle.mScroll}>
            <Text style={{marginBottom: 50}}>scrollable section</Text>

            <Image 
       style={myStyle.wrapperCustom2}
       source={require('../assets/images/deMag.png')}
       /> 
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
          <Text> HyperContent Here</Text>
        </ScrollView>
        </View>

        <View style={myStyle.footerStyle}>
      {/* footer */}
      <Text style={{color: "#dee", fontWeight: 'bold' ,position: 'relative', fontSize: 17,
      }}>Copyright&copy;{showYear}</Text>
     {/* <View style={{flex: 1, backgroundColor: 'red'}} /> */}
      <Button title='Login Now' onPress={showToast}
      color= 'darkorange' />
        <Button title="Sign Up"
      onPress={showAlert}
      color= 'green' 
      // onPress={() => logBoo ? showAlert : Alert.alert('Wish to Sign Up Now?')}
       />
      {/* <Text style={{ backgroundColor: 'green', padding: 10, fontSize: 20, fontWeight: "bold"}}>Sign Up</Text> */}
      </View>

    </View>


    
    
  );
}
