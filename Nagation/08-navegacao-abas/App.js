import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'


import HomeScreen from './screens/Produtos.jsx'
import ProfileScreen from './screens/PerfilUser.jsx'
import SettingsScreen from './screens/Pagamento.jsx'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#EA1D2C',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            tabBarStyle: {
              backgroundColor: 'white',
              borderTopWidth: 0.5,
              borderTopColor: '#ccc',
              height: 60,
              paddingBottom: 5,
              paddingTop: 5,
            },
            tabBarActiveTintColor: '#EA1D2C',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
          }}
        >
          <Tab.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              title: 'IFOOD',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='fast-food' color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name='ProfileScreen'
            component={ProfileScreen}
            options={{
              title: 'Perfil',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='person' color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name='SettingsScreen'
            component={SettingsScreen}
            options={{
              title: 'Pagamento',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name='card' color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
