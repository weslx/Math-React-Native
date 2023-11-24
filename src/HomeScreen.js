import { StyleSheet, View, Image, Button, Text } from "react-native";
import colors from "../colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <LogoWithName />

      <TouchableOpacity
        style={styles.botao_home}
        color={colors.primary}
        onPress={() => navigation.navigate("Fundamental")}
      >
        <Text style={styles.btn_text}>Ensino Fundamental</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao_home}
        color={colors.primary}
        onPress={() => navigation.navigate("Medio")}
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
    width: 370,
    height: 300,
    borderRadius: 50,
  },
  btn_text: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
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
