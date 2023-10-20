import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import colors from "../../colors";

export default function JurosCompostos() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [growthType, setGrowthType] = useState("");
  const [chartData, setChartData] = useState(null);

  const calculateCompoundInterest = () => {
    if (principal === "" || rate === "" || time === "") {
      setResult("Por favor, preencha todos os campos.");
      setGrowthType("");
      setChartData(null);
      return;
    }

    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    const compoundData = [p];
    for (let i = 1; i <= t; i++) {
      const amount = compoundData[i - 1] * (1 + r);
      compoundData.push(amount);
    }

    setChartData({
      labels: Array.from({ length: t + 1 }, (_, i) => `Ano ${i}`),
      datasets: [
        {
          data: compoundData,
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
          strokeWidth: 2,
        },
      ],
    });

    if (isLinear(compoundData)) {
      setGrowthType("Linear");
    } else {
      setGrowthType("Exponencial");
    }

    setResult(`Montante total após ${t} anos: ${compoundData[t].toFixed(2)}`);
  };

  const isLinear = (data) => {
    // Verifique se os dados se ajustam a um crescimento linear
    for (let i = 1; i < data.length; i++) {
      if (data[i] - data[i - 1] !== data[1] - data[0]) {
        return false;
      }
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculadora de Juros Compostos</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor Principal"
        onChangeText={(text) => setPrincipal(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa de Juros Anual (%)"
        onChangeText={(text) => setRate(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Período (em anos)"
        onChangeText={(text) => setTime(text)}
        keyboardType="numeric"
      />
      <Button
        color={colors.primary}
        title="Calcular"
        onPress={calculateCompoundInterest}
      />
      {result && <Text style={styles.result}>{result}</Text>}
      {growthType && (
        <Text style={styles.result}>Tipo de Crescimento: {growthType}</Text>
      )}
      {chartData && (
        <View style={styles.chartContainer}>
          <LineChart
            data={chartData}
            width={350}
            height={200}
            chartConfig={{
              color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
              strokeWidth: 2,
              barPercentage: 0.5,
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: colors.primary,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
  chartContainer: {
    marginTop: 20,
  },
});
