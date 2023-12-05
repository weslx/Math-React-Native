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
      <Text>Teste</Text>
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
    <View>
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
  logo: {
    width: 180,
    marginBottom: 10,
    height: 290,
    marginLeft: 180,
  },
  logo1: {
    height: 190,
  },
});

export default MedioTela;
