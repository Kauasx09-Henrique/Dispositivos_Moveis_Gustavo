import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {

console.log(props)

  return (
    <View>
      <Text>Perfil</Text>
      <Text>nome{props.nome}</Text>
      <Text>nome{props.idade}</Text>
      <Text>nome{props.sobrenome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})