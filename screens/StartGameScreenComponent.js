import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start New Game pussy boy</Text>
      <Card style={styles.inputConatainer}>
        <Text>Select a Nmber?</Text>
        <TextInput />
        <View style={styles.buttonConatainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color={Colors.primary} />
          </View>
          <View style={styles.button}>
            <Button title="confirm" onPress={() => {}} color={Colors.accent} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputConatainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonConatainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 90,
  },
});
export default StartGameScreen;
