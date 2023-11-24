import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LineChart } from "react-native-chart-kit";
import colors from "../../../colors";

const Funçoes = () => {
  const [selectedFunction, setSelectedFunction] = useState("Função Quadrática");
  const [result, setResult] = useState("");
  const [calculationSteps, setCalculationSteps] = useState("");
  const [formula, setFormula] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [coeficienteQuadraticoValue, setCoeficienteQuadraticoValue] =
    useState("");
  const [coeficienteLinearValue, setCoeficienteLinearValue] = useState("");
  const [constanteQuadraticaValue, setConstanteQuadraticaValue] = useState("");
  const [chartData, setChartData] = useState({});

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
      let coeficienteLinear = parseFloat(coeficienteLinearValue) || 0;
      let constanteQuadratica = parseFloat(constanteQuadraticaValue) || 0;
      resultValue =
        coeficienteQuadratico * Math.pow(value, 2) +
        coeficienteLinear * value +
        constanteQuadratica;
    } else if (selectedFunction === "Função Linear") {
      resultValue = 2 * value + 3;
    } else if (selectedFunction === "Função Exponencial") {
      resultValue = Math.exp(value);
    } else if (selectedFunction === "Função Logarítmica") {
      resultValue = Math.log(value); // Lógica básica para logaritmo natural
    }

    let steps = "Passos do cálculo:\n";
    steps += "1. Substitua os valores necessários na fórmula da função.\n";
    steps += "2. Realize os cálculos.\n";
    steps += "3. Obtenha o resultado da função.\n";

    setResult(`Resultado:\n${resultValue}`);
    setCalculationSteps(steps);
    updateChartData(selectedFunction);
  };

  const updateChartData = (selectedFunction) => {
    const data = {
      labels: Array.from({ length: 21 }, (_, index) => index - 10),
      datasets: [
        {
          data: Array.from({ length: 21 }, (_, index) => {
            const value = index - 10;
            return selectedFunction === "Função Quadrática"
              ? calculateQuadraticFunction(value)
              : selectedFunction === "Função Linear"
              ? calculateLinearFunction(value)
              : selectedFunction === "Função Exponencial"
              ? calculateExponentialFunction(value)
              : Math.log(value); // Lógica básica para logaritmo natural
          }),
        },
      ],
    };

    setChartData(data);
  };

  const calculateQuadraticFunction = (value) => {
    let coeficienteQuadratico = parseFloat(coeficienteQuadraticoValue) || 0;
    let coeficienteLinear = parseFloat(coeficienteLinearValue) || 0;
    let constanteQuadratica = parseFloat(constanteQuadraticaValue) || 0;
    return (
      coeficienteQuadratico * Math.pow(value, 2) +
      coeficienteLinear * value +
      constanteQuadratica
    );
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
          <Picker.Item label="Função Logarítmica" value="Função Logarítmica" />
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
              value={coeficienteLinearValue}
              onChangeText={(text) => setCoeficienteLinearValue(text)}
              placeholder="Digite o coeficiente linear (b)"
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
        {Object.keys(chartData).length > 0 && (
          <View style={{ marginTop: 20 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}
            >
              Gráfico da Função:
            </Text>
            <LineChart
              data={chartData}
              width={300}
              height={200}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Funçoes;
