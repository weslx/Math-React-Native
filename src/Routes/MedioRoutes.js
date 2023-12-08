import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MedioTela from "../MedioTela.js";
import FundamentalScreen from "../FundamentalTela.js";
import HomeScreen from "../HomeScreen.js";
import colors from "../../colors.js";
import CongruencCalculator from "../Medio/LeiDeSeno/leideseno.js";
import JurosCompostos from "../Medio/Juros/JurosCompostos.js";
import JurosSimples from "../Medio/Juros/JurosSimples.js";
import Segundograu from "../Medio/Funcoes/funcoes.js";
import TriangleCalculator from "../Medio/LeiDeCossenos/leideco.js";
import Logaritma from "../Medio/Logaritma/Logaritma.js";
import Exponenciação from "../Medio/Exponenciacao/exponenciacao.js";
import Radiciação from "../Medio/Radiciacao/Radiciacao.js";
import Matriz from "../Medio/Matriz/Matriz.js";

const Stack = createStackNavigator();

function MedioRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicial"
        component={HomeScreen}
        options={{
          headerTransparent: true,
          title: "",
        }}
      />

      <Stack.Screen
        name="Funções"
        component={Segundograu}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Cossenos"
        component={TriangleCalculator}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Ensino Medio"
        component={MedioTela}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />

      <Stack.Screen
        name="Juros Simples"
        component={JurosSimples}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Juros Compostos"
        component={JurosCompostos}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
        name="Senos"
        component={CongruencCalculator}
      />
      <Stack.Screen
        name="Ensino Fundamental"
        component={FundamentalScreen}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Logaritma"
        component={Logaritma}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Exponenciação"
        component={Exponenciação}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Radiciação"
        component={Radiciação}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Matriz"
        component={Matriz}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
}

export default MedioRoutes;
