import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { StyledButton } from "../../components/button";
import { StyledInput } from "../../components/input";

import {
  StyledContainer,
  StyledFormControl,
  Title,
  Welcome,
} from "../login/styled";
import { Image } from "native-base";

import { CheckBoxComponent } from "../../components/checkBox";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleAdvance = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <StyledContainer>
      {currentStep === 1 && (
        <>
          <Welcome>
            <Image source={Logo} alt="Logo" />
            <Title>Insira alguns dados básicos</Title>
          </Welcome>

          <StyledFormControl>
            <StyledInput placeholder="Digite seu nome completo" />
            <StyledInput placeholder="Insira seu endereço de email" />
            <StyledInput placeholder="Insira sua senha" secureTextEntry />
            <StyledInput placeholder="Repita sua senha" secureTextEntry />

            <StyledButton onPress={handleAdvance}>Avançar</StyledButton>
          </StyledFormControl>
        </>
      )}

      {currentStep === 2 && (
        <>
          <Welcome>
            <Image source={Logo} alt="Logo" />
            <Title>Insira seu endereço</Title>
          </Welcome>

          <StyledFormControl>
            
            <StyledInput placeholder="Insira seu CEP" />
            <StyledInput placeholder="Estado" />
            <StyledInput placeholder="Cidade" />
            <StyledInput placeholder="Bairro" />
            <StyledInput placeholder="Rua" />
            <StyledInput placeholder="Número da Casa" />

            <StyledButton onPress={() => setCurrentStep(currentStep - 1)}>
              Voltar
            </StyledButton>
            <StyledButton onPress={handleAdvance}>Avançar</StyledButton>
          </StyledFormControl>
        </>
      )}

      {currentStep === 3 && (
        <>
          <Welcome>
            <Image source={Logo} alt="Logo" />
            <Title>Para finalizar, qual seu plano de saúde?</Title>
          </Welcome>

          <StyledFormControl>
            <CheckBoxComponent />
            <StyledButton onPress={() => setCurrentStep(currentStep - 1)}>
              Voltar
            </StyledButton>
            <StyledButton>Cadastrar</StyledButton>
          </StyledFormControl>
        </>
      )}
    </StyledContainer>
  );
};

export default Register;
