
import React from 'react';
import styled from 'styled-components/native';
import { Input } from 'native-base';

export const StyledInput = styled(Input)`
  padding: 0 16px;
  font-size: 16px;
  border-radius: 8px;
  width: 311px;
  height: 48px;
  font-family: sans-serif;
`;

const InputComponent = ({ placeholder, value, onChangeText, keyboardType, secureTextEntry }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default InputComponent;
