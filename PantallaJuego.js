import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PantallaJuego = () => {
  const [numeroSecreto, setNumeroSecreto] = useState('');
  const [numeroIngresado, setNumeroIngresado] = useState('');
  const [intentos, setIntentos] = useState(10);
  const [mensaje, setMensaje] = useState('');
  const [mensaje1, setMensaje1] = useState('');
  const [resultado, setResultado] = useState('Adivina el Número');
  const [intentosAnteriores, setIntentosAnteriores] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [juegoTerminado, setJuegoTerminado] = useState(false);


  useEffect(() => {
    //generarNumeroSecreto();
    setNumeroSecreto('5485');
  }, []);

//esta funcion genera el numero aleatorio de 4 digitos de forma random
  const generarNumeroSecreto = () => {
    let numero = '';
    const digits = '0123456789';
    const longitud = 4;
    for (let i = 0; i < longitud; i++) {
      const index = Math.floor(Math.random() * digits.length);
      
      numero += digits[index];
    }
    setNumeroSecreto(numero);
  };

  
  const validarNumero = () => {

    const Correctos = [];
    const Regular = [];
    const Mal = [];
    const numeroSecretoArray = numeroSecreto.split('');
    const numeroIngresadoArray = numeroIngresado.split('');

    if (numeroIngresado === '' || numeroIngresado.length !=4 || isNaN(numeroIngresado)) {
        setInputError(true);
        return;
      }
      setInputError(false);

      //recorre cada numero si coincide se concidera correcto.
    for (let i = 0; i < numeroIngresado.length; i++) {
        if (numeroIngresadoArray[i] === numeroSecretoArray[i]) {
            Correctos.push(numeroIngresadoArray[i]);
            numeroSecretoArray[i] = null; 
            numeroIngresadoArray[i] = null; 
          }
    }

    //recorre nuevamente, esta vez comprobamos si los numeros son regulares o esta mal
    for (let i = 0; i < numeroIngresadoArray.length; i++) {
        if (numeroIngresadoArray[i] !== null) {
          //si encuentra devuelve su indice, de lo contrario devuelve -1
          const index = numeroSecretoArray.indexOf(numeroIngresadoArray[i]);
          if (index !== -1) {
            Regular.push(numeroIngresadoArray[i]);
            numeroSecretoArray[index] = null; 
          } else {
            Mal.push(numeroIngresadoArray[i]);
          }
        }
      }

    const mensaje = (
        <Text>
            <Text style={styles.correctos}> Correctos: {Correctos.length}</Text>
            <Text style={styles.regular}>  Regular: {Regular.length}</Text>
            <Text style={styles.mal}>  Mal: {Mal.length}</Text>
        </Text>
    );

    setMensaje(mensaje);

    const intentoActual = {
        intento: 10 - intentos + 1,
        numeros: numeroIngresado,
        resultado: `C : ${Correctos.length} R : ${Regular.length} M : ${Mal.length}`,
      };
      setIntentosAnteriores([...intentosAnteriores, intentoActual]);


    if (Correctos.length === 4) {
      const numero1 = Correctos[0];
      const numero2 = Correctos[1];
      const numero3 = Correctos[2];
      const numero4 = Correctos[3];

      const mensajee = (
      <Text style={styles.containerNumeros}>
        <Text style={styles.numerosCorrectos}>{numero1}</Text>
        <Text style={styles.numerosCorrectos}>{numero2}</Text>
        <Text style={styles.numerosCorrectos}>{numero3}</Text>
        <Text style={styles.numerosCorrectos}>{numero4}</Text>
      </Text>
      );

      setMensaje1(mensajee);
      const tituloGano = (
        <Text style={styles.correctos}>¡Felicidades, has ganado!</Text>
      )
      setResultado(tituloGano);

      setJuegoTerminado(true);
    } else if (intentos === 1) {
        const tituloPerdio = (
          <Text style={styles.mal}>Perdiste. Suerte en la proxima!</Text>
        )
        const numero1 = Correctos[0];
        const numero2 = Correctos[1];
        const numero3 = Correctos[2];
        const numero4 = Correctos[3];
  
        const mensajee = (
        <Text style={styles.containerNumeros}>
          <Text style={styles.numerosCorrectos}>{numero1}</Text>
          <Text style={styles.numerosCorrectos}>{numero2}</Text>
          <Text style={styles.numerosCorrectos}>{numero3}</Text>
          <Text style={styles.numerosCorrectos}>{numero4}</Text>
        </Text>
        );
        
        setResultado(tituloPerdio);
        setMensaje1(mensajee);
        setJuegoTerminado(true);
        setIntentos(intentos - 1);
      
    } else {
      setIntentos(intentos - 1);
    }
  };

  const reiniciarJuego = () => {
    setIntentos(10);
    setNumeroIngresado('');
    setMensaje('');
    setResultado('Adivina el Número');
    numero1='';
    numero2='';
    numero3='';
    numero4='';
    setMensaje1('');
    setIntentosAnteriores([]);
    setJuegoTerminado(false);
    generarNumeroSecreto();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{resultado}</Text>
      <Text style={[styles.mensaje, styles.numeroSecreto]}>
        El número secreto es: {mensaje1}
      </Text>
      <TextInput style={[styles.input, inputError && styles.inputError]} value={numeroIngresado} onChangeText={setNumeroIngresado} 
      keyboardType="numeric" maxLength={4}/>

      <Text style={styles.mensaje}>{mensaje}</Text>

      <View style={styles.buttonWrapper}>
        <Button style={styles.button} title="Comprobar" onPress={validarNumero} color="#101721" disabled={numeroIngresado === ''|| juegoTerminado}/>
      </View>

      <Text style={styles.intentos}>Intentos restantes: {intentos}</Text>

      <View>
        <Text style={styles.intentosAnterioresTitle}>Intentos Anteriores:</Text>
        {intentosAnteriores.map((intento, index) => (
          <Text style={styles.intentosAnteriores} key={index}>
            Intento {intento.intento}: {intento.numeros} - {intento.resultado}
          </Text>
        ))}
      </View>


      <View style={styles.buttonWrapper}>
        <Button style={styles.button} title="Jugar de Nuevo" onPress={reiniciarJuego} color="#101721"/>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,  
    padding: 20,
    backgroundColor: '#F2F2F2', 
    textAlign:'center'
  },
  containerNumeros:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#F59237',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: '50%',
    borderColor: '#4E658E',
    borderWidth: 1,
    marginBottom: 50,
    paddingHorizontal: 10,
    textAlign:'center',
    marginLeft:370
  },
  inputError: {
    borderColor: 'red', 
    textAlign:'center'
  },
  mensaje: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000',
    textAlign:'center'
  },
  numeroSecreto: {
    color: '#000000',
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
  },
  intentos: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonWrapper: {
    marginBottom: 25,
    width: '40%',
    alignSelf: 'center',
  },
  correctos: {
    color: '#73e600',
    fontWeight: 'bold',
    margin:10
  },
  numerosCorrectos: {
    color: '#73e600',
    fontWeight: 'bold',
  },
  regular: {
    color: '#e6e600',
    fontWeight: 'bold',
    margin: 10
  },
  mal: {
    color: '#e60000',
    fontWeight: 'bold',
    margin: 10
  },
  intentosAnterioresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  numeros:{
    margin:20
  }
});

export default PantallaJuego;
