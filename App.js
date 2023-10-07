import { StyleSheet, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FundamentalScreen from './FundamentaTela';
import MedioTela from './MedioTela';
import colors from './colors';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.center}>
      <LogoWithName />
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Fundamental"
          color={colors.primary}
          onPress={() => navigation.navigate('Fundamental')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Medio"
          color={colors.primary}
          onPress={() => navigation.navigate('Medio')}
        />
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen name="Fundamental" component={FundamentalScreen} />
        <Stack.Screen name="Medio" component={MedioTela}         options={{ 
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const LogoWithName = () => {
  return (
    <View>
      <Image
        source={require('./assets/mh.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
  logo: {
    width: 370,
    height: 300,
    borderRadius: 50,
  },
});

export default App;
