import React from "react";
import styled from "styled-components/native";
import { Button, Text } from "native-base";

export const StyledButton = styled(Button)`
  margin-top: 16px;
  background-color: #0b3b60;
`;

const ButtonComponent = ({ onPress, children }) => {
  return (
    <StyledButton onPress={onPress}>
      <Text color="white">{children}</Text>
    </StyledButton>
  );
};

export default ButtonComponent;
