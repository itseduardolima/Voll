import { Image } from "native-base";
import Logo from "../../assets/Logo.png";
import { Container, DepositionsTitle, Form, Header, Title } from "./styled";
import { StyledButton } from "../../components/button";
import { StyledInput } from "../../components/input";
import { Depositions } from "../../components/depositions";
import { Footer } from "../../components/Layout/footer";

export const Home = () => {
  return (
    <Container>
      <Header>
        <Image source={Logo} alt="Logo" />
        <Title>Boas vindas!</Title>
      </Header>

      <Form shadow={1}>
        <StyledInput placeholder="Digite a especialidade" />
        <StyledInput placeholder="Digite a Lozalização" secureTextEntry />
        <StyledButton>Buscar</StyledButton>
      </Form>
      <DepositionsTitle>Depoimentos</DepositionsTitle>
      <Depositions />

      <Footer />
    </Container>
  );
};
