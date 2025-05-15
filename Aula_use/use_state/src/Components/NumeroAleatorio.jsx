import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import   {Card, Button , Text} from 'react-native-paper'

const [NumeroAleatorio, SetnumeroAleatorio] = useState(0)
const [listanumeros, Setnumeros] = useState([])

function Gerar(){
    const numero = Math.round(Math.random() * 101)
    SetnumeroAleatorio(numeroGerado)
    Setnumeros({...listanumeros, NumeroAleatorio})
}


export default function NumeroAleatorio() {
  return (
    <View>
     <Card>
        <Card.Content>
<Text>Numero NumeroAleatorio:{NumeroAleatorio}</Text>
        </Card.Content>
        <Card.Actions>
            <Button onPress={Gerar}>Gerar</Button>
        </Card.Actions>
    
     </Card>
    </View>
  )
}

const styles = StyleSheet.create({})