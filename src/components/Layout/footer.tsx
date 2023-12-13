import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Center,
  HStack,
  Icon,
  NativeBaseProvider,
  Pressable,
  Text,
} from "native-base";
import React from "react";
import styled from "styled-components/native";

const StyledBox = styled(Box)`
  flex: 1;
  background-color: white;
  width: 100%;
  align-self: center;
  margin-top: 30px;
`;

export const Footer = () => {
  const [selected, setSelected] = React.useState(1);

  return (
    <NativeBaseProvider>
      <StyledBox safeAreaTop>
        <HStack bg="#0B3B60" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>

          <Pressable
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? "calendar" : "calendar-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Consultas
              </Text>
            </Center>
          </Pressable>

          <Pressable
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name="search" />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Explorar
              </Text>
            </Center>
          </Pressable>

          <Pressable
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? "account" : "account-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Perfil
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </StyledBox>
    </NativeBaseProvider>
  );
};
