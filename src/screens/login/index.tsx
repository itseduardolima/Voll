import React from "react";
import Logo from "../../assets/Logo.png";

import {
  Register,
  StyledContainer,
  StyledFormControl,
  Title,
  Welcome,
} from "./styled";

import { Image, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { StyledInput } from "../../components/input";
import { StyledButton } from "../../components/button";

const LoginScreen = () => {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate("register" as never);
  };

  return (
    <StyledContainer>
      <Welcome>
        <Image source={Logo} alt="Logo" />
        <Title>Faça login em sua conta!</Title>
      </Welcome>

      <StyledFormControl>

        <StyledInput placeholder="Usuário" />
        <StyledInput placeholder="Senha" secureTextEntry />

        <StyledButton>
          <Text color="white">Entrar</Text>
        </StyledButton>

        <Text color="#0B3B60">Esqueceu sua senha ?</Text>

      </StyledFormControl>

      <Register>
        <Text color="#6B6E71">Ainda não tem conta?</Text>

        <TouchableOpacity onPress={goToRegister}>
          <Text color="#339CFF">Faça seu cadastro</Text>
        </TouchableOpacity>
      </Register>
    </StyledContainer>
  );
};

export default LoginScreen;
