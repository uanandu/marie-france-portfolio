import { Navbar } from "../components/Navbar";
import { VStack } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";


const Psychotherapie = () => {
  return (
    <div className={styles.container}>

    <Navbar />
    <VStack display="flex" w="100%" h="100%">
      <h1>Psychotherapie</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reprehenderit, quisquam.
      </p>
    </VStack>
  </div>
  );
};

export default Psychotherapie;
