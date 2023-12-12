import styled from "styled-components/native";
import { Box, FormControl, Button, Input, VStack, Text } from "native-base";

export const StyledContainer = styled(VStack)`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding: 100px 16px;
  width: 100%;
  height: 100%;
`;


export const Title = styled(Text) `


  color: #6B6E71;
  font-family: sans-serif;
  font-size: 24px;
  line-height: 28.2px;
  font-weight: 700;

`

export const Welcome = styled(Box)`
  gap: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;


export const StyledFormControl = styled(FormControl)`
  margin-bottom: 16px;
  gap: 10px;
`;

export const StyledInput = styled(Input)`
  padding: 0 16px;
  font-size: 16px;
  border-radius: 8px;
  width: 311px;
  height: 48px;
  font-family: sans-serif;

`;

export const StyledLoginButton = styled(Button)`
  margin-top: 16px;
  background-color: #0b3b60;
`;

export const Register = styled(Box)`
  gap: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  
`;

