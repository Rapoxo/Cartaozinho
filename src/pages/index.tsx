import { Box, Flex, Text, Button, useColorMode, Heading } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import type { CardDetails } from "../components/types";
import { useState } from "react";
import Carousel from "../components/Carousel";
import Head from "next/head";

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
    totalAmount: 50,
  },
];

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [currentCard, setCurrentCard] = useState({});
  const currencyFormatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const changeHandler = (newCard: CardDetails) => {
    setCurrentCard(newCard);
  };

  const monthAmount = () => {
    let cardsAmount: number[] = [];
    cards.forEach(card => {
      cardsAmount.push(card.totalAmount);
    });
    return cardsAmount.reduce((a, b) => a + b);
  };

  return (
    <Flex alignItems="center" justifyContent="center">
      <Head>
        <title>Cartãozinho</title>
      </Head>
      <Flex style={{ justifyContent: "center", alignItems: "center" }} flexDirection="column">
        <Heading>
          <Text fontSize="3xl">Total do mês: {currencyFormatter.format(monthAmount())} </Text>
        </Heading>

        <Box m={2} overflow="hidden" minWidth="75vw">
          <Carousel cards={cards} changeHandler={changeHandler} />
        </Box>
        <Button onClick={toggleColorMode}> {colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
