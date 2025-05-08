import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020],
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022],
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024],
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025],
  },
];

export default function TituloScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={titulos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.nome}</Text>
            <Text style={styles.years}>Anos: {item.anos.join(', ')}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#e3e3e3',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  years: {
    marginTop: 4,
    fontSize: 16,
  },
});
