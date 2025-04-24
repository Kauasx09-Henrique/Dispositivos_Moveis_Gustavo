import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Post({navigation, route}) {
  return (
    <View>
      <Text>Post</Text>
      <Text>Post</Text>
      <Text>Post</Text>
      <Text>Post</Text>
    
      <Button mode='contained' backgroundcolor={'red'} onPress={() => navigation.navigate('Home')}> Ir para Home</Button>

    
    </View>
    

  )
}

const styles = StyleSheet.create({})