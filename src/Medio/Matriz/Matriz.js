import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import math from "mathjs";
import colors from "../../../colors";

const Matriz = () => {
  const [operation, setOperation] = useState("");
  const [matrixOrder, setMatrixOrder] = useState("");
  const [matrixA, setMatrixA] = useState([]);
  const [matrixB, setMatrixB] = useState([]);
  const [result, setResult] = useState("");

  const handleOperationChange = (value) => {
    setOperation(value);
    setMatrixA([]);
    setMatrixB([]);
    setResult("");
  };

  const handleMatrixOrderChange = (value) => {
    setMatrixOrder(value);
    setMatrixA(
      new Array(parseInt(value))
        .fill("")
        .map(() => new Array(parseInt(value)).fill(""))
    );
    setMatrixB(
      new Array(parseInt(value))
        .fill("")
        .map(() => new Array(parseInt(value)).fill(""))
    );
    setResult("");
  };

  const handleMatrixValueChange = (value, row, col, matrix) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[row][col] = value;
    if (matrix === matrixA) {
      setMatrixA(updatedMatrix);
    } else {
      setMatrixB(updatedMatrix);
    }
  };

  const performOperation = () => {
    if (operation === "scalarMultiplication") {
      // Multiplicação por um número
      // Verifica se foi inserido um número válido
      if (matrixA.length === 0 || isNaN(parseFloat(matrixB[0][0]))) {
        setResult("Insira uma matriz e um número válido para a multiplicação.");
        return;
      }

      const scalar = parseFloat(matrixB[0][0]);
      const resultMatrix = math.multiply(parseFloat(matrixA), scalar);
      setResult(`Resultado:\n${math.format(resultMatrix, { precision: 14 })}`);
    } else if (operation === "matrixMultiplication") {
      // Multiplicação entre matrizes
      if (matrixA.length === 0 || matrixB.length === 0) {
        setResult("Insira ambas as matrizes para a multiplicação.");
        return;
      }

      const resultMatrix = math.multiply(
        math.matrix(matrixA),
        math.matrix(matrixB)
      );
      setResult(`Resultado:\n${math.format(resultMatrix, { precision: 14 })}`);
    } else {
      // Adição ou subtração
      if (matrixA.length === 0 || matrixB.length === 0) {
        setResult("Insira ambas as matrizes para a operação.");
        return;
      }

      const mathOperation = operation === "addition" ? math.add : math.subtract;
      const resultMatrix = mathOperation(
        math.matrix(matrixA),
        math.matrix(matrixB)
      );
      setResult(`Resultado:\n${math.format(resultMatrix, { precision: 14 })}`);
    }
  };

  const renderMatrixInputs = (matrix, setMatrix) => {
    return (
      <View style={styles.matrixContainer}>
        {matrix.map((row, i) => (
          <View style={styles.matrixRow} key={`row-${i}`}>
            {row.map((cell, j) => (
              <TextInput
                key={`cell-${i}-${j}`}
                style={styles.matrixInput}
                keyboardType="numeric"
                value={cell}
                onChangeText={(value) =>
                  handleMatrixValueChange(value, i, j, matrix)
                }
              />
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Matrizes</Text>
      <Picker
        style={styles.picker}
        selectedValue={operation}
        onValueChange={(value) => handleOperationChange(value)}
      >
        <Picker.Item label="Selecione uma operação..." value="" />
        <Picker.Item label="Adição" value="addition" />
        <Picker.Item label="Subtração" value="subtraction" />
        <Picker.Item
          label="Multiplicação por um número"
          value="scalarMultiplication"
        />
        <Picker.Item
          label="Multiplicação entre matrizes"
          value="matrixMultiplication"
        />
      </Picker>
      {operation !== "" && (
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Ordem da Matriz:</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira a ordem da matriz"
            keyboardType="numeric"
            value={matrixOrder}
            onChangeText={(value) => handleMatrixOrderChange(value)}
          />
        </View>
      )}
      {operation !== "" && matrixOrder !== "" && (
        <View style={styles.matricesContainer}>
          <View style={styles.matrix}>
            <Text style={styles.matrixLabel}>Matriz A:</Text>
            {renderMatrixInputs(matrixA, setMatrixA)}
          </View>
          {operation !== "scalarMultiplication" && (
            <View style={styles.matrix}>
              <Text style={styles.matrixLabel}>Matriz B:</Text>
              {renderMatrixInputs(matrixB, setMatrixB)}
            </View>
          )}
        </View>
      )}
      {operation !== "" && (
        <TouchableOpacity style={styles.button} onPress={performOperation}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      )}
      {result !== "" && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.primary,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  inputLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    padding: 8,
    width: 100,
  },
  matricesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  matrix: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  matrixLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: colors.primary,
  },
  matrixRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  matrixInput: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    padding: 5,
    width: 40,
    marginRight: 5,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    padding: 8,
    width: 250,
  },
  inputAndroid: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    padding: 8,
    width: 250,
  },
});

export default Matriz;
