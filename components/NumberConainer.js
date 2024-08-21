import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

export default function NumberContainer({ guess }) {
  return (
    <View style={styles.parentCont}>
      <Text style={styles.guessText}>{guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parentCont: {
    backgroundColor: Colors.blue200,
    borderRadius: 8,
    padding: 18,
    width: 140,
  },
  guessText: { color: Colors.blue500, textAlign: "center", fontSize: 32,
  fontWeight: '700' },
});
