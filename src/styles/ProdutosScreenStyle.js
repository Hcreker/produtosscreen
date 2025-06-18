import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE', // Fundo claro azul
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 16,
    color: '#3F51B5', // Azul escuro vibrante
  },
  lista: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF', // Cartão branco
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#C5CAE9', // Azul claro da borda
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5C6BC0', // Azul intermediário
  },
  preco: {
    fontSize: 14,
    color: '#7986CB', // Azul suave para preço
  },
});

export default styles;
