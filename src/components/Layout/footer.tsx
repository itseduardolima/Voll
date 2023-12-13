import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, Center, HStack, Icon, NativeBaseProvider, Pressable, Text } from "native-base";
import React from "react";
import styled from "styled-components/native";

const StyledBox = styled(Box)`
  flex: 1;
  background-color: white;
  width: 100%;
  align-self: center;
  margin-top: 30px;
`;

const StyledHStack = styled(HStack) `
  background-color: #0B3B60;
  align-items: center;
`

export const Footer = () => {
  const [selected, setSelected] = React.useState(1);

  const navigation = useNavigation();

  const goToAppointment = () => {
    navigation.navigate("appointment" as never);
  };
  
  const goToProfile = () => {
    navigation.navigate("profile" as never);
  };

 

  return (
    <NativeBaseProvider>
      <StyledBox safeAreaTop>
        <StyledHStack safeAreaBottom shadow={6}>
          <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon  color="white" size="sm" mb="1" as={
                <MaterialCommunityIcons 
                  name={selected === 0 ? "home" : "home-outline"}/> } />
              <Text color="white" fontSize="12">
                Home
              </Text>

            </Center>
          </Pressable>

          <Pressable opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
              <Icon onPress={goToAppointment} mb="1" color="white" size="sm" as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? "calendar" : "calendar-outline"}
                  />
                }
              />
              <Text color="white" fontSize="12">
                Consultas
              </Text>
            </Center>
          </Pressable>

          <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Explorar
              </Text>
            </Center>
          </Pressable>

          <Pressable opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)} >
            <Center>
              <Icon onPress={goToProfile}  mb="1" color="white" size="sm" as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? "account" : "account-outline"}
                  />
                }
               
              />
              <Text color="white" fontSize="12">
                Perfil
              </Text>
            </Center>
          </Pressable>
        </StyledHStack>
      </StyledBox>
    </NativeBaseProvider>
  );
};
