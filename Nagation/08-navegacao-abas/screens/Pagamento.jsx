import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, RadioButton, Text, Button } from 'react-native-paper'

export default function Pagamento() {
  const [metodo, setMetodo] = useState('pix')

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.titulo}>Método de Pagamento</Text>

      <Card style={styles.card}>
        <Card.Content>
          <RadioButton.Group onValueChange={value => setMetodo(value)} value={metodo}>
            <RadioButton.Item label="Pix" value="pix" />
            <RadioButton.Item label="Cartão de Crédito" value="credito" />
            <RadioButton.Item label="Cartão de Débito" value="debito" />
            <RadioButton.Item label="Dinheiro" value="dinheiro" />
          </RadioButton.Group>
        </Card.Content>
      </Card>

      <Text style={styles.selecionado}>Selecionado: {metodo.toUpperCase()}</Text>

      <Button mode="contained" style={styles.botao} onPress={() => console.log(`Pagamento via ${metodo}`)}>
        Confirmar Pagamento
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    marginBottom: 20,
  },
  selecionado: {
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#EA1D2C',
  },
})
