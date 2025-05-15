import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';

// Telas do app
import MegaSenaGenerator from './Screen/MegaSenaScreen';
import JogoDoBichoScreen from './Screen/JogoDoBichoScreen';

// Criação das abas de navegação
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // Estilo do cabeçalho
            headerStyle: {
              backgroundColor: '#EA1D2C',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',

            // Ícones diferentes por rota
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Jogo do Bicho') {
                iconName = 'paw'; // 🐾
              } else if (route.name === 'Mega-Sena') {
                iconName = 'cash-outline'; // 💰
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },

            // Estilo da Tab Bar (barra inferior)
            tabBarStyle: {
              backgroundColor: '#fff',
              borderTopWidth: 0.5,
              borderTopColor: '#ccc',
              height: 65,
              paddingBottom: 8,
              paddingTop: 6,
            },
            tabBarActiveTintColor: '#EA1D2C',
            tabBarInactiveTintColor: '#999',
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: '600',
            },
          })}
        >
          {/* Aba 1: Jogo do Bicho */}
          <Tab.Screen
            name="Jogo do Bicho"
            component={JogoDoBichoScreen}
            options={{ title: 'BICHEIRO' }}
          />

          {/* Aba 2: Mega-Sena */}
          <Tab.Screen
            name="Mega-Sena"
            component={MegaSenaGenerator}
            options={{ title: 'MEGA SENA' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
