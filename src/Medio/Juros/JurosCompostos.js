import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import colors from "../../../colors";
import styles from "../MedStyle";

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

    // Cria um novo conjunto de dados para os juros
    const jurosAcumulados = dadosCompostos.map((montante, index) => {
      if (index === 0) {
        return 0;
      } else {
        return montante - dadosCompostos[index - 1];
      }
    });

    setDadosDoGrafico({
      labels: Array.from({ length: t + 1 }, (_, i) => `Ano ${i}`),
      datasets: [
        {
          data: dadosCompostos,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 2,
        },
        {
          data: jurosAcumulados,
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Cor diferente para os juros
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
    <View style={styles.center}>
      <Text style={styles.font}>Calculadora de Juros Compostos</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Valor Principal"
        onChangeText={(texto) => setPrincipal(texto)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholder="Taxa de Juros Anual (%)"
        onChangeText={(texto) => setTaxaDeJuros(texto)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
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
          <BarChart
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
  containarGrafico: {
    marginTop: 20,
  },
});
