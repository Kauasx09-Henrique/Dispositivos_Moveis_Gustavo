import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import {Card, Text , Button} from 'react-native-paper'


export default function Nome() {


  const [nome,  setnome] = useState('?????')
  const [volume, setvolume] = useState("")

function Esconder(){
  setnome('?????')
  console.log(nome)
}
function Revelar() {
 setnome('Alex')
console.log(nome)
}
function Aumentar(){
  if(volume  >= 10){
    setvolume(volume - 1)
  }
}
function Diminuir(){
  if(volume >= 0)
    setvolume(volume - 1)
}

  return (
    <View>
   <Card>
    <Card.Content>
      <Card.Title Title="Componente  Nome "/>
      <Text variant='bodyLarge'>Nome: {nome}</Text>
    </Card.Content>
    <Card.Actions>
      <Button onPress={Esconder}>Esconder</Button>
      <Button onPress={Revelar}>Revelar</Button>
    </Card.Actions>
    <Card.Actions>
      <Button onPress={Aumentar}>Aumentar</Button>
      <Button onPress={Diminuir}>Diminuir</Button>
    </Card.Actions>
   </Card>
    </View>
  )
}

const styles = StyleSheet.create({})