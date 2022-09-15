import { HStack, Stack, Text, VStack, useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Imported components
import { Navbar } from "../components/Navbar";
import { Page1 } from "../components/acceuil/Page1";
import { Page2 } from "../components/acceuil/Page2";
import { Page3 } from "../components/acceuil/Page3";
import { Page4 } from "../components/acceuil/Page4";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <div className={styles.container}>
      <Head>
        <title>Marie-France Binette</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isDark={isDark} toggleColorMode={toggleColorMode}/>
      <VStack display="flex" w="100%" h="100%">
        <Stack
          position="relative"
          display="flex"
          justify="center"
          align="center"
          w="100%"
          h="100%"
          spacing={8}
        >
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </Stack>
      </VStack>

      <footer className={styles.footer}>
        Copyright © 2019 - 2022 Marie-France Binette Psychologue | Mentions
        légales
      </footer>
    </div>
  );
}
