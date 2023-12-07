import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../colors";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MedioTela = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <Logohead />

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
        onPress={() => navigation.navigate("Cossenos")}
      >
        <Text style={styles.text}>Lei de Cossenos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Funções")}
      >
        <Text style={styles.text}>Funções de 2°</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Logaritma")}
      >
        <Text style={styles.text}>Logaritma</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Exponenciação")}
      >
        <Text style={styles.text}>Exponenciação</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Radiciação")}
      >
        <Text style={styles.text}>Radiciação</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Matriz")}
      >
        <Text style={styles.text}>Matriz</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1}></TouchableOpacity>
      <View style={styles.logoContainer}>
        <LogoWithName />
      </View>
    </View>
  );
};

const LogoWithName = () => {
  return (
    <View>
      <Image
        source={require("../assets/mathchild.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};
const Logohead = () => {
  return (
    <View style={styles.logoContainer2}>
      <Image
        source={require("../assets/logo_alternativa.png")}
        style={styles.logo1}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.background,
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 150,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 4,
    borderRadius: 40,
  },
  button1: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 150,
    backgroundColor: colors.white,
    borderWidth: 0,
    borderRadius: 40,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  logoContainer: {
    justifyContent: "flex-end",
    width: "100%",
    flexShrink: 1, // Adicionando flexShrink para evitar o wrap
  },

  logo: {
    width: 180,
    alignSelf: "flex-end",
    height: 130,
    marginBottom: 100,
  },
  logo1: {
    height: 190,
    width: 400,
  },
});

export default MedioTela;
