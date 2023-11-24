import { StyleSheet, View, Image, Button,  } from "react-native";
import colors from "../colors";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <LogoWithName />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonstyle}
          title=" Ensino Fundamental"
          color={colors.primary}
          onPress={() => navigation.navigate("Fundamental")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonstyle}
          title="Ensino Medio"
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
        source={require("../assets/mh_azul.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonstyle: {
    height: "10%",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginVertical: 5,
    width: "50%",
    borderRadius: 10,
    overflow: "hidden",
  },
  logo: {
    width: 370,
    height: 300,
    borderRadius: 50,
  },
});
