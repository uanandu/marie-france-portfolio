import { VStack, HStack, Flex, Text, Stack } from "@chakra-ui/react";
import Link from "next/link";

export const Page4 = () => {

  return (
    <VStack
      w="100%"
      h="100vh"
      display="flex"
      id="contact"
      position="relative"
      pt={10}
      pb={50}
      pl={100}
      pr={100}
      bg="green.200"
      borderRadius={10}
    >
      <HStack w="100%" display="flex" justifyContent="flex-end" pl={20} pr={20}>
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
            <Text pl={5}>-</Text>
          </Flex>
          <Flex display="flex" alignItems="center" justify="space-between">
            <Link href="#contact">
              <a>Contactez-moi</a>
            </Link>
            <Text pl={5}>|</Text>
          </Flex>
          <Flex display="flex" alignItems="center" justify="space-between">
            <Link href="#main">
              <a>Go Back Up</a>
            </Link>
            <Text pl={5}>-</Text>
          </Flex>
        </Stack>
      </HStack>
    </VStack>
  );
};
