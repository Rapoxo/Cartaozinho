import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Cartãozinho</title>
        <link rel="icon" type="image/png" href="/icon-front.png"></link>
      </Head>
      <Carousel>
        <Card textColor="#e0dede" backgroundColor="#8834ea" cardHolder="fernando silva de arruda " finalNumbers="8923" expiration="03/30" cardBrand="Nubank"></Card>

        <Card textColor="#e0dede" backgroundColor="#d10202" cardHolder="fernando s arruda " finalNumbers="2138" expiration="03/30" cardBrand="Extra"></Card>

        <Card
          textColor="#e0dede"
          secondaryTextColor="#00f349"
          backgroundColor="#4a4848"
          cardHolder="fernando s arruda "
          finalNumbers="8301"
          expiration="03/30"
          cardBrand="Pic-Pay"
        ></Card>
      </Carousel>
    </Box>
  );
};

export default Home;
