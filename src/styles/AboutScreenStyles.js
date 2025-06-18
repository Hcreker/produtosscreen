import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F0FE',
        paddingTop: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
    },

    titulo: {
        color: '#5C6BC0',
        textAlign: 'center',
        fontSize: 30, 
        marginBottom: 15,
        fontWeight: 'bold',
    },

    ola: {
        textAlign: 'center',
        fontSize: 15, 
        marginBottom: 15,
    },

    oi: {
        textAlign: 'center',
        fontSize: 15, 
        marginBottom: 15,
        fontStyle:'italic',
        fontWeight:'bold',
        color: '#555555',
        marginBottom: 30,
    },

    botao: {
        backgroundColor: '#5C6BC0',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
        
      },
    
      textoBotao: {
        color: '#f0f0f0',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
      },

      botao2: {
        backgroundColor: '#5C6BC0',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 55,
        
      },
    
      textoBotao2: {
        color: '#f0f0f0',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
      },

      reserva: {
        textAlign: 'center',
        fontSize: 15, 
        marginBottom: 15,
        fontStyle:'italic',
        fontWeight:'bold',
        color: '#333333',
        marginBottom: 55,
    },

  });




export default styles;