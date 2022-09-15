import { Box, Flex, Image, Stack, Text, VStack } from "@chakra-ui/react";
import image from "../../public/images/oilseed.jpg";

export const Page1 = () => {
  return (
    <VStack
      display="flex"
      w="100%"
      h="95vh"
      borderBottom="1px solid orange"
      id="main"
      bg="yellow.100"
      borderRadius={10}
    >
      <Flex
        display="flex"
        w="100%"
        h="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        <Image
          src="https://cdn.discordapp.com/attachments/978673047772991548/1019258024642224188/marie-france-binette.png"
          w="auto"
          h="80%"
          objectFit="contain"
          borderRadius={10}
        />
        <Stack
          display="flex"
          w="50%"
          h="40%"
          justifyContent="space-around"
          alignItems="center"
        >
          <Text fontSize="5rem" fontWeight="bold">
            Marie-France Binette
          </Text>
          <Text fontSize="3rem" color="gray">
            votre psychologue à Saint-Jérôme{" "}
          </Text>{" "}
          <Text fontSize="2rem" textAlign="center">
            J’aide des adultes et des personnes agees qui eprouvent des
            difficultes affectives, psychologiques, emotionnelles ou encore
            sexuelles.
          </Text>
          <Text fontSize="2.5rem">Le but de cette therapie:</Text>
          <Text fontSize="5xl" fontWeight="bold">
            Retrouver votre équilibre intérieur
          </Text>
        </Stack>
      </Flex>
      <Text fontSize="xl">Scroll down</Text>
    </VStack>
  );
};
