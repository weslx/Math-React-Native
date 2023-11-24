import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LineChart } from "react-native-chart-kit";
import colors from "../../../colors";

const Funcoes = () => {
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
  const [baseExponencialValue, setBaseExponencialValue] = useState("");
  const [baseLogaritmicaValue, setBaseLogaritmicaValue] = useState("");

  const getFormula = (selectedFunction) => {
    switch (selectedFunction) {
      case "Função Quadrática":
        return "Função Quadrática: ax^2 + bx + c";
      case "Função Linear":
        return "Função Linear: y = 2x + 3";
      case "Função Exponencial":
        return "Função Exponencial: y = e^x";
      case "Função Logarítmica":
        return "Função Logarítmica: y = log_b(x)";
      default:
        return "";
    }
  };

  const calculateFunctions = () => {
    let value = parseFloat(inputValue) || 0;
    let resultValue = 0;

    switch (selectedFunction) {
      case "Função Quadrática":
        let a = parseFloat(coeficienteQuadraticoValue) || 0;
        let b = parseFloat(coeficienteLinearValue) || 0;
        let c = parseFloat(constanteQuadraticaValue) || 0;
        resultValue = a * Math.pow(value, 2) + b * value + c;
        break;
      case "Função Linear":
        let m = parseFloat(coeficienteLinearValue) || 0;
        let cLinear = parseFloat(constanteQuadraticaValue) || 0;
        resultValue = m * value + cLinear;
        break;
      case "Função Exponencial":
        resultValue = Math.exp(value);
        break;
      case "Função Logarítmica":
        let baseLog = parseFloat(constanteQuadraticaValue) || Math.E;
        resultValue = Math.log(value) / Math.log(baseLog);
        break;
      default:
        break;
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
              : Math.log(value);
          }),
        },
      ],
    };

    setChartData(data);
  };

  const calculateQuadraticFunction = (value) => {
    let a = parseFloat(coeficienteQuadraticoValue) || 0;
    let b = parseFloat(coeficienteLinearValue) || 0;
    let c = parseFloat(constanteQuadraticaValue) || 0;
    return a * Math.pow(value, 2) + b * value + c;
  };

  const calculateLinearFunction = (value) => {
    let m = parseFloat(coeficienteLinearValue) || 0;
    let cLinear = parseFloat(constanteQuadraticaValue) || 0;
    return m * value + cLinear;
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

        {selectedFunction === "Função Linear" && (
          <>
            <TextInput
              value={coeficienteLinearValue}
              onChangeText={(text) => setCoeficienteLinearValue(text)}
              placeholder="Digite o coeficiente linear (m)"
            />
            <TextInput
              value={constanteQuadraticaValue}
              onChangeText={(text) => setConstanteQuadraticaValue(text)}
              placeholder="Digite a constante (c)"
            />
          </>
        )}

        {selectedFunction === "Função Exponencial" && (
          <>
            <TextInput
              value={baseExponencialValue}
              onChangeText={(text) => setBaseExponencialValue(text)}
              placeholder="Digite a base exponencial"
            />
          </>
        )}

        {selectedFunction === "Função Logarítmica" && (
          <>
            <TextInput
              value={baseLogaritmicaValue}
              onChangeText={(text) => setBaseLogaritmicaValue(text)}
              placeholder="Digite a base logarítmica"
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

export default Funcoes;
