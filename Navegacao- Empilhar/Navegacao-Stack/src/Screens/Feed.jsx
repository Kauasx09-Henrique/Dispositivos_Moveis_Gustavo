import { StyleSheet, Text, View, } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'
import Post from './Post.jsx'


export default function Feed({ navigation, route }) {
console.log("ROUTE => ", route)

    return (
        <View>
            <Text>Feed</Text>
            <Text>Feed</Text>
            <Text>Feed</Text>
            <Text>Feed</Text>
            <Text>Feed</Text>
            <Button mode='contained' backgroundcolor={'red'} onPress={() => navigation.navigate(Post)}> Ir para Post</Button>

             <Button mode='contained' onPress={() => navigation.goback()}>Voltar</Button> 
        </View>
    )
}

const styles = StyleSheet.create({})