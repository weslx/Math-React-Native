import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import calcular from "./calcular";

const segundograu = () => {
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
      <TextInput
        placeholder="a"
        value={a}
        onChangeText={(text) => setA(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="b"
        value={b}
        onChangeText={(text) => setB(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="c"
        value={c}
        onChangeText={(text) => setC(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="aa"
        value={aa}
        onChangeText={(text) => setAa(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="bb"
        value={bb}
        onChangeText={(text) => setBb(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="cc"
        value={cc}
        onChangeText={(text) => setCc(text)}
        keyboardType="numeric"
      />
      <Button title="Calcular" onPress={handleCalcular} />
      <Text>{result}</Text>
    </View>
  );
};

export default segundograu;
