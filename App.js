import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import HomeScreen from './screens/homeScreen';
import AgendaScreen from './screens/Agendascreen';
import DadosScreen from './screens/Dadosscreen';
import ConfigScreen from './screens/Configscreen';

const Tab = createBottomTabNavigator();

const TAB_CONFIG = {
  Início: { icon: 'sun', activeColor: '#E8452F' },
  Agenda: { icon: 'calendar', activeColor: '#6C4CE0' },
  Dados: { icon: 'bar-chart-2', activeColor: '#1FB88C' },
  Config: { icon: 'settings', activeColor: '#1D2333' },
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: TAB_CONFIG[route.name]?.activeColor || '#1D2333',
          tabBarInactiveTintColor: '#A3A9BC',
          tabBarLabelStyle: { fontSize: 11, fontWeight: '600', marginBottom: 4 },
          tabBarStyle: {
            height: 64,
            paddingTop: 8,
            paddingBottom: 10,
            borderTopWidth: 1,
            borderTopColor: '#EAEDF3',
            backgroundColor: '#fff',
          },
          tabBarIcon: ({ color, size }) => (
            <Feather name={TAB_CONFIG[route.name]?.icon || 'circle'} size={size ?? 20} color={color} />
          ),
        })}
      >
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Agenda" component={AgendaScreen} />
        <Tab.Screen name="Dados" component={DadosScreen} />
        <Tab.Screen name="Config" component={ConfigScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}