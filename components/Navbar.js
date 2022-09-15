import { Button, Flex, Link, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../public/images/logo-binette-1.png";
import NextLink from "next/link";

import { FaSun, FaMoon, FaHamburger } from "react-icons/fa";

export const Navbar = ({ isDark, toggleColorMode }) => {
  return (
    <Flex
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid lightgray"
      w="100%"
    >
      <Image src={logo} alt="logo" w="20%" />
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        w="40%"
      >
        <NextLink href="/">
          <Button fontSize="2xl" bg="none">
            Accueil
          </Button>
        </NextLink>
        <NextLink href="/motifs">
          <Button fontSize="2xl" bg="none">
            Motifs
          </Button>
        </NextLink>
        <NextLink href="/psychotherapie">
          <Button fontSize="2xl" bg="none">
            Psychothérapie
          </Button>
        </NextLink>
        <NextLink href="/autre">
          <Button fontSize="2xl" bg="none">
            Autre services
          </Button>
        </NextLink>
        <IconButton
          ml="4"
          mr="2"
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
          isRound="true"
          border={isDark ? "1px solid white" : "1px solid black"}
        />
      </Flex>
    </Flex>
  );
};
