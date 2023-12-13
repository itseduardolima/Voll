import { Box, FormControl, ScrollView, Text } from "native-base";
import styled from "styled-components/native";

export const Container = styled(ScrollView)`
  flex: 1;
  background-color: white;
`;

export const Depositions = styled(Box)`
  flex: 1;
`;

export const Header = styled(Box)`
  padding: 20px;
`;

export const Title = styled(Text)`
  margin-top: 20px;
  color: #339cff;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  font-family: sans-serif;
`;

export const Form = styled(FormControl)`
  padding: 16px 8px;
  gap: 10px;
  background-color: white;
  width: 311px;
  height: 208px;
  border-radius: 8px;
  margin: 0 auto;

`;

export const DepositionsTitle = styled(Text)`
  padding-top: 20px;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #0b3b60;
  text-align: center;
  margin-bottom: 40px;
`;

export const Navbar = styled(Box)`
  width: 100%;
  height: 76px;
  padding: 16px 42px;
  gap: 34px;
  background-color: #0b3b60;
  margin-top: 30px;
`;
