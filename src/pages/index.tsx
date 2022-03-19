import type { NextPage } from "next";
import { Box, Flex } from "@chakra-ui/react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Head from "next/head";
import type { CardDetails } from "../components/types";

const cards: CardDetails[] = [
  {
    textColor: "#e0dede",
    backgroundColor: "#8834ea",
    cardHolder: "fernando silva de arruda ",
    finalNumbers: "8923",
    expiration: "03/30",
    cardBrand: "Nubank",
  },
  {
    textColor: "#e0dede",
    backgroundColor: "#d10202",
    cardHolder: "fernando s arruda ",
    finalNumbers: "2138",
    expiration: "03/30",
    cardBrand: "Extra",
  },
  {
    textColor: "#e0dede",
    secondaryTextColor: "#00f349",
    backgroundColor: "#4a4848",
    cardHolder: "fernando s arruda ",
    finalNumbers: "8301",
    expiration: "03/30",
    cardBrand: "Pic-Pay",
  },
];

const Home: NextPage = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Head>
        <title>Cartãozinho</title>
        <link rel="icon" type="image/png" href="/icon-front.png"></link>
      </Head>
      <Box m={2} overflow="hidden" minWidth="75vw">
        <Carousel cards={cards} />
      </Box>
    </Flex>
  );
};

export default Home;
