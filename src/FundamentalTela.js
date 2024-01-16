import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../colors";
import { useNavigation } from "@react-navigation/native";

const FundamentalScreen = () => {
  const navigation = useNavigation();

  const years = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const renderButton = (year) => {
    return (
      <TouchableOpacity
        key={year}
        className="flex justify-center items-center h-12 w-36 bg-emerald-500 border-2 rounded-lg mt"
      >
        <Text style={styles.text}>{year}º Ano</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex justify-center items-center h-screen gap-4 flex-row flex-wrap ">
      <View className="flex justify-center items-center gap-4">
        {years.map(renderButton)}
      </View>
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
    backgroundColor: "rgba(0, 0, 0, 0.4)",
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
    height: "100%",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
  lockImage: {
    width: 100,
    height: 100,
  },
  lockText: {
    color: "white",
    fontSize: 20,
    marginBottom: 50,
  },
});

export default FundamentalScreen;
