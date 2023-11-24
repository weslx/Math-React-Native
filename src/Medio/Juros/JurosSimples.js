import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import colors from "../../../colors";
import styles from "../MedStyle";

export default function JurosSimples() {
  const [principal, setPrincipal] = useState("");
  const [taxaDeJuros, setTaxaDeJuros] = useState("");
  const [tempo, setTempo] = useState("");
  const [resultado, setResultado] = useState(null);
  const [tipoDeCrescimento, setTipoDeCrescimento] = useState("");
  const [dadosDoGrafico, setDadosDoGrafico] = useState(null);

  const calcularJurosSimples = () => {
    if (principal === "" || taxaDeJuros === "" || tempo === "") {
      setResultado("Por favor, preencha todos os campos.");
      setTipoDeCrescimento("");
      setDadosDoGrafico(null);
      return;
    }

    const p = parseFloat(principal);
    const r = parseFloat(taxaDeJuros) / 100;
    const t = parseFloat(tempo);

    const dadosSimples = [p];
    for (let i = 1; i <= t; i++) {
      const montante = p + p * r * i;
      dadosSimples.push(montante);
    }
    const colors = Array(dadosSimples.length).fill(
      (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
    );

    setDadosDoGrafico({
      labels: Array.from({ length: t + 1 }, (_, i) => `Ano ${i}`),
      datasets: [
        {
          data: dadosSimples,
          colors: colors, // Altera a cor para o array de cores
          strokeWidth: 2,
        },
      ],
    });

    if (eLinear(dadosSimples)) {
      setTipoDeCrescimento("Linear");
    } else {
      setTipoDeCrescimento("Exponencial");
    }

    setResultado(
      `Montante total após ${t} anos: ${dadosSimples[t].toFixed(2)}`
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
      <Text style={styles.font}>Calculadora de Juros Simples</Text>
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
        title="Calcular"
        onPress={calcularJurosSimples}
        color={colors.primary}
      />
      {resultado && <Text style={estilos.resultado}>{resultado}</Text>}
      {tipoDeCrescimento && (
        <Text style={estilos.resultado}>
          Tipo de Crescimento: {tipoDeCrescimento}
        </Text>
      )}
      {dadosDoGrafico && (
        <View style={estilos.contenedorDoGrafico}>
          <Text style={estilos.tituloDoGrafico}>Título do Gráfico</Text>
          <BarChart
            data={dadosDoGrafico}
            width={350}
            height={200}
            chartConfig={{
              backgroundGradientFrom: colors.primary,
              backgroundGradientTo: colors.primary,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Altera a cor para preto
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Altera a cor da etiqueta para preto
              strokeWidth: 2,
              barPercentage: 0.7,
              withDots: false,
              propsForLabels: {
                strokeWidth: 2,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
              backgroundColor: "#F0F0F0",
              borderWidth: 1,
              borderColor: "#E0E0E0",
            }}
            withInnerLines={false}
            showValuesOnTopOfBars
            withCustomBarColorFromData
            flatColor={true}
          />
        </View>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
  contenedorDoGrafico: {
    marginTop: 20,
  },
  tituloDoGrafico: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
