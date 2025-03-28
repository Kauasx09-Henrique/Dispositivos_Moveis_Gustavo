import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Serie(props) {
    const { nome, ano, diretor, temporadas, capa } = props;

    return (
        <View style={styles.container}>
            <Image source={{ uri: capa }} style={styles.imagem} />
            <Text style={styles.titulo}>Nome: {nome}</Text>
            <Text style={styles.texto}>Ano: {ano}</Text>
            <Text style={styles.texto}>Diretor: {diretor}</Text>
            {temporadas && <Text style={styles.texto}>Temporadas: {temporadas}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        padding: 10,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
        elevation: 3,
    },
    imagem: {
        width: 150,
        height: 200,
        borderRadius: 8,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    texto: {
        fontSize: 14,
        color: '#555',
    },
});
