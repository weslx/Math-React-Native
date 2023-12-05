import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../MedStyle";
import colors from "../../../colors";
import { TouchableOpacity } from "react-native";

const TriangleCalculator = () => {
  const [sideA, setSideA] = useState(0);
  const [sideB, setSideB] = useState(0);
  const [sideC, setSideC] = useState(0);
  const [angleA, setAngleA] = useState(0);
  const [angleB, setAngleB] = useState(0);
  const [angleC, setAngleC] = useState(0);
  const [steps, setSteps] = useState([]);

  const calculateTriangle = () => {
    let stepsArray = [];

    let angleAInRadians = Math.acos(
      (sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)
    );

    let angleADegrees = ((angleAInRadians * 180) / Math.PI).toFixed(2);

    setAngleA(angleADegrees);

    let angleBInRadians = Math.acos(
      (sideA ** 2 + sideC ** 2 - sideB ** 2) / (2 * sideA * sideC)
    );

    let angleBDegrees = ((angleBInRadians * 180) / Math.PI).toFixed(2);

    setAngleB(angleBDegrees);

    let angleCInRadians = Math.acos(
      (sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)
    );

    let angleCDegrees = ((angleCInRadians * 180) / Math.PI).toFixed(2);

    setAngleC(angleCDegrees);

    setSteps(stepsArray);
  };

  return (
    <View style={styles.center}>
      <TextInput
        style={styles.inputs}
        placeholderTextColor={colors.primary}
        onChangeText={setSideA}
        placeholder="Lado A"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholderTextColor={colors.primary}
        onChangeText={setSideB}
        placeholder="Lado B"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholderTextColor={colors.primary}
        onChangeText={setSideC}
        placeholder="Lado C"
        keyboardType="numeric"
      />
      <TouchableOpacity
        onPress={calculateTriangle}
        style={styles.botao_calcular}
      >
        <Text style={styles.btn_text}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Ângulo A: {angleA}</Text>
      <Text style={styles.text}>Ângulo B: {angleB}</Text>
      <Text style={styles.text}>Ângulo C: {angleC}</Text>
      {steps.map((step, index) => (
        <Text key={index}>{step}</Text>
      ))}
    </View>
  );
};
export default TriangleCalculator;
