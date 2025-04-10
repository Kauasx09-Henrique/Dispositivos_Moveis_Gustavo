import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Card, Paragraph, Text, Title } from 'react-native-paper'

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text variant='headlineSmall' style={styles.sectionTitle}>Cardápio</Text>

        <Card style={styles.card} mode="outlined">
          <Card.Cover style={styles.cover} source={{ uri: 'https://img.freepik.com/fotos-premium/camarao-strogonoff-com-arroz-e-batata-de-palha-sobre-mesa-de-madeira_92534-5905.jpg' }} />
          <Card.Content>
            <Title style={styles.title}>Strogonoff</Title>
            <Paragraph style={styles.paragraph}>
              Frango ao molho cremoso com champignon, ketchup, mostarda e batata palha.
            </Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card} mode="outlined">
          <Card.Cover style={styles.cover} source={{ uri: 'https://img.freepik.com/fotos-gratis/lasanha-recem-cozida-com-molho-a-bolonhesa-gourmet-gerada-por-ia_188544-16148.jpg' }} />
          <Card.Content>
            <Title style={styles.title}>Parmegiana</Title>
            <Paragraph style={styles.paragraph}>
              Filé empanado coberto com molho de tomate e queijo gratinado.
            </Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card} mode="outlined">
          <Card.Cover style={styles.cover} source={{ uri: 'https://img.freepik.com/fotos-premium/closeup-maos-segurando-saborosos-hamburgueres-grelhados-comendo-em-fast-food-no-bar-cafebeer_334698-420.jpg' }} />
          <Card.Content>
            <Title style={styles.title}>Hambúrguer</Title>
            <Paragraph style={styles.paragraph}>
              Pão artesanal, hambúrguer de picanha ou costela e muito sabor.
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f8f8f8',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: 'white',
    elevation: 2,
  },
  cover: {
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#222',
  },
  paragraph: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
})
