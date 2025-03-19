import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import InputField from './src/componets/InputField';
import Logo from './src/componets/Logo';

const App = () => {
  // Variáveis de estado
  const [pmNota1, setPmNota1] = useState('0');
  const [pmNota2, setPmNota2] = useState('0');
  const [pmNota3, setPmNota3] = useState('0');
  const [pmFaltas, setPmFaltas] = useState('0');
  const [message, setMessage] = useState('');

  const resetFields = () => {
    setPmNota1('0');
    setPmNota2('0');
    setPmNota3('0');
    setPmFaltas('0');
    setMessage('');
  };

  const handleValidation = () => {
    const nota1 = parseFloat(pmNota1) || 0;
    const nota2 = parseFloat(pmNota2) || 0;
    const nota3 = parseFloat(pmNota3) || 0;
    const faltas = parseInt(pmFaltas) || 0;

    const media = (nota1 + nota2 + nota3 - Math.min(nota1, Math.min(nota2, nota3))) / 2;

    // Regras de aprovação
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
      <InputField
        label="Nota 1"
        value={pmNota1}
        onChange={setPmNota1}
      />
      <InputField
        label="Nota 2"
        value={pmNota2}
        onChange={setPmNota2}
      />
      <InputField
        label="Nota 3"
        value={pmNota3}
        onChange={setPmNota3}
      />
      <InputField
        label="Faltas"
        value={pmFaltas}
        onChange={setPmFaltas}
        keyboardType="numeric"
      />
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
