import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { ScrollView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import PrimeiroComponente from './Componentes/PrimeiroComponente';
import SegundoComponente from './Componentes/SegundoComponente';
import JavaScriptComponentes from './Componentes/JavaScriptComponentes'
import Perfil from './Componentes/Perfil';


function alerta() {
  alert("")
}


export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <PrimeiroComponente />
        <SegundoComponente />

        <JavaScriptComponentes />

        <Perfil
        
        nome="Gustavo"
        sobrenome="Lima"
        idade={30}
        


        />
        <Perfil
        
        nome="Gustavos"
        sobrenome="Limas"
        idade={12}
        

        
        />

        <Button title='Check' onPress={alerta}></Button>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#####',
    fontSize: 32,
    alignItems: "center",
    justifyContent: "center",
    padding: 120

  },
  Title: {
    textAlign: "left",
    fontSize: 26,
    display: "flex",
    padding: 90

  },
});
