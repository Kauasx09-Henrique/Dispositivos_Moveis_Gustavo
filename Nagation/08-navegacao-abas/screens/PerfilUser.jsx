import React from 'react'
import { View, StyleSheet, Image , Alert} from 'react-native'
import { Text, Button, Card } from 'react-native-paper'



const showAlert = () => {
  Alert.alert('Aviso', 'Perfil Editado com sucesso!')
}


export default function PerfilUser() {
  return (
    <View style={styles.container}>
      <Card style={styles.profileCard}>
        <Card.Content style={styles.content}>
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-premium/icone-de-adesao-prateada-icone-de-perfil-de-avatar-padrao-icone-de-associacao-imagem-de-usuario-de-midia-social-ilustracao-vetorial_561158-4195.jpg?semt=ais_hybrid&w=740' }} 
            style={styles.avatar}
          />
          <Text style={styles.name}>Pedro Henrique</Text>
          <Text style={styles.email}>email: pedro@gmail.com</Text>

<Button title="Mostrar alerta" onPress={showAlert} buttonColor='#FF0000' textColor='white'>Editar Perfil</Button>
  
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    alignItems: 'center',
  },
  profileCard: {
    width: '90%',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 15,
    elevation: 3,
  },
  content: {
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  editButton: {
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  Button: {
    backgroundColor: '#fff'
  }
})
