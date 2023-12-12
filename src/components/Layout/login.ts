import styled from "styled-components/native";
import { Box, FormControl, VStack, Text } from "native-base";

export const StyledContainer = styled(VStack)`

  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding: 100px 16px;
`;

export const Title = styled(Text)`
  color: #6b6e71;
  font-family: sans-serif;
  font-size: 24px;
  line-height: 28.2px;
  font-weight: 700;
`;

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

export const Register = styled(Box)`
  gap: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
