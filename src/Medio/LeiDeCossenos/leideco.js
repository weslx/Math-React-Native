import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "../MedStyle";
import colors from "../../../colors";

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
      <Text style={styles.font}>Lei dos Cossenos</Text>
      <TextInput
        style={styles.inputs}
        onChangeText={setSideA}
        placeholder="Lado A"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        onChangeText={setSideB}
        placeholder="Lado B"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        onChangeText={setSideC}
        placeholder="Lado C"
        keyboardType="numeric"
      />
      <Button
        color={colors.primary}
        onPress={calculateTriangle}
        title="Calcular Ângulos"
      />
      <Text>Ângulo A: {angleA}</Text>
      <Text>Ângulo B: {angleB}</Text>
      <Text>Ângulo C: {angleC}</Text>
      {steps.map((step, index) => (
        <Text key={index}>{step}</Text>
      ))}
    </View>
  );
};

export default TriangleCalculator;
