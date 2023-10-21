import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import colors from "../../../colors";

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
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Calculadora de Logaritmo</Text>
      <TextInput
        style={estilos.entrada}
        placeholder="Insira o número"
        onChangeText={(texto) => setNumero(texto)}
        keyboardType="numeric"
      />
      <TextInput
        style={estilos.entrada}
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

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  entrada: {
    height: 40,
    borderColor: colors.primary,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
});
