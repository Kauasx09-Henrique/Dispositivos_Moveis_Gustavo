import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"]
};

export default function EscudosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: time.escudo }} style={styles.escudo} />
      <Text style={styles.nome}>{time.nome}</Text>
      <Text style={styles.info}>Fundação: {time.fundacao}</Text>
      <Text style={styles.info}>Estádio: {time.estadio}</Text>
      <Text style={styles.info}>Mascote: {time.mascote}</Text>
      <Text style={styles.info}>Cores: {time.cores.join(', ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  escudo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 18,
    marginBottom: 4,
    color: '#555',
  },
});
