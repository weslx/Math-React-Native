import { StyleSheet, View, Image, Button } from "react-native";

import colors from "../colors";

import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <LogoWithName />
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Fundamental"
          color={colors.primary}
          onPress={() => navigation.navigate("Fundamental")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Medio"
          color={colors.primary}
          onPress={() => navigation.navigate("Medio")}
        />
      </View>
    </View>
  );
}

const LogoWithName = () => {
  return (
    <View>
      <Image
        source={require("../assets/mh.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "80%",
  },
  logo: {
    width: 370,
    height: 300,
    borderRadius: 50,
  },
});
