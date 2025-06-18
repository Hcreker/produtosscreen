import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../src/styles/HomeScreenStyles'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Inicio</Text>
      <Text style={styles.header}>Notícias</Text>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

// Simulação de dados de notícias
const newsData = [
  { id: '1', title: 'Tragédia!', description: 'Infelizmente a BMW do Josué foi roubada nessa manhã de quarta-feira ' },
  { id: '2', title: 'Tensão!', description: 'Alunos do senai tem seus pecados julgados por Oscar nessa manhã de quarta-feira' },
  { id: '3', title: 'Ola', description: 'Ola tudo bem' },
  { id: '4', title: 'Me adota', description: 'por favor' },
  { id: '5', title: 'Oi', description: 'Josué condena seus alunos do senai com teste com teste mortal nesse quarta-feira'},
];

const NewsItem = ({ item }) => (
  <View style={styles.newsItem}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </View>
);