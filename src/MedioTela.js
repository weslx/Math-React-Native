import React from "react";
import { View, Text, Switch } from "react-native";

export default function Settings() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] =
    React.useState(false);
  const [isPinEnabled, setIsPinEnabled] = React.useState(false);

  return (
    <View>
      <Text>Configurações</Text>
      <View>
        <Text>Notificações</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isNotificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsNotificationsEnabled}
          value={isNotificationsEnabled}
        />
      </View>
      <View>
        <Text>PIN</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isPinEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsPinEnabled}
          value={isPinEnabled}
        />
      </View>
      <Text
        onPress={() => {
          /* navigate to profile */
        }}
      >
        Perfil
      </Text>
      <Text
        onPress={() => {
          /* navigate to privacy terms */
        }}
      >
        Termos de privacidade
      </Text>
      <Text
        onPress={() => {
          /* navigate to feedback */
        }}
      >
        Feedback
      </Text>
      <Text
        onPress={() => {
          /* reset settings */
        }}
      >
        Restar configurações
      </Text>
    </View>
  );
}
