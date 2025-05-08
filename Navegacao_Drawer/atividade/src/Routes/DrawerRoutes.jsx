import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Ionicons } from '@expo/vector-icons'


import TituloScreen from '../Screens/TituloScreen.jsx';
import EscudosScreen from '../Screens/EscudoScreen.jsx';
import JogadorScreen from '../Screens/JogadorScreen.jsx';


import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer  = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
 
<Drawer.Navigator>

    { <Drawer.Screen 
    name='Escudos'
 component={EscudosScreen}
    options={{
        title: "Escudos",
        drawerIcon: ({color, size}) => <Ionicons name='flag' color={color} size={size} />
    }}
    /> }
    { <Drawer.Screen 
    name='Titulo'
    component={TituloScreen}
    options={{
        title: "Titulos",
        drawerIcon: ({color, size}) => <Ionicons name='trophy' color={color} size={size} />
    }}
    /> }
      <Drawer.Screen 
    name='Jogadores'
    component={JogadorScreen}
    options={{
        title: "Jogadores",
        drawerIcon: ({color, size}) => <Ionicons name='person' color={color} size={size} />
    }}
    />
</Drawer.Navigator>
 
  );
}
