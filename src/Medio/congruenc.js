import colors from "../../colors";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const CongruencCalculator = () => {
  const [ladoA, setLadoA] = useState("");
  const [anguloA, setAnguloA] = useState("");
  const [anguloB, setAnguloB] = useState("");
  const [anguloC, setAnguloC] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularLadoLeiDosSenos = () => {
    // Certifique-se de que os valores de entrada sejam números
    const a = parseFloat(ladoA);
    const A = parseFloat(anguloA);
    const B = parseFloat(anguloB);
    const C = parseFloat(anguloC);

    if (!isNaN(a) && !isNaN(A) && !isNaN(B) && !isNaN(C)) {
      // Certifique-se de que os ângulos estão em radianos
      const radianosA = (A * Math.PI) / 180;
      const radianosB = (B * Math.PI) / 180;
      const radianosC = (C * Math.PI) / 180;

      // Usando a Lei dos Senos: (a / sen(A)) = (b / sen(B)) = (c / sen(C))
      const ladoB = (a * Math.sin(radianosB)) / Math.sin(radianosA);
      const ladoC = (a * Math.sin(radianosC)) / Math.sin(radianosA);

      setResultado(`Lado B: ${ladoB.toFixed(2)}, Lado C: ${ladoC.toFixed(2)}`);
    } else {
      setResultado("Por favor, insira valores válidos.");
    }
  };

  return (
    <View style={styles.center}>
      <Text style={styles.font}>Lei dos Senos Calculator</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Lado A"
        onChangeText={(text) => setLadoA(text)}
        value={ladoA}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholder="Ângulo A"
        onChangeText={(text) => setAnguloA(text)}
        value={anguloA}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholder="Ângulo B"
        onChangeText={(text) => setAnguloB(text)}
        value={anguloB}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholder="Ângulo C"
        onChangeText={(text) => setAnguloC(text)}
        value={anguloC}
        keyboardType="numeric"
      />
      <Button
        color={colors.primary}
        title="Calcular"
        onPress={calcularLadoLeiDosSenos}
      />
      <Text>Resultado: {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  inputs: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    color: colors.primary,
    marginBottom: 10,
    width: 200,
    height: 50,
  },
  font: {
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default CongruencCalculator;
