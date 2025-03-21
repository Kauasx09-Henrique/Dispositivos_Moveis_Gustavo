import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaScriptComponentes() {
  const nome = "Kaua"
  const idade = 25
  function exibirNome() {
    return nome


  }
  function check() {
    if (idade >= 18) {
      return "Maior de idade"

    } else {
      return "Menor de idade"
    }
  }


  return (
    <View>
      <Text>

        Java JavaScriptComponentes
        <Text>
          nome: {nome}
        </Text>
      </Text>
      <Text>
        Idade: {idade}
      </Text>
      <Text>
        nome: {exibirNome()}
      </Text>
      <Text>
        check 18: :{check()}
      </Text>
      <Text>

      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})