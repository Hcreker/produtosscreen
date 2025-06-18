import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../src/styles/ProdutosScreenStyle'

// Importe suas imagens locais
const imagemProduto1 = require('../assets/transferir.png'); // Certifique-se de que o caminho está correto
const imagemProduto2 = require('../assets/b1cb8c8044e7fd242d44073042e686cb.webp');
const imagemProduto3 = require('../assets/images.png');

const produtos = [
  { id: '1', nome: 'Cortina de Ferro Soviética', imagem: imagemProduto1, preco: 'R$ 50,00' },
  { id: '2', nome: 'Motor de Fusão', imagem: imagemProduto2, preco: 'R$ 70,00' },
  { id: '3', nome: 'Jerusalém', imagem: imagemProduto3, preco: 'R$ 80,00' },
];

const CardsProdutosScreen = ({ navigation }) => {
  const renderProduto = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => alert(`Você selecionou: ${item.nome}`)}>
      {/* Para imagens locais, não use { uri: ... }, apenas o nome da imagem */}
      <Image source={item.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produtos</Text>
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};



export default CardsProdutosScreen;