import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const Matriz = () => {
  const [rowsA, setRowsA] = useState(0);
  const [colsA, setColsA] = useState(0);
  const [rowsB, setRowsB] = useState(0);
  const [colsB, setColsB] = useState(0);
  const [matrixA, setMatrixA] = useState([]);
  const [matrixB, setMatrixB] = useState([]);
  const [result, setResult] = useState([]);
  const [operation, setOperation] = useState("");
  const [multiplier, setMultiplier] = useState(1);

  const windowWidth = Dimensions.get("window").width;

  const handleOperation = () => {
    if (operation === "add" || operation === "sub") {
      if (rowsA !== rowsB || colsA !== colsB) {
        alert(
          "As matrizes devem ter as mesmas dimensões para serem somadas ou subtraídas."
        );
        return;
      }
    } else if (operation === "mulMatrices") {
      if (colsA !== rowsB) {
        alert(
          "O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz para a multiplicação."
        );
        return;
      }
    }
    let res = Array(rowsA)
      .fill()
      .map(() => Array(colsA).fill(0));
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsA; j++) {
        if (operation === "add") {
          res[i][j] = matrixA[i][j] + matrixB[i][j];
        } else if (operation === "sub") {
          res[i][j] = matrixA[i][j] - matrixB[i][j];
        } else if (operation === "mul") {
          res[i][j] = matrixA[i][j] * multiplier;
        } else if (operation === "mulMatrices") {
          for (let k = 0; k < colsA; k++) {
            res[i][j] += matrixA[i][k] * matrixB[k][j];
          }
        }
      }
    }
    setResult(res);
  };

  const createMatrices = () => {
    setMatrixA(
      Array(rowsA)
        .fill()
        .map(() => Array(colsA).fill(0))
    );
    if (operation !== "mul") {
      setMatrixB(
        Array(rowsB)
          .fill()
          .map(() => Array(colsB).fill(0))
      );
    }
  };

  const resetOperation = (itemValue) => {
    setOperation(itemValue);
    setRowsA(0);
    setColsA(0);
    setRowsB(0);
    setColsB(0);
    setMatrixA([]);
    setMatrixB([]);
    setResult([]);
  };

  return (
    <View>
      <Picker selectedValue={operation} onValueChange={resetOperation}>
        <Picker.Item label="Selecione uma operação" value="" />
        <Picker.Item label="Adição" value="add" />
        <Picker.Item label="Subtração" value="sub" />
        <Picker.Item label="Multiplicação por um número" value="mul" />
        <Picker.Item label="Multiplicação de matrizes" value="mulMatrices" />
      </Picker>
      {operation !== "" && (
        <>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text>Matriz A</Text>
              <TextInput
                style={styles.input}
                placeholder="Linhas"
                onChangeText={(text) => setRowsA(parseInt(text))}
              />
              <TextInput
                style={styles.input}
                placeholder="Colunas"
                onChangeText={(text) => setColsA(parseInt(text))}
              />
            </View>
            {operation !== "mul" && (
              <View style={styles.column}>
                <Text>Matriz B</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Linhas"
                  onChangeText={(text) => setRowsB(parseInt(text))}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Colunas"
                  onChangeText={(text) => setColsB(parseInt(text))}
                />
              </View>
            )}
          </View>
          <Button title="Criar Matrizes" onPress={createMatrices} />
          <View style={styles.row}>
            {matrixA.length > 0 && (
              <View>
                <Text>Matriz A</Text>
                {matrixA.map((row, i) => (
                  <View key={i} style={{ flexDirection: "row" }}>
                    {row.map((col, j) => (
                      <TextInput
                        style={[styles.input, { width: windowWidth / colsA }]}
                        key={j}
                        onChangeText={(text) => {
                          let temp = [...matrixA];
                          temp[i][j] = parseInt(text);
                          setMatrixA(temp);
                        }}
                      />
                    ))}
                  </View>
                ))}
              </View>
            )}
            {matrixB.length > 0 && (
              <View>
                <Text>Matriz B</Text>
                {matrixB.map((row, i) => (
                  <View key={i} style={{ flexDirection: "row" }}>
                    {row.map((col, j) => (
                      <TextInput
                        style={[styles.input, { width: windowWidth / colsB }]}
                        key={j}
                        onChangeText={(text) => {
                          let temp = [...matrixB];
                          temp[i][j] = parseInt(text);
                          setMatrixB(temp);
                        }}
                      />
                    ))}
                  </View>
                ))}
              </View>
            )}
          </View>
          {operation === "mul" && matrixA.length > 0 && (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Número multiplicador"
                onChangeText={(text) => setMultiplier(parseInt(text))}
              />
            </View>
          )}
          {matrixA.length > 0 &&
            (matrixB.length > 0 || operation === "mul") && (
              <Button
                title={
                  operation === "add"
                    ? "Somar Matrizes"
                    : operation === "sub"
                    ? "Subtrair Matrizes"
                    : operation === "mul"
                    ? "Multiplicar Matriz"
                    : "Multiplicar Matrizes"
                }
                onPress={handleOperation}
              />
            )}
          {result.length > 0 && (
            <>
              <Text>Resultado</Text>
              {result.map((row, i) => (
                <View key={i} style={{ flexDirection: "row" }}>
                  {row.map((col, j) => (
                    <Text
                      key={j}
                      style={{
                        width: windowWidth / colsA,
                        textAlign: "center",
                      }}
                    >
                      {col}
                    </Text>
                  ))}
                </View>
              ))}
            </>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    margin: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Matriz;
