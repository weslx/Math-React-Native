import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../colors";
import { useNavigation } from "@react-navigation/native";

const FundamentalScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>1 Ano</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>2 Ano</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>3 Ano</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>4 Ano</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>5 Ano</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>6 Ano</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>7 Ano</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>8 Ano</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>9 Ano</Text>
      </TouchableOpacity>

      {/* Adicione esta View por cima de tudo */}
      <View style={styles.lockScreen}>
        <LockImage />
        <Text style={styles.lockText}>Em desenvolvimento</Text>
      </View>
    </View>
  );
};

const LockImage = () => {
  return (
    <View>
      <Image
        source={require("../assets/lock.png")}
        style={styles.lockImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: colors.background,
    marginBottom: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 150,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 5,
    borderRadius: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  lockScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
  },
  lockImage: {
    width: 100,
    height: 100,
  },
  lockText: {
    color: "white",
    fontSize: 20,
    marginTop: 10,
  },
});

export default FundamentalScreen;
