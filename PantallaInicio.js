import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';

const PantallaInicio=({navigation})=>{
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Adivina la Secuencia de Numeros!</Text>

            <View style={styles.buttonWrapper}>
                <Button title="Jugar" onPress={() => navigation.navigate('PantallaJuego')} color="#101721"/> 
            </View>
            <View style={styles.buttonWrapper}>
                <Button title="Como se Juega?" onPress={() => navigation.navigate('PantallaAyuda')} color="#101721"/>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F2F2F2',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 50,
        color: '#F59237',
        textAlign: 'center',
    },
    buttonWrapper: {
        marginBottom: 25,
        width: '30%',
    },
});

export default PantallaInicio;
