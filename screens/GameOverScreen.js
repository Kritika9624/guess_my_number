import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import ScreenTitle from "../components/ScreenTitle";
import Colors from "../constants/colors";

export default function GameOverScreen({ userNumber, onStartNewGame }) {
  return (
    <View style={{flex: 1}}>
      <ScreenTitle title="Game over" />
      <View style={styles.parentCont}>
        <View style={styles.imgCont}>
          <Image
            style={styles.img}
            source={require("../assets/images/success.png")}
          />
        </View>
        <View style={styles.textCont}>
        <Text style={styles.summary}>Your number was <Text style={styles.userNumber}>{userNumber}</Text></Text>
        <Pressable style={styles.newGameBtn} onPress={onStartNewGame}>
          <Text style={styles.newGameText}>Start again</Text>
        </Pressable>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentCont: {
    alignItems: "center",
    marginTop: 50,
    flex: 1
  },
  imgCont: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    backgroundColor: Colors.blue200,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  newGameBtn: {
    backgroundColor: Colors.blue500,
    width: 130,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 40,
  },
  newGameText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  summary: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    marginTop: 40,
  },
  textCont: {
    alignItems: "center",
    justifyContent: "center",
    // flex: 1
  },
  userNumber: {
    fontWeight: '800'
  }
});
