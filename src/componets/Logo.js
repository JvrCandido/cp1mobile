import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const Logo = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('../../assets/logo_fiap.png')} // Corrigido o caminho
        style={{ width: 100, height: 100, alignSelf: 'center' }}
      />
    </TouchableOpacity>
  );
};

export default Logo;

