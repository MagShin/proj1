import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState('');

  // Função para calcular a área do triângulo
  function calcularArea(){
    if (base > 0 && altura > 0) {
      setArea((parseFloat(base) * parseFloat(altura)) / 2);
    } else {
      setArea('');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Insira os dados para calcular a área do triângulo:</Text>
      <TextInput
        placeholder="Base"
        style={{ height: 40, textAlign: 'center' }}
        keyboardType="numeric"
        onChangeText={(base) => setBase(base)}
      />
      <TextInput
        placeholder="Altura"
        style={{ height: 40, textAlign: 'center' }}
        keyboardType="numeric"
        onChangeText={(altura) => setAltura(altura)}
      />

      <Button title="Calcular" 
      onPress={calcularArea} />

      <Text>{area ? `Resultado: ${area}` : ''}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d2d2c1',
    padding: 20,
    borderRadius: 5,
    margin: 8,


    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    borderWidth: 20,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    color: '#333',

  },
});
