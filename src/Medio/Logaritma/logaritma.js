import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

const CalculadoraLogaritimo = () => {
  const [selectedFunction, setSelectedFunction] = useState("Função Quadrática");
  const [result, setResult] = useState("");
  const [calculationSteps, setCalculationSteps] = useState("");
  const [formula, setFormula] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [coeficienteQuadraticoValue, setCoeficienteQuadraticoValue] =
    useState("");
  const [constanteQuadraticaValue, setConstanteQuadraticaValue] = useState("");
  const [chartSeries, setChartSeries] = useState([]);

  const getFormula = (selectedFunction) => {
    if (selectedFunction === "Função Quadrática") {
      return "Função Quadrática: ax^2 + bx + c";
    } else if (selectedFunction === "Função Linear") {
      return "Função Linear: y = 2x + 3";
    } else if (selectedFunction === "Função Exponencial") {
      return "Função Exponencial: y = e^x";
    } else if (selectedFunction === "Função Logarítmica") {
      return "Função Logarítmica: y = log_b(x)";
    }
    return "";
  };

  const calculateFunctions = () => {
    let value = parseFloat(inputValue) || 0;
    let resultValue = 0;

    if (selectedFunction === "Função Quadrática") {
      let coeficienteQuadratico = parseFloat(coeficienteQuadraticoValue) || 0;
      let constanteQuadratica = parseFloat(constanteQuadraticaValue) || 0;
      resultValue =
        coeficienteQuadratico * Math.pow(value, 2) + constanteQuadratica;
    } else if (selectedFunction === "Função Linear") {
      resultValue = 2 * value + 3;
    } else if (selectedFunction === "Função Exponencial") {
      resultValue = Math.exp(value);
    } else if (selectedFunction === "Função Logarítmica") {
      // Implemente a lógica para a função logarítmica conforme necessário
    }

    let steps = "Passos do cálculo:\n";
    steps += "1. Substitua os valores necessários na fórmula da função.\n";
    steps += "2. Realize os cálculos.\n";
    steps += "3. Obtenha o resultado da função.\n";

    setResult(`Resultado:\n${resultValue}`);
    setCalculationSteps(steps);
    setChartSeries(
      Array.from({ length: 21 }, (_, index) => index - 10).map((value) => ({
        x: value,
        y:
          selectedFunction === "Função Quadrática"
            ? calculateQuadraticFunction(value)
            : selectedFunction === "Função Linear"
            ? calculateLinearFunction(value)
            : calculateExponentialFunction(value),
      }))
    );
  };

  const calculateQuadraticFunction = (value) => {
    let coeficienteQuadratico = parseFloat(coeficienteQuadraticoValue) || 0;
    let constanteQuadratica = parseFloat(constanteQuadraticaValue) || 0;
    return coeficienteQuadratico * Math.pow(value, 2) + constanteQuadratica;
  };

  const calculateLinearFunction = (value) => {
    return 2 * value + 3;
  };

  const calculateExponentialFunction = (value) => {
    return Math.exp(value);
  };

  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 20 }}>
          Selecione a função:
        </Text>
        <Picker
          selectedValue={selectedFunction}
          onValueChange={(value) => {
            setSelectedFunction(value);
            setFormula(getFormula(value));
          }}
        >
          <Picker.Item label="Função Quadrática" value="Função Quadrática" />
          <Picker.Item label="Função Linear" value="Função Linear" />
          <Picker.Item label="Função Exponencial" value="Função Exponencial" />
          {/* Adicione mais Picker.Items conforme necessário */}
        </Picker>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
          {formula}
        </Text>
        <TextInput
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          placeholder="Digite um valor para x"
        />
        {selectedFunction === "Função Quadrática" && (
          <>
            <TextInput
              value={coeficienteQuadraticoValue}
              onChangeText={(text) => setCoeficienteQuadraticoValue(text)}
              placeholder="Digite o coeficiente quadrático (a)"
            />
            <TextInput
              value={constanteQuadraticaValue}
              onChangeText={(text) => setConstanteQuadraticaValue(text)}
              placeholder="Digite a constante (c)"
            />
          </>
        )}
        <Button title="Calcular Funções" onPress={calculateFunctions} />
        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
          {result}
        </Text>
        <Text style={{ fontStyle: "italic", marginTop: 20 }}>
          {calculationSteps}
        </Text>
      </View>
    </ScrollView>
  );
};

export default CalculadoraLogaritimo;
