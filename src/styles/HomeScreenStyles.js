import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE', 
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  texto: {
    color: '#5C6BC0', 
    fontSize: 18,
    marginBottom: 10,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: '#7986CB', 
    borderColor: '#5C6BC0',
    borderWidth: 3,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    color: '#FFFFFF',
  },

  newsItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C5CAE9', 
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F51B5', 
    marginBottom: 5,
  },

  description: {
    fontSize: 16,
    color: '#5C6BC0',
  },
});

export default styles;