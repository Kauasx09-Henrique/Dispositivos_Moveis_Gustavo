import React from 'react'
import { StyleSheet } from 'react-native'
import { Avatar, Card } from 'react-native-paper'


export default function Jpgador(props) {


  const { nome, imagem ,numero} = props


  return (
    <Card.Title
      style={{ margin: 10 }}
      title={nome}
      subtitle={numero}
      left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} />}
    />
  )
}


const styles = StyleSheet.create({})

