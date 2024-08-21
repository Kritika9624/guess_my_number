import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameisOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(enteredNum){
    setUserNumber(enteredNum);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  function newGameHandler() {
    setUserNumber();
    setGameIsOver(true);
  }
  
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameisOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} onStartNewGame={newGameHandler}/>
  }

  return (
    <ImageBackground
        // source={require("./assets/images/guessing.png")}
        source={require("./assets/images/dice.jpg")}
        style={styles.bgImgCont}
        resizeMode="cover"
        // blurRadius={7} 
      >
    <SafeAreaView style={{flex:1, backgroundColor: 'rgba(0,0,0, 0.40)'}}>
      {screen}
    </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImgCont: {
    flex: 3,
  },
});
