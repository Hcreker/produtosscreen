import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#E8F0FE', // azul bem claro
        
    },
    bubbleContainer: {
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        top: 30,
        left: 62,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    bubble: {
        backgroundColor: '#7986CB', // roxo suave
        borderWidth: 2,
        borderColor: '#5C6BC0', // roxo-azulado
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15,
        width: '90%',
        alignItems: 'center',
        elevation: 5,
    },
    bubbleText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: '#3F51B5', // azul escuro
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#C5CAE9', // lilás claro
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    loginButton: {
        backgroundColor: '#5C6BC0', 
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: '#3F51B5', // azul escuro
        textAlign: 'center',
        marginTop: 10,
    },
    error: {
        color: '#D32F2F', // vermelho vibrante para erro
        textAlign: 'center',
        marginTop: 10,
    },
});

export default styles;