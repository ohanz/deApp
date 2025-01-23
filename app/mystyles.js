
import { StyleSheet } from "react-native";


const myStyle = StyleSheet.create({
  dMain: {
    flex: 1,
  },
  box: {
    backgroundColor: 'white',
    height: 47,
    width: '100%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 20,
  },
  wrapperCustom0: {
    position: 'absolute',
    left: 10,
    width: 40,
    height: 40,
  },
  wrapperCustom2: {
    width: '100%',
    height: 450,
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
  mScroll: {
    overflow: "scroll",
    paddingBottom: 100,
    paddingStart: 5,
  },
  footerStyle: {
    position:"fixed",
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#009900',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default myStyle;