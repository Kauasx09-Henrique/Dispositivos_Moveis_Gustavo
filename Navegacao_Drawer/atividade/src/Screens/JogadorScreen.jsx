import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const jogadores = [
  {
    nome: "Gabriel Barbosa",
    numero: 9,
    posicao: "Atacante",
    idade: 27,
    imagem: "https://i.pinimg.com/474x/1d/9f/5d/1d9f5de58831c9913f925a7155bdc7da.jpg",
  },
  {
    nome: "Arrascaeta",
    numero: 14,
    posicao: "Meia",
    idade: 29,
    imagem: "https://i.pinimg.com/474x/cf/ad/d9/cfadd92de5e581ac5505e3d325f8b9b2.jpg",
  },
  {
    nome: "Everton Ribeiro",
    numero: 7,
    posicao: "Meia",
    idade: 33,
    imagem: "https://i.pinimg.com/236x/39/1a/27/391a275fb7e0b018f2900f0f9fc9331b.jpg",
  },
  {
    nome: "David Luiz",
    numero: 23,
    posicao: "Zagueiro",
    idade: 35,
    imagem: "https://i.pinimg.com/474x/98/79/9b/98799b86107a87b79dc9b15cf778fa4a.jpg",
  },
  {
    nome: "Pedro",
    numero: 21,
    posicao: "Atacante",
    idade: 26,
    imagem: "https://i.pinimg.com/474x/79/e6/18/79e6185649fa3667b3ed3beef3e1ae94.jpg",
  },
];

export default function JogadorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.nome}</Text>
              <Text style={styles.details}>Número: {item.numero}</Text>
              <Text style={styles.details}>Posição: {item.posicao}</Text>
              <Text style={styles.details}>Idade: {item.idade}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.openDrawer()}
          style={styles.button}
        >
          Abrir Drawer
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            navigation.openDrawer();
            setTimeout(() => {
              navigation.closeDrawer();
            }, 3000);
          }}
          style={styles.button}
        >
          Abrir e Fechar Drawer
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  buttonContainer: {
    marginTop: 16,
  },
  button: {
    marginBottom: 8,
  },
});
