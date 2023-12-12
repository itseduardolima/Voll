import React, { useState } from "react";
import Logo from "../../assets/Logo.png";

import {
  Register,
  StyledContainer,
  StyledFormControl,
  StyledInput,
  StyledLoginButton,
  Title,
  Welcome,
} from "./styled";
import { Image, Text } from "native-base";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Usuário:", username);
    console.log("Senha:", password);
  };

  return (
    <StyledContainer>
      <Welcome>
        <Image source={Logo} alt="Logo" />
        <Title>Faça login em sua conta!</Title>
      </Welcome>

      <StyledFormControl>
        <StyledInput
          placeholder="Usuário"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <StyledInput
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <StyledLoginButton onPress={handleLogin}>
          <Text color="white">Entrar</Text>
        </StyledLoginButton>

        <Text color="#0B3B60">Esqueceu sua senha ?</Text>
      </StyledFormControl>

      <Register>
        <Text color="#6B6E71">Ainda não tem conta?</Text>
        <Text color="#339CFF">Faça seu cadastro</Text>
      </Register>
    </StyledContainer>
  );
};

export default LoginScreen;
