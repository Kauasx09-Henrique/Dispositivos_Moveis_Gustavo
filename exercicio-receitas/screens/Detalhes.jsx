import { StyleSheet, View, Image, ScrollView } from "react-native";
import React from "react";
import { PaperProvider, Text, Button } from "react-native-paper";

export default function Receitascreen({ navigation, route }) {
  const receita = route.params.receita;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="titleLarge" style={styles.titulo}>
        {receita.nome}
      </Text>

      <Image source={{ uri: receita.imagem }} style={styles.imagem} />

      <Text style={styles.info}>
        ⏱️ Tempo de Preparo: {receita.tempoPreparo}
      </Text>
      <Text style={styles.info}>🍽️ Porções: {receita.porcoes}</Text>

      <Text variant="titleMedium" style={styles.subtitulo}>
        🧂 Ingredientes:
      </Text>
      {receita.ingredientes.map((ingrediente, index) => (
        <Text key={index} style={styles.lista}>
          {ingrediente}
        </Text>
      ))}

      <Text variant="titleMedium" style={styles.subtitulo}>
        👨‍🍳 Modo de Preparo:
      </Text>
      {receita.modoPreparo.map((modo, index) => (
        <Text key={index} style={styles.lista}>
          {modo}
        </Text>
      ))}

      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.botao}
      >
        Voltar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F9F9F9",
  },
  titulo: {
    marginBottom: 14,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    color: "#333",
  },
  imagem: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 18,
  },
  info: {
    fontSize: 16,
    marginBottom: 6,
    color: "#555",
  },
  subtitulo: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
    fontSize: 18,
    color: "#444",
  },
  lista: {
    marginBottom: 6,
    paddingLeft: 10,
    fontSize: 15,
    color: "#444",
  },
  botao: {
    marginTop: 30,
    alignSelf: "center",
    width: "60%",
    backgroundColor: "#E53935", 
  },
});
