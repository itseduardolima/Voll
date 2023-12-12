import { Checkbox, Text } from "native-base";
import styled from "styled-components/native";

const StyledText = styled(Text)`
  color: #6b6e71;
`;

const CheckboxContainer = styled.View`
  margin-bottom: 10px;
`;

export const CheckBoxComponent = () => {
  return (
    <Checkbox.Group accessibilityLabel="choose values">
      <CheckboxContainer>
        <Checkbox value="Sulamerica">
          <StyledText>Sulamerica</StyledText>
        </Checkbox>
      </CheckboxContainer>

      <CheckboxContainer>
        <Checkbox value="Unimed">
          <StyledText>Unimed</StyledText>
        </Checkbox>
      </CheckboxContainer>

      <CheckboxContainer>
        <Checkbox value="Bradesco">
          <StyledText>Bradesco</StyledText>
        </Checkbox>
      </CheckboxContainer>

      <CheckboxContainer>
        <Checkbox value="Amil">
          <StyledText>Amil</StyledText>
        </Checkbox>
      </CheckboxContainer>

      <CheckboxContainer>
        <Checkbox value="BioSaúde">
          <StyledText>BioSaúde</StyledText>
        </Checkbox>
      </CheckboxContainer>

      <CheckboxContainer>
        <Checkbox value="BioVida">
          <StyledText>BioVida</StyledText>
        </Checkbox>
      </CheckboxContainer>

      <CheckboxContainer>
        <Checkbox value="Outros">
          <StyledText>Outros</StyledText>
        </Checkbox>
      </CheckboxContainer>

      <CheckboxContainer>
        <Checkbox value="none">
          <StyledText>Não tenho plano</StyledText>
        </Checkbox>
      </CheckboxContainer>
    </Checkbox.Group>
  );
};
