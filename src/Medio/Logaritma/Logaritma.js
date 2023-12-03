import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import colors from "../../../colors";

const Logaritma = () => {
  const [base, setBase] = useState("");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const calculateLog = () => {
    if (base && input) {
      const baseNumber = parseFloat(base);
      const inputNumber = parseFloat(input);
      if (
        !isNaN(baseNumber) &&
        !isNaN(inputNumber) &&
        baseNumber > 0 &&
        inputNumber > 0
      ) {
        setResult(
          `log${baseNumber}(${inputNumber}) = ${
            Math.log(inputNumber) / Math.log(baseNumber)
          }`
        );
      } else {
        setResult("Entradas inválidas");
      }
    } else {
      setResult("Por favor, insira a base e o valor");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Insira a base"
        placeholderTextColor={colors.primary}
        keyboardType="numeric"
        value={base}
        onChangeText={(text) => setBase(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Insira o valor"
        placeholderTextColor={colors.primary}
        keyboardType="numeric"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calculateLog}>
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

export default Logaritma;
