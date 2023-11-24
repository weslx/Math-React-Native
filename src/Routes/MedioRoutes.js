import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MedioTela from "../MedioTela.js";
import FundamentalScreen from "../FundamentalTela.js";
import HomeScreen from "../HomeScreen.js";
import colors from "../../colors.js";
import CongruencCalculator from "../Medio/LeiDeSeno/leideseno.js";
import JurosCompostos from "../Medio/Juros/JurosCompostos.js";
import JurosSimples from "../Medio/Juros/JurosSimples.js";
import Funções from "../Medio/Logaritma/funcoes.js";
import TriangleCalculator from "../Medio/LeiDeCossenos/leideco.js";
import Logaritma from "../Medio/Funcoes/Logaritma.js";

const Stack = createStackNavigator();

function MedioRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stack.Screen
        name="Funções"
        component={Funções}
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
        name="Medio"
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
        name="Fundamental"
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
    </Stack.Navigator>
  );
}

export default MedioRoutes;
