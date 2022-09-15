import {
  Stack,
  VStack,
  HStack,
  Text,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

export const Page2 = () => {
  return (
    <VStack
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="space-around"
      id="about"
      position="relative"
      pt={10}
      pb={50}
      pl={100}
      pr={100}
      borderBottom="1px solid orange"
      bg="orange"
      borderRadius={10}
    >
      <HStack w="100%" display="flex" justifyContent="flex-end" pl={20} pr={20}>
        <Stack display="flex" direction="column" w="200px">
          <Flex display="flex" alignItems="center" justify="space-between">
            <Link href="#about" >
              <a>About</a>
            </Link>
            <Text pl={5}>|</Text>
          </Flex>
          <Flex display="flex" alignItems="center" justify="space-between">
            <Link href="#pourquoi">
              <a>Pourquoi Psychothérapie</a>
            </Link>
            <Text pl={5}>-</Text>
          </Flex>
          <Flex display="flex" alignItems="center" justify="space-between">
            <Link href="#contact">
              <a>Contactez-moi</a>
            </Link>
            <Text pl={5}>-</Text>
          </Flex>
        </Stack>
      </HStack>
      <Flex
        display="flex"
        alignItems="center"
        justify="space-around"
        w="60%"
        h="100%"
        boxShadow="4px 2px 4px 4px rgba(0, 0, 0, 0.2)"
        borderRadius={10}
        p={10}
        bg="whitesmoke"
      >
        <Stack display="flex" p={10} justifyContent="space-around">
          <Text fontSize="3xl" fontWeight="bold">
            About Me
          </Text>
          <Box
            w="100%"
            h="40vh"
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            textAlign="justify"
          >
            <Text fontSize="xl" borderBottom="1px solid lightgray" pb={5}>
              <strong>
                Plus de 20 ans d’expériences professionnelles diverses.
              </strong>{" "}
              Grâce à mon approche intégrative et mon analyse spécifique des
              diverses problématiques, je vous offre des services
              psychothérapeutiques de qualité.
            </Text>
            <Text fontSize="xl" borderBottom="1px solid lightgray" pb={5}>
              <strong>Des accréditations reconnues.</strong> Je suis membre de
              l’Ordre des Psychologues du Québec, de la société Milton Érickson
              du Québec, de l’EMDR Canada et de la Société Québécoise d’Hypnose.
            </Text>
            <Text fontSize="xl" borderBottom="1px solid lightgray" pb={5}>
              <strong>Un environnement sécuritaire et accueillant.</strong>{" "}
              Psychologue dynamique et engagée, je vous offre un environnement
              accueillant et sécuritaire afin que vous puissiez vous y déposer
              et vous centrer sur vous-même en toute confiance.
            </Text>
          </Box>
        </Stack>
        <Image
          src="https://cdn.discordapp.com/attachments/978673047772991548/1019258024642224188/marie-france-binette.png"
          w="auto"
          h="60%"
          objectFit="contain"
          borderRadius={10}
          border= "10px solid lightgray"
          p={2}
        />
      </Flex>
      <Text fontSize="3xl">
        "À vaillant coeur rien d’impossible."- <strong>Jacques Cœur</strong>
      </Text>
    </VStack>
  );
};
