import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageBackground,
  Alert,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";

function StartGameScreen({onPickedNumber}) {
    const [enteredNum, setEnteredNum] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNum(enteredText);
    }

    function okBtnHandler(){
      const chosenNum = parseInt(enteredNum);
      
      if(isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99){
        Alert.alert('Invalid number!', 'The number you entered is invalid. Please try again.', [{text: 'Okay', style: 'default', onPress: resetBtnHandler}] );
        return;
      }

      onPickedNumber(enteredNum);
    }

    function resetBtnHandler(){
      setEnteredNum('');
    }

  return (
    <View style={styles.parentCont}>
      <Text style={styles.gameTitle}>Guess My Number</Text>
      <View style={styles.inputBtnCont}>
        <View style={styles.childCont}>
          <TextInput style={styles.inputCont} maxLength={2} value={enteredNum} onChangeText={numberInputHandler}/>
        </View>
        <View style={styles.btnRow}>
          <PrimaryButton title="Reset" onPress={resetBtnHandler}/>
          <PrimaryButton title="OK" onPress={okBtnHandler}/>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  parentCont: {
    // backgroundColor: 'grey',
    flex: 1,
    justifyContent: "space-between",
    // paddingHorizontal: 96,
  },
  gameTitle: {
    fontSize: 32,
    textAlign: "center",
    marginTop: 30,
    color: "#FFFFFF",
    flex: 1,
    fontWeight: '600'
  },
  inputBtnCont: {
    height: 210,
    marginHorizontal: 20,
    // flex: 2,
    backgroundColor: 'rgba(0,0,0, 0.60)',
    justifyContent:'center',
    borderRadius: 16,
    marginBottom: 300,
    alignItems: 'center'
  },
  childCont: {
    width: "auto",
    alignItems: "center",
  },
  inputCont: {
    borderColor: "transparent",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 5,
    marginBottom: 32,
    width: 120,
    backgroundColor: Colors.grey400,
    fontSize: 28,
    fontWeight: "700",
    color: Colors.black500,
    textAlign: "center",
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 290,
  },
});
