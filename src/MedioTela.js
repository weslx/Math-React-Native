import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../colors";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MedioTela = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <Button
        title="Juros Compostos"
        color={colors.primary}
        onPress={() => navigation.navigate("Juros Compostos")}
      />
      <Button
        title="Juros Simples"
        color={colors.primary}
        onPress={() => navigation.navigate("Juros Simples")}
      />
      <Button
        title="Lei de Senos"
        color={colors.primary}
        onPress={() => navigation.navigate("Senos")}
      />
      <Button
        title="Logaritmo"
        color={colors.primary}
        onPress={() => navigation.navigate("Logaritma")}
      />
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
});

export default MedioTela;
