import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../src/styles/AboutScreenStyles';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre este aplicativo inovador de alta inovação daora</Text>
            <Text style={styles.ola}>ola</Text>
            <Text style={styles.oi}>este aplicativo consiste em ter concistência</Text>


            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>nao sei oque colocar aqui entao fica esse texto mesmo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao2}>
                <Text style={styles.textoBotao2}>inserir texto</Text>
            </TouchableOpacity>

            <Text style={styles.reserva}>& este aplicativo tem direitos reservados reservados direitos senai reservados</Text>


        </View>


    );
}