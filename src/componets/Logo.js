import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const Logo = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('../../assets/logo_fiap.png')}
        style={{ width: 500, height: 200, alignSelf: 'center' }}
      />
    </TouchableOpacity>
  );
};

export default Logo;

