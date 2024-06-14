import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { Dimensions } from 'react-native';

var screenWidth = Dimensions.get('window').width; //full screen width

const myStyle = StyleSheet.create({
  dMain: {
   flex: 1, 
  },
  box: {
    // backgroundColor:'white',
    backgroundColor: 'rgba(255,255,255,0.6)',
    height: 45,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 20,
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

export default function Index() {
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
      <Text style={{fontSize: 25, textAlign: "center"}}>Hello Hyper, Ohanz!</Text>
      </View>
      
      {/* Body */}
      <View style={{flex: 0.9, backgroundColor: '#eee'}}>
      <ScrollView style={myStyle.mScroll}>
            <Text style={{marginBottom: 50}}>scrollable section</Text>
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
      <Text style={{ backgroundColor: 'darkorange', borderRadius: 20, padding: 10, fontSize: 18}}>Login Now</Text>
      <Text style={{ backgroundColor: 'green', padding: 10, fontSize: 20, fontWeight: "bold"}}>Sign Up</Text>
      </View>

    </View>


    
    
  );
}
