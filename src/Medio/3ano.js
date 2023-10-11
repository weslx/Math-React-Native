import React from "react";
import { View, Button, StyleSheet } from "react-native";
import colors from "../colors";
import { useNavigation } from "@react-navigation/native";
import { func } from "prop-types";

const TrMedio = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <Button title="1°Ano" onPress={() => navigation.navigate("MedioPri")} />
      <Button title="2°Ano" onPress={() => navigation.navigate("MedioSeg")} />
      <Button title="3°Ano" onPress={() => navigation.navigate("MedioTer")} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(137,188,190,1.0)", // Adicionado esquema de cores
  },
});

export default TrMedio;
