import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

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

    stepsArray.push(
      `Passo 1: Recebemos os lados do triângulo. Lado A: ${sideA}, Lado B: ${sideB}, Lado C: ${sideC}`
    );

    let angleAInRadians = Math.acos(
      (sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)
    );
    stepsArray.push(
      `Passo 2: Calculamos o ângulo A em radianos usando a Lei dos Cossenos: ${angleAInRadians}`
    );
    let angleADegrees = ((angleAInRadians * 180) / Math.PI).toFixed(2);
    stepsArray.push(
      `Passo 3: Convertemos o ângulo A para graus: ${angleADegrees}`
    );
    setAngleA(angleADegrees);

    let angleBInRadians = Math.acos(
      (sideA ** 2 + sideC ** 2 - sideB ** 2) / (2 * sideA * sideC)
    );
    stepsArray.push(
      `Passo 4: Calculamos o ângulo B em radianos usando a Lei dos Cossenos: ${angleBInRadians}`
    );
    let angleBDegrees = ((angleBInRadians * 180) / Math.PI).toFixed(2);
    stepsArray.push(
      `Passo 5: Convertemos o ângulo B para graus: ${angleBDegrees}`
    );
    setAngleB(angleBDegrees);

    let angleCInRadians = Math.acos(
      (sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)
    );
    stepsArray.push(
      `Passo 6: Calculamos o ângulo C em radianos usando a Lei dos Cossenos: ${angleCInRadians}`
    );
    let angleCDegrees = ((angleCInRadians * 180) / Math.PI).toFixed(2);
    stepsArray.push(
      `Passo 7: Convertemos o ângulo C para graus: ${angleCDegrees}`
    );
    setAngleC(angleCDegrees);

    setSteps(stepsArray);
  };

  return (
    <View>
      <TextInput
        onChangeText={setSideA}
        placeholder="Lado A"
        keyboardType="numeric"
      />
      <TextInput
        onChangeText={setSideB}
        placeholder="Lado B"
        keyboardType="numeric"
      />
      <TextInput
        onChangeText={setSideC}
        placeholder="Lado C"
        keyboardType="numeric"
      />
      <Button onPress={calculateTriangle} title="Calcular Ângulos" />
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
