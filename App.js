import React, { useState } from 'react';

import { Button, ScrollView, StyleSheet, Text } from 'react-native';

import InputField from './src/componets/InputField';

import Logo from './src/componets/Logo';

const App = () => {

  const [jttNota1, setJttNota1] = useState('0');

  const [jttNota2, setJttNota2] = useState('0');

  const [jttNota3, setJttNota3] = useState('0');

  const [jttFaltas, setJttFaltas] = useState('0');

  const [message, setMessage] = useState('');

  const resetFields = () => {

    setJttNota1('0');

    setJttNota2('0');

    setJttNota3('0');

    setJttFaltas('0');

    setMessage('');

  };

  const handleValidation = () => {

    const notas = [

      parseFloat(jttNota1) || 0,

      parseFloat(jttNota2) || 0,

      parseFloat(jttNota3) || 0

    ];

    const faltas = parseInt(jttFaltas) || 0;

    // Ordenar notas e remover a menor

    notas.sort((a, b) => b - a);

    const media = (notas[0] + notas[1]) / 2;

    if (faltas > 20) {

      setMessage('Reprovado por falta');

    } else if (media < 6) {

      setMessage('Reprovado por nota');

    } else {

      setMessage(`Aprovado com média de ${media.toFixed(2)}`);

    }

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo onPress={resetFields} />
      <InputField label="Nota 1" value={jttNota1} onChange={setJttNota1} />
      <InputField label="Nota 2" value={jttNota2} onChange={setJttNota2} />
      <InputField label="Nota 3" value={jttNota3} onChange={setJttNota3} />
      <InputField label="Faltas" value={jttFaltas} onChange={setJttFaltas} keyboardType="numeric" />
      <Button title="Validar" onPress={handleValidation} />

      {message ? <Text style={styles.message}>{message}</Text> : null}
    </ScrollView>

  );

};

const styles = StyleSheet.create({

  container: {

    flex: 1,

    justifyContent: 'center',

    padding: 20,

    backgroundColor: '#f8f8f8',

  },

  message: {

    marginTop: 20,

    fontSize: 16,

    fontWeight: 'bold',

    textAlign: 'center',

  },

});

export default App;

