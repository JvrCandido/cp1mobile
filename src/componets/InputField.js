import React from 'react';
import { TextInput, Text, View } from 'react-native';

const InputField = ({ label, value, onChange, keyboardType = 'numeric' }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text>{label}</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#000000FF',
          padding: 10,
          borderRadius: 5,
        }}
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType}
        placeholder="Digite o valor"
        borderColor ="#000000FF"
      />
    </View>
  );
};

export default InputField;
