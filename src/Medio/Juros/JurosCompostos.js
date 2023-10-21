import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import colors from "../../../colors";

export default function JurosCompostos() {
  const [principal, setPrincipal] = useState("");
  const [taxaDeJuros, setTaxaDeJuros] = useState("");
  const [tempo, setTempo] = useState("");
  const [resultado, setResultado] = useState(null);
  const [tipoDeCrescimento, setTipoDeCrescimento] = useState("");
  const [dadosDoGrafico, setDadosDoGrafico] = useState(null);

  const calcularJurosCompostos = () => {
    if (principal === "" || taxaDeJuros === "" || tempo === "") {
      setResultado("Por favor, preencha todos os campos.");
      setTipoDeCrescimento("");
      setDadosDoGrafico(null);
      return;
    }

    const p = parseFloat(principal);
    const r = parseFloat(taxaDeJuros) / 100;
    const t = parseFloat(tempo);

    const dadosCompostos = [p];
    for (let i = 1; i <= t; i++) {
      const montante = dadosCompostos[i - 1] * (1 + r);
      dadosCompostos.push(montante);
    }

    setDadosDoGrafico({
      labels: Array.from({ length: t + 1 }, (_, i) => `Ano ${i}`),
      datasets: [
        {
          data: dadosCompostos,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2,
        },
      ],
    });

    if (eLinear(dadosCompostos)) {
      setTipoDeCrescimento("Linear");
    } else {
      setTipoDeCrescimento("Exponencial");
    }

    setResultado(
      `Montante total após ${t} anos: ${dadosCompostos[t].toFixed(2)}`
    );
  };

  const eLinear = (dados) => {
    // Verifique se os dados se ajustam a um crescimento linear
    for (let i = 1; i < dados.length; i++) {
      if (dados[i] - dados[i - 1] !== dados[1] - dados[0]) {
        return false;
      }
    }
    return true;
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Calculadora de Juros Compostos</Text>
      <TextInput
        style={estilos.entrada}
        placeholder="Valor Principal"
        onChangeText={(texto) => setPrincipal(texto)}
        keyboardType="numeric"
      />
      <TextInput
        style={estilos.entrada}
        placeholder="Taxa de Juros Anual (%)"
        onChangeText={(texto) => setTaxaDeJuros(texto)}
        keyboardType="numeric"
      />
      <TextInput
        style={estilos.entrada}
        placeholder="Período (em anos)"
        onChangeText={(texto) => setTempo(texto)}
        keyboardType="numeric"
      />
      <Button
        color={colors.primary}
        title="Calcular"
        onPress={calcularJurosCompostos}
      />
      {resultado && <Text style={estilos.resultado}>{resultado}</Text>}
      {tipoDeCrescimento && (
        <Text style={estilos.resultado}>
          Tipo de Crescimento: {tipoDeCrescimento}
        </Text>
      )}
      {dadosDoGrafico && (
        <View style={estilos.containarGrafico}>
          <LineChart
            data={dadosDoGrafico}
            width={350}
            height={200}
            chartConfig={{
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              color: (opacity = 1) => colors.primary,
              labelColor: (opacity = 1) => "black",
              strokeWidth: 2,
              barPercentage: 1,
            }}
          />
        </View>
      )}
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
    selectionColor: colors.primary,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
  containarGrafico: {
    marginTop: 20,
  },
});
