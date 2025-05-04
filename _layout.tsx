// Archivo: (tabs)/_layout.tsx
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AdminMain from '../admin/main';

const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="AdminMain"
        screenOptions={{
          headerShown: false, // Ocultar el encabezado por defecto
        }}
      >
        <Drawer.Screen
          name="AdminMain"
          component={AdminMain}
          options={{
            drawerLabel: 'Panel Administrativo',
            drawerIcon: () => <MaterialCommunityIcons name="account-cog" size={24} color="black" />
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
