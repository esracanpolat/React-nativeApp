import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simpson from './src/Screens/Simpson';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './src/Screens/Detail';
import AddNewCharacter from './src/Screens/AddNewCharacter';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Simpsons" component={Simpson}
          screenOptions={{
            title: 'Simpsons',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
        <Stack.Screen name="Detail"
          screenOptions={{
            title: 'Detail',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
          component={Detail} />
        <Stack.Screen name="AddNew"
          screenOptions={{
            title: 'Add New Character',
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
          component={AddNewCharacter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
