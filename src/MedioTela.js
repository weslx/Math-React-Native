import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../colors';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MedioTela = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <Button
        title="1° Ano Ensino Médio"
        color={colors.primary}
        onPress={() => navigation.navigate('Medio1Ano')}
      />
      <Button
        title="2° Ano Ensino Médio"
        color={colors.primary}
        onPress={() => navigation.navigate('Medio2Ano')}
      />
      <Button
        title="3° Ano Ensino Médio"
        color={colors.primary}
        onPress={() => navigation.navigate('Medio3Ano')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});

export default MedioTela;
