import { Box, Divider, Text, VStack } from "native-base";
import styled from "styled-components/native";

const PersonalData = styled(Text)`
  color: #6b6e71;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-top: 15px;
`;

const Comment = styled(Text)`
  font-family: sans-serif;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  color: #90989f;
`;

export const Depositions = () => {
  return (
    <Box borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="6">
          <Comment>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita
          </Comment>
          <PersonalData>Júlio, 40 anos, São Paulo/SP.</PersonalData>
        </Box>

        <Box px="6">
          <Comment>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita
          </Comment>
          <PersonalData>Júlio, 40 anos, São Paulo/SP.</PersonalData>
        </Box>

        <Box px="6">
          <Comment>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita
          </Comment>
          <PersonalData>Júlio, 40 anos, São Paulo/SP.</PersonalData>
        </Box>
        
      </VStack>
    </Box>
  );
};
