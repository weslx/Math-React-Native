import colors from "../../../colors";
import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../MedStyle";
import { TouchableOpacity } from "react-native";

const CongruencCalculator = () => {
  const [ladoA, setLadoA] = useState("");
  const [ladoB, setLadoB] = useState("");
  const [ladoC, setLadoC] = useState("");
  const [anguloA, setAnguloA] = useState("");
  const [anguloB, setAnguloB] = useState("");
  const [anguloC, setAnguloC] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularLadoLeiDosSenos = () => {
    // Certifique-se de que pelo menos um lado e um ângulo sejam fornecidos
    if ((ladoA || ladoB || ladoC) && (anguloA || anguloB || anguloC)) {
      // Certifique-se de que os valores de entrada sejam números
      const A = anguloA ? parseFloat(anguloA) : null;
      const B = anguloB ? parseFloat(anguloB) : null;
      const C = anguloC ? parseFloat(anguloC) : null;
      const a = ladoA ? parseFloat(ladoA) : null;
      const b = ladoB ? parseFloat(ladoB) : null;
      const c = ladoC ? parseFloat(ladoC) : null;

      if (
        (A === null || !isNaN(A)) &&
        (B === null || !isNaN(B)) &&
        (C === null || !isNaN(C)) &&
        (a === null || !isNaN(a)) &&
        (b === null || !isNaN(b)) &&
        (c === null || !isNaN(c))
      ) {
        // Certifique-se de que pelo menos um ângulo seja diferente de zero
        if (A !== 0 || B !== 0 || C !== 0) {
          // Verifique quais lados foram fornecidos e calcule o lado ausente
          if (a && A) {
            if (B) {
              const radianosA = (A * Math.PI) / 180;
              const radianosB = (B * Math.PI) / 180;
              const ladoB = (a * Math.sin(radianosB)) / Math.sin(radianosA);
              setResultado(`Lado B: ${ladoB.toFixed(2)}`);
            } else if (C) {
              const radianosA = (A * Math.PI) / 180;
              const radianosC = (C * Math.PI) / 180;
              const ladoC = (a * Math.sin(radianosC)) / Math.sin(radianosA);
              setResultado(`Lado C: ${ladoC.toFixed(2)}`);
            }
          } else if (b && B) {
            // Similar para ladoB e anguloB
          } else if (c && C) {
            // Similar para ladoC e anguloC
          } else {
            setResultado(
              "Por favor, forneça um lado e um ângulo correspondente."
            );
          }
        } else {
          setResultado("Ângulos não podem ser iguais a zero.");
        }
      } else {
        setResultado(
          "Por favor, insira valores válidos para os ângulos e lados."
        );
      }
    } else {
      setResultado("Por favor, forneça pelo menos um lado e um ângulo.");
    }
  };

  return (
    <View style={styles.center}>
      <TextInput
        style={styles.inputs}
        placeholderTextColor={colors.primary}
        placeholder="Lado A"
        onChangeText={(text) => setLadoA(text)}
        value={ladoA}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholder="Lado B"
        placeholderTextColor={colors.primary}
        onChangeText={(text) => setLadoB(text)}
        value={ladoB}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholderTextColor={colors.primary}
        placeholder="Lado C"
        onChangeText={(text) => setLadoC(text)}
        value={ladoC}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholderTextColor={colors.primary}
        placeholder="Ângulo A"
        onChangeText={(text) => setAnguloA(text)}
        value={anguloA}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholderTextColor={colors.primary}
        placeholder="Ângulo B"
        onChangeText={(text) => setAnguloB(text)}
        value={anguloB}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholderTextColor={colors.primary}
        placeholder="Ângulo C"
        onChangeText={(text) => setAnguloC(text)}
        value={anguloC}
        keyboardType="numeric"
      />
      <TouchableOpacity
        onPress={calcularLadoLeiDosSenos}
        style={styles.botao_calcular}
      >
        <Text style={styles.btn_text}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Resultado: {resultado}</Text>
    </View>
  );
};

export default CongruencCalculator;
