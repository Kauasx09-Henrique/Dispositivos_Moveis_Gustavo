import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from 'react-native';

export default function MegaSenaGenerator() {
  const [jogos, setJogos] = useState([]);
  const [animating, setAnimating] = useState(false);

  const gerarJogo = () => {
    setAnimating(true);
    
    let numeros = new Set();
    while (numeros.size < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      numeros.add(numero);
    }

    const jogoOrdenado = Array.from(numeros).sort((a, b) => a - b);
    setJogos((prev) => [...prev, jogoOrdenado]);
    
    setTimeout(() => setAnimating(false), 500);
  };

  const limparJogos = () => {
    setJogos([]);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.jogo}>
      <Text style={styles.jogoNumero}>Jogo {index + 1}</Text>
      <View style={styles.numerosContainer}>
        {item.map((num, i) => (
          <View key={i} style={[
            styles.bola,
            { backgroundColor: getBolaColor(num) }
          ]}>
            <Text style={styles.numeroBola}>{num.toString().padStart(2, '0')}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  // Função para determinar a cor da bola baseada no número
  const getBolaColor = (num) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', 
      '#98D8C8', '#F06292', '#7986CB', '#9575CD',
      '#64B5F6', '#4DB6AC', '#81C784', '#FFD54F',
      '#FF8A65', '#A1887F', '#90A4AE'
    ];
    return colors[num % colors.length];
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titulo}>MEGA-SENA</Text>
            <View style={styles.logoContainer}>
              <View style={[styles.logoBola, { backgroundColor: '#FF6B6B' }]} />
              <View style={[styles.logoBola, { backgroundColor: '#4ECDC4' }]} />
              <View style={[styles.logoBola, { backgroundColor: '#FFD54F' }]} />
            </View>
          </View>
          
          <View style={styles.botoesContainer}>
            <TouchableOpacity 
              style={[styles.botao, styles.botaoGerar, animating && styles.botaoAnimating]}
              onPress={gerarJogo}
              disabled={animating}
            >
              <Text style={styles.textoBotao}>{animating ? 'Gerando...' : 'Gerar Jogo'}</Text>
            </TouchableOpacity>
            
            {jogos.length > 0 && (
              <TouchableOpacity 
                style={[styles.botao, styles.botaoLimpar]}
                onPress={limparJogos}
              >
                <Text style={styles.textoBotao}>Limpar</Text>
              </TouchableOpacity>
            )}
          </View>
          
          {jogos.length > 0 ? (
            <FlatList
              data={jogos}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderItem}
              style={styles.lista}
              scrollEnabled={false}
              ListHeaderComponent={() => (
                <Text style={styles.listaTitulo}>Seus Jogos Gerados</Text>
              )}
            />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderTexto}>
                Clique em "Gerar Jogo" para começar
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F1B2B',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 2,
    textShadowColor: 'rgba(255,255,255,0.3)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  logoBola: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
    flexWrap: 'wrap',
  },
  botao: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginHorizontal: 8,
    marginVertical: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  botaoGerar: {
    backgroundColor: '#6C5CE7',
  },
  botaoLimpar: {
    backgroundColor: '#FF7675',
  },
  botaoAnimating: {
    backgroundColor: '#A29BFE',
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  lista: {
    marginTop: 15,
  },
  listaTitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#BDC3C7',
    marginBottom: 15,
    textAlign: 'center',
  },
  jogo: {
    backgroundColor: '#1E2A3A',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  jogoNumero: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BDC3C7',
    marginBottom: 15,
  },
  numerosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bola: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  numeroBola: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.1)',
    borderStyle: 'dashed',
    borderRadius: 15,
  },
  placeholderTexto: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});