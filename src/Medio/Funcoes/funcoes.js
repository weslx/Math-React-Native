import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import calcular from "./calcular";
import styles from "./styles";

const Segundograu = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [aa, setAa] = useState("1");
  const [bb, setBb] = useState("1");
  const [cc, setCc] = useState("1");
  const [result, setResult] = useState("");

  const handleCalcular = () => {
    const resultado = calcular(a, b, c, aa, bb, cc);
    setResult(resultado);
    console.log(resultado);
  };

  return (
    <View>
      <View style={styles.between}>
        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="1"
              keyboardType="numeric"
              value={a}
              onChangeText={(text) => setA(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder=""
              keyboardType="numeric"
              value={aa}
              onChangeText={(text) => setAa(text)}
            />
          </View>
        </View>

        <Text style={styles.equationText}>x² +</Text>

        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder=""
              keyboardType="numeric"
              value={b}
              onChangeText={(text) => setB(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder=""
              keyboardType="numeric"
              value={bb}
              onChangeText={(text) => setBb(text)}
            />
          </View>
        </View>

        <Text style={styles.equationText}>x +</Text>

        <View style={styles.inputGroup}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="-100"
              keyboardType="numeric"
              value={c}
              onChangeText={(text) => setC(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder=""
              keyboardType="numeric"
              value={cc}
              onChangeText={(text) => setCc(text)}
            />
          </View>
        </View>
      </View>
      <Text style={styles.equationText}>= 0</Text>

      <Button title="Calcular" onPress={handleCalcular} />
      <Text>{result}</Text>
    </View>
  );
};

export default Segundograu;
