import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FundamentalScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <Button
        title="1°Ano"
        onPress={() => navigation.navigate('MedioPri')}
      />
      <Button
        title="2°Ano"
        onPress={() => navigation.navigate('MedioSeg')}
      />
      <Button
        title="3°Ano"
        onPress={() => navigation.navigate('MedioTer')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(137,188,190,1.0)', // Adicionado esquema de cores
  },
});

export default FundamentalScreen;
