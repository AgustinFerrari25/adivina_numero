import React from 'react';
import { ScrollView, Text, StyleSheet} from 'react-native';

const PantallaAyuda = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Objetivo del Juego</Text>
            <Text style={styles.text}>
                El objetivo es adivinar un número secreto de 4 cifras en menos de 10 intentos. Cada cifra del número está entre 0 y 9.
            </Text>

            <Text style={styles.title}>Cómo Jugar</Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>Hacer una suposición:</Text> El jugador propone un número de 4 cifras.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>Recibir pistas:</Text> El juego proporciona pistas en forma de "Correctos" y "Regular":
            </Text>
            <Text style={styles.text}>
                <Text style={styles.bullet}>• Correctos:</Text> Número está en su posición exacta.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.bullet}>• Regular:</Text> Número es correcto pero está en la posición incorrecta.
            </Text>
            <Text style={styles.text}>
                <Text style={styles.subtitle}>Ejemplo:</Text>
            </Text>
            <Text style={styles.title}>Ejemplo de Juego</Text>
            <Text style={styles.text}>
                Número secreto: 7382 {"\n"}
                Suposición 1: 1324 → 1 Correcto (3), 1 Regular (2) {"\n"}
                Suposición 2: 8397 → 1 Correcto (3), 2 Regular (7, 8) {"\n"}
                Suposición 3: 7382 → 4 Correctos, Jugador Gana
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#F2F2F2', 
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#F59237',
        textAlign: 'center',
    },
    text: {
        fontSize: 15,
        marginBottom: 15,
        color: '#333',
        textAlign: 'justify',
    },
    subtitle: {
        fontWeight: 'bold',
    },
    bullet: {
        fontWeight: 'bold',
    },
});

export default PantallaAyuda;
