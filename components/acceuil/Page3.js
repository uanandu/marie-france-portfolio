import {
  VStack,
  HStack,
  Flex,
  Text,
  Stack,
  UnorderedList,
  ListItem,
  Box,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

export const Page3 = () => {
  return (
    <VStack
      w="100%"
      h="100vh"
      display="flex"
      id="pourquoi"
      position="relative"
      pt={10}
      pb={50}
      pl={100}
      pr={100}
      bg="pink"
      borderRadius={10}
    >
      <HStack
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pl={20}
        pr={20}
      >
        <Text fontSize="5xl" w="50%">
          Vivez un changement positif à vos défis de vie.
        </Text>
        <Stack display="flex" direction="column" w="200px">
          <Flex display="flex" alignItems="center" justify="space-between">
            <Link href="#about">
              <a>About</a>
            </Link>
            <Text pl={5}>-</Text>
          </Flex>
          <Flex display="flex" alignItems="center" justify="space-between">
            <Link href="#pourquoi">
              <a>Pourquoi Psychothérapie</a>
            </Link>
            <Text pl={5}>|</Text>
          </Flex>
          <Flex display="flex" alignItems="center" justify="space-between">
            <Link href="#contact">
              <a>Contactez-moi</a>
            </Link>
            <Text pl={5}>-</Text>
          </Flex>
        </Stack>
      </HStack>
      <Stack
        display="flex"
        justifyContent="space-around"
        w="70%"
        h="40%"
        p={20}
      >
        <Text fontSize="xl">
          Je vous accueille dans un environnement sécuritaire pour vous
          accompagner dans vos questionnements et vos difficultés dont
          l’objectif est de répondre à vos besoins de façon unique et
          personnalisée.
        </Text>
        <Text fontSize="xl">
          Un accompagnement professionnel pour de nombreux motifs de
          consultation vous est proposé dont :
        </Text>
      </Stack>
      <Flex
        display="flex"
        justifyContent="space-around"
        w="100%"
        h="100%"
        p={10}
      >
        <Box
          w="40vw"
          h="40%"
          display="flex"
          flexDirection="column"
          boxShadow="2px 4px 4px 6px rgba(0,0,0,0.2)"
          borderRadius={10}
          m={10}
          p={5}
          cursor="pointer"
        >
          <Text fontSize="3xl">
            Les difficultés affectives et relationnelles :
          </Text>
          <UnorderedList>
            <ListItem fontSize="xl">
              Travail : épuisement professionnel, harcèlement au travail,
              anxiété
            </ListItem>
            <ListItem fontSize="xl">
              Amour : divorce / séparation, jalousie, infidélité, violence
              conjugale, questionnement conjugal
            </ListItem>
            <ListItem fontSize="xl">
              Personnel : troubles anxieux, troubles de l’humeur, spiritualité,
              dépression, estime de soi, cycles de vie, image corporelle,
              difficultés relationnelles diverses, questionnement existentiel,
              état de stress post-traumatique, accident de la route et du
              travail
            </ListItem>
          </UnorderedList>
        </Box>
        <Box
          w="40vw"
          h="40%"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          boxShadow="2px 4px 4px 6px rgba(0,0,0,0.2)"
          borderRadius={10}
          m={10}
          p={5}
          cursor="pointer"
        >
          <Text fontSize="3xl">
            Les troubles sexuels et les dysfonctions sexuelles :
          </Text>
          <UnorderedList>
            <ListItem fontSize="xl">Agression : inceste, viol</ListItem>
            <ListItem fontSize="xl">Agression : inceste, viol</ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </VStack>
  );
};
