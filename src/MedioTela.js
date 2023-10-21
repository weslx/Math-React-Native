import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../colors";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MedioTela = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Juros Compostos")}
      >
        <Text style={styles.text}>Juros Compostos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Juros Simples")}
      >
        <Text style={styles.text}>Juros Simples</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Senos")}
      >
        <Text style={styles.text}>Lei de Senos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Logaritma")}
      >
        <Text style={styles.text}>Logaritmo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    marginBottom: 10,
    width: 150,
    borderColor: colors.primary,
    borderWidth: 5,
    borderRadius: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: colors.primary,
  },
});

export default MedioTela;
