import { StyleSheet, Pressable, Text } from "react-native";
import Colors from "../constants/colors";

export default function PrimaryButton({ title, onPress }) {
  return (
    <>
    {(title === 'OK' || title === 'Reset') && <OkOrResetBtns btnTitle={title} btnOnPress={onPress}/>}
    {(title === '+' || title === '-') && <LowerOrHigherBtns btnTitle={title} btnOnPress={onPress}/>}
    </>
  );
}

function OkOrResetBtns({btnTitle, btnOnPress}){
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? btnOnPress === "OK"
            ? [styles.buttonOK, styles.pressedOk]
            : [styles.buttonReset, styles.pressedReset]
          : btnTitle === "OK"
          ? styles.buttonOK
          : styles.buttonReset
      }
      
      onPress={btnOnPress}
    >
      <Text style={btnTitle === "OK" ? styles.textOK : styles.textReset}>
        {btnTitle}
      </Text>
    </Pressable>
  );
}

function LowerOrHigherBtns({btnTitle, btnOnPress}){
  return (
    <Pressable
      style={({ pressed }) =>
        pressed
          ? [styles.buttonOK, styles.pressedOk]
          : styles.buttonOK
      }
      
      onPress={btnOnPress}
    >
      <Text style={styles.textOK}>
        {btnTitle}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonOK: {
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 56,
    backgroundColor: Colors.blue500,
    borderRadius: 30,
    // marginLeft: 20,
    // width: '40%'
  },
  buttonReset: {
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 48,
    backgroundColor: Colors.grey500,
    borderRadius: 30,
    // width: '40%'
  },
  textOK: {
    color: "white",
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600'
  },
  textReset: {
    color: "grey",
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600'
  },
  pressedOk: {
    backgroundColor: Colors.blue600,
  },
  pressedReset: {
    backgroundColor: Colors.grey600,
  },
});
