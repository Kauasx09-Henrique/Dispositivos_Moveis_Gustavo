import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Nome from './src/Components/Nome.jsx'
import JogoDoBichoScreen from '../../Exercicio_hook/gerador-abas/Screen/JogoDoBichoScreen.jsx'


export default function App() {
  return (
    <PaperProvider>
  <NavigationContainer>
    <JogoDoBichoScreen/>
  </NavigationContainer>
 </PaperProvider>
  
  )
}

const styles = StyleSheet.create({})