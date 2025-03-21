import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {

  const nome = "Gustavo"

  function alerta() {
    alert("Voce Clicou no botão")
  }




  return (
    <View style={styles.container}>
      {/*Comentario dentro do template JSX*/}

      <Text>Uma vez Varmengo, sempre Varmengo </Text>
      <StatusBar style="auto" />
      <Text>Jair messasdias!</Text>
      {/*Codigo JavaScript*/}
      <Text>{2 + 2}</Text>
      <Button title='CHECK' onPress={alerta}></Button>


      <Image
        source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0f52ca7-761b-470a-abd3-f958d6237eb9/d8g6v4p-02c56c9d-2c24-4fdc-bcb9-be5a3ca5ba55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MwZjUyY2E3LTc2MWItNDcwYS1hYmQzLWY5NThkNjIzN2ViOVwvZDhnNnY0cC0wMmM1NmM5ZC0yYzI0LTRmZGMtYmNiOS1iZTVhM2NhNWJhNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.khfwt2-ZTGPA2R6aobGnvYZx5UvhZjBxMGf0RvG-S4g' }}
        style={styles.image}
      />
      <Image

        source={{ url: '' }}


      ></Image>
      {/*buttao*/}



    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 600,
    height: 280,
    marginTop: 20,
  },
});
