import type { NextPage } from "next";
import { Box, Flex } from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import Head from "next/head";
import type { CardDetails } from "../components/types";

const cards: CardDetails[] = [
  {
    textColor: "#e0dede",
    backgroundColor: "#8834ea",
    cardHolder: "fernando s arruda ",
    finalNumbers: "8923",
    expiration: "03/30",
    cardBrand: "Nubank",
    totalAmount: 300,
  },
  {
    textColor: "#e0dede",
    backgroundColor: "#d10202",
    cardHolder: "fernando s arruda ",
    finalNumbers: "2138",
    expiration: "03/30",
    cardBrand: "Extra",
    totalAmount: 250,
  },
  {
    textColor: "#e0dede",
    secondaryTextColor: "#00f349",
    backgroundColor: "#4a4848",
    cardHolder: "fernando s arruda ",
    finalNumbers: "8301",
    expiration: "03/30",
    cardBrand: "Pic-Pay",
    totalAmount: 100,
  },
  {
    textColor: "#fff",
    backgroundColor: "#f27400",
    cardHolder: "fernando s arruda ",
    finalNumbers: "8301",
    expiration: "03/30",
    cardBrand: "Inter",
    totalAmount: 100000,
  }
];

const Home: NextPage = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Head>
        <title>Cartãozinho</title>
      </Head>
      <Box m={2} overflow="hidden" minWidth="75vw">
        <Carousel cards={cards} />
      </Box>
    </Flex>
  );
};

export default Home;
