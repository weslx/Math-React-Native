import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

class CalculadoraLogaritimo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFunction: "Função Quadrática",
      result: "",
      calculationSteps: "",
      formula: "",
      inputValue: "",
      coeficienteQuadraticoValue: "",
      constanteQuadraticaValue: "",
      chartSeries: [],
    };
  }

  getFormula = (selectedFunction) => {
    if (selectedFunction === "Função Quadrática") {
      return "Função Quadrática: ax^2 + bx + c";
    } else if (selectedFunction === "Função Linear") {
      return "Função Linear: y = 2x + 3";
    } else if (selectedFunction === "Função Exponencial") {
      return "Função Exponencial: y = e^x";
    }
    return "";
  };

  calculateFunctions = () => {
    const {
      selectedFunction,
      inputValue,
      coeficienteQuadraticoValue,
      constanteQuadraticaValue,
    } = this.state;

    let value = parseFloat(inputValue) || 0;
    let result = 0;

    if (selectedFunction === "Função Quadrática") {
      let coeficienteQuadratico = parseFloat(coeficienteQuadraticoValue) || 0;
      let constanteQuadratica = parseFloat(constanteQuadraticaValue) || 0;
      result = coeficienteQuadratico * Math.pow(value, 2) + constanteQuadratica;
    } else if (selectedFunction === "Função Linear") {
      result = 2 * value + 3;
    } else if (selectedFunction === "Função Exponencial") {
      result = Math.exp(value);
    } else if (selectedFunction === "Função Logarítmica") {
      let base = parseFloat(coeficienteQuadraticoValue) || 0;
      let argument = parseFloat(constanteQuadraticaValue) || 0;
    }

    let steps = "Passos do cálculo:\n";
    steps += "1. Substitua os valores necessários na fórmula da função.\n";
    steps += "2. Realize os cálculos.\n";
    steps += "3. Obtenha o resultado da função.\n";

    this.setState({
      result: `Resultado:\n${result}`,
      calculationSteps: steps,
      chartSeries: Array.from({ length: 21 }, (_, index) => index - 10).map(
        (value) => ({
          x: value,
          y:
            selectedFunction === "Função Quadrática"
              ? this.calculateQuadraticFunction(value)
              : selectedFunction === "Função Linear"
              ? this.calculateLinearFunction(value)
              : this.calculateExponentialFunction(value),
        })
      ),
    });
  };

  calculateQuadraticFunction = (value) => {
    const { coeficienteQuadraticoValue, constanteQuadraticaValue } = this.state;

    let coeficienteQuadratico = parseFloat(coeficienteQuadraticoValue) || 0;
    let constanteQuadratica = parseFloat(constanteQuadraticaValue) || 0;
    return coeficienteQuadratico * Math.pow(value, 2) + constanteQuadratica;
  };

  calculateLinearFunction = (value) => {
    return 2 * value + 3;
  };

  calculateExponentialFunction = (value) => {
    return Math.exp(value);
  };

  render() {
    const {
      selectedFunction,
      result,
      calculationSteps,
      formula,
      inputValue,
      coeficienteQuadraticoValue,
      constanteQuadraticaValue,
      chartSeries,
    } = this.state;

    return (
      <ScrollView>
        <View style={{ padding: 16 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 20 }}>
            Selecione a função:
          </Text>
          <Picker
            selectedValue={selectedFunction}
            onValueChange={(value) => {
              this.setState({
                selectedFunction: value,
                formula: this.getFormula(value),
              });
            }}
          >
            <Picker.Item label="Função Quadrática" value="Função Quadrática" />
            <Picker.Item label="Função Linear" value="Função Linear" />
            <Picker.Item
              label="Função Exponencial"
              value="Função Exponencial"
            />
          </Picker>
          <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
            {formula}
          </Text>
          <TextInput
            value={inputValue}
            onChangeText={(text) => this.setState({ inputValue: text })}
            placeholder="Digite um valor para x"
          />
          {selectedFunction === "Função Quadrática" && (
            <>
              <TextInput
                value={coeficienteQuadraticoValue}
                onChangeText={(text) =>
                  this.setState({ coeficienteQuadraticoValue: text })
                }
                placeholder="Digite o coeficiente quadrático (a)"
              />
              <TextInput
                value={constanteQuadraticaValue}
                onChangeText={(text) =>
                  this.setState({ constanteQuadraticaValue: text })
                }
                placeholder="Digite a constante (c)"
              />
            </>
          )}
          <Button title="Calcular Funções" onPress={this.calculateFunctions} />
          <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
            {result}
          </Text>
          <Text style={{ fontStyle: "italic", marginTop: 20 }}>
            {calculationSteps}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default CalculadoraLogaritimo;
