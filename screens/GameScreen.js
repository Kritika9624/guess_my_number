import { Alert, StyleSheet, View } from "react-native";
import ScreenTitle from "../components/ScreenTitle";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberConainer";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import {Ionicons} from '@expo/vector-icons';

let maxLimit = 100, minLimit = 1;
export default function GameScreen({ userNumber, onGameOver }) {
  let initialGuess = generateRandomBetween(minLimit, maxLimit, userNumber);
  const [currGuess, setCurrGuess] = useState(initialGuess);

  function generateRandomBetween(min, max, exclude) {
    let randNum = Math.floor(Math.random() * (max - min)) + min;
    if (randNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return randNum;
    }
  }

  useEffect(() => {
    if(currGuess == userNumber){
      setTimeout(() => onGameOver(), 300);
    }
  }, [currGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction){
    if((direction === 'lower' && userNumber > currGuess) || (direction === 'greater' && userNumber < currGuess)){
      Alert.alert("Don't lie!", "You know you are wrong...", [{title:'Ok', style: 'cancel'}]);
      return;
    }

    if(direction === 'lower'){
      maxLimit = currGuess;
    }else {
      minLimit = currGuess + 1;
    }
    const newRandNum = generateRandomBetween(minLimit, maxLimit, currGuess);
    setCurrGuess(newRandNum);
  }

  return (
    <View style={styles.parentCont}>
      <ScreenTitle title="Opponent's Guess" />
      <View style={styles.guessBtnsCont}>
        <View style={styles.guessNumCont}>
          <NumberContainer guess={currGuess} />
        </View>
        <View style={styles.btnRow}>
          <PrimaryButton title="-" onPress={nextGuessHandler.bind(this, 'lower')}/>
          <PrimaryButton title="+" onPress={nextGuessHandler.bind(this, 'greater')}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentCont: {
    flex: 1,
  },
  guessNumCont: {
    alignItems: "center",
  },
  btnRow: {
    width: 260,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  guessBtnsCont: {
    backgroundColor: Colors.blackAlpha,
    marginTop: 180,
    marginHorizontal: 20,
    paddingVertical: 28,
    borderRadius: 16,
    alignItems: 'center'
  },
});
