import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import colors from "../../../colors";
import styles from "../MedStyle";
import { TouchableOpacity } from "react-native";

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

    const jurosAcumulados = dadosCompostos.map((montante, index) => {
      if (index === 0) {
        return 0;
      } else {
        return montante - dadosCompostos[index - 1];
      }
    });

    const colors = Array(dadosCompostos.length).fill(
      (opacity = 1) => `rgba(255, 255,251, ${opacity})`
    );

    const dadosArredondados = dadosCompostos.map((valor) =>
      parseFloat(valor.toFixed(2))
    );

    setDadosDoGrafico({
      labels: Array.from({ length: t + 1 }, (_, i) => `${i}°ano`),
      datasets: [
        {
          data: dadosArredondados,
          colors: colors,
          strokeWidth: 2,
        },
        {
          data: jurosAcumulados,
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
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
    for (let i = 1; i < dados.length; i++) {
      if (dados[i] - dados[i - 1] !== dados[1] - dados[0]) {
        return false;
      }
    }
    return true;
  };

  return (
    <View style={styles.center}>
      <TextInput
        style={styles.inputs}
        placeholderTextColor={colors.primary}
        placeholder="Valor Principal"
        onChangeText={(texto) => setPrincipal(texto)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholderTextColor={colors.primary}
        placeholder="Taxa de Juros Anual (%)"
        onChangeText={(texto) => setTaxaDeJuros(texto)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputs}
        placeholderTextColor={colors.primary}
        placeholder="Período (em anos)"
        onChangeText={(texto) => setTempo(texto)}
        keyboardType="numeric"
      />
      <TouchableOpacity
        onPress={calcularJurosCompostos}
        style={styles.botao_calcular}
      >
        <Text style={styles.btn_text}>Calcular</Text>
      </TouchableOpacity>
      {resultado && (
        <Text>
          <Text style={estilos.resultado}>{resultado}</Text>
        </Text>
      )}

      {dadosDoGrafico && (
        <View style={estilos.containarGrafico}>
          <BarChart
            data={dadosDoGrafico}
            width={350}
            height={200}
            chartConfig={{
              backgroundGradientFrom: colors.primary,
              backgroundGradientTo: colors.primary,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
              borerWidth: 1,
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
  containarGrafico: {
    marginTop: 20,
  },
});
