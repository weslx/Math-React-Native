import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import colors from "../../../colors";
import styles from "../MedStyle";

export default function CalculadoraLogaritmo() {
  const [base, setBase] = useState("");
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularLogaritmo = () => {
    if (base === "" || numero === "") {
      setResultado("Por favor, preencha ambos os campos.");
      return;
    }

    const baseNum = parseFloat(base);
    const num = parseFloat(numero);

    if (isNaN(baseNum) || baseNum <= 0) {
      setResultado(
        "A base do logaritmo deve ser um número válido maior que zero."
      );
    } else if (isNaN(num) || num <= 0) {
      setResultado("O número deve ser um número válido maior que zero.");
    } else {
      const logaritmo = Math.log(num) / Math.log(baseNum);
      setResultado(
        `Logaritmo na base ${base} de ${num} é: ${logaritmo.toFixed(2)}`
      );
    }
  };

  return (
    <View style={styles.center}>
      <Text style={styles.font}>Calculadora de Logaritmo</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Insira o número"
        onChangeText={(texto) => setNumero(texto)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholder="Insira a base do logaritmo"
        onChangeText={(texto) => setBase(texto)}
        keyboardType="numeric"
      />

      <Button
        color={colors.primary}
        title="Calcular"
        onPress={calcularLogaritmo}
      />
      {resultado && <Text style={estilos.resultado}>{resultado}</Text>}
    </View>
  );
}
