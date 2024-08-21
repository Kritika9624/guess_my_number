import { StyleSheet, Text, View } from "react-native";

export default function ScreenTitle({ title }) {
  return (
    <View style={styles.titleCont}>
      <Text style={styles.screenTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleCont: {
    borderWidth: 1.5,
    marginHorizontal: 40,
    paddingVertical: 10,
    borderColor: "#FFF",
    marginTop: 24,
  },
  screenTitle: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
  },
});
