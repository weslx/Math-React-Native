import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import colors from "../../../colors";

const Radiciação = () => {
  const [radicand, setRadicand] = useState("");
  const [index, setIndex] = useState("");
  const [result, setResult] = useState("");

  const calculateRadix = () => {
    if (radicand && index) {
      const radicandNumber = parseFloat(radicand);
      const indexNumber = parseFloat(index);
      if (!isNaN(radicandNumber) && !isNaN(indexNumber) && indexNumber !== 0) {
        setResult(
          `${indexNumber}√${radicandNumber} = ${
            radicandNumber ** (1 / indexNumber)
          }`
        );
      } else {
        setResult("Entradas inválidas");
      }
    } else {
      setResult("Por favor, insira o radicando e o índice");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Insira o radicando"
        placeholderTextColor={colors.primary}
        keyboardType="numeric"
        value={radicand}
        onChangeText={(text) => setRadicand(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Insira o índice"
        placeholderTextColor={colors.primary}
        keyboardType="numeric"
        value={index}
        onChangeText={(text) => setIndex(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calculateRadix}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      {result !== "" && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    padding: 10,
    width: "75%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    width: "75%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
});

export default Radiciação;
