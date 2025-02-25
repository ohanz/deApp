import { StyleSheet, View, Text } from "react-native";


const Styles = StyleSheet.create({
    Main: {
        flex: 1, padding: 20,
    },
    title: {
      color: 'green', fontWeight:'bold',fontSize: 45,textAlign: 'center'
    },
    image: {
      fontStyle: 'italic', textAlign: 'center'
    },
    footer: {
      fontWeight:'bold',fontSize: 25,textAlign: 'center'
    }
})


const launchScreen = () => {

   

return(
  <View style={Styles.Main}>
        <Text style={Styles.title}>SplashScreen</Text>
        <View style={{marginTop: 100}}/>
          <Text style={Styles.image}>[image here]</Text>
        <View style={{marginTop: 100}}>
        <Text style={Styles.footer}>The Test App</Text>
          {/* <Button title="Go to Home" onPress={onHandlePress} /> */}
        </View>
      </View>
);

}

export default launchScreen;