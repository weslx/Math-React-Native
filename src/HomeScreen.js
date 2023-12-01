import { StyleSheet, View, Image, Text } from "react-native";
import colors from "../colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.center}>
      <LogoWithName />

      <TouchableOpacity
        style={styles.botao_home}
        color={colors.primary}
        onPress={() => handleNavigation("Ensino Fundamental")}
      >
        <Text style={styles.btn_text}>Ensino Fundamental</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao_home}
        color={colors.primary}
        onPress={() => handleNavigation("Ensino Medio")}
      >
        <Text style={styles.btn_text}>Ensino Medio</Text>
      </TouchableOpacity>
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
    width: 350,
    height: 280,
    borderRadius: 50,
    marginBottom: 115,
  },
  btn_text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },

  botao_home: {
    backgroundColor: colors.primary,
    height: 50,
    width: "60%",
    borderRadius: 15,
    padding: 13,
    marginBottom: 5,
    marginTop: 15,
  },
});
