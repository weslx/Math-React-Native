import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import colors from "../../../colors";

const Exponenciação = () => {
  const [base, setBase] = useState("");
  const [exponent, setExponent] = useState("");
  const [result, setResult] = useState("");

  const calculateExponentiation = () => {
    if (base && exponent) {
      const baseNumber = parseFloat(base);
      const exponentNumber = parseFloat(exponent);
      if (!isNaN(baseNumber) && !isNaN(exponentNumber)) {
        setResult(
          `${baseNumber}^${exponentNumber} = ${Math.pow(
            baseNumber,
            exponentNumber
          )}`
        );
      } else {
        setResult("Entradas inválidas");
      }
    } else {
      setResult("Por favor, insira a base e o expoente");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Exponenciação</Text>
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
        placeholder="Insira o expoente"
        placeholderTextColor={colors.primary}
        keyboardType="numeric"
        value={exponent}
        onChangeText={(text) => setExponent(text)}
      />
      <TouchableOpacity style={styles.button} onPress={calculateExponentiation}>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.primary,
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

export default Exponenciação;
