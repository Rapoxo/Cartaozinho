import { Box, Tooltip, Text, SimpleGrid } from "@chakra-ui/react";
import type { NextPage } from "next";

const getShadeColor = (color: string) => {
  const rgb = [color.substring(1, 3), color.substring(3, 5), color.substring(5, 7)];
  return `rgb(${rgb.map(c => parseInt(c, 16) * 0.5).join()})`;
};

type CardDetails = {
  textColor?: string;
  secondaryTextColor?: string;
  backgroundColor: string;
  cardHolder: string;
  finalNumbers: string;
  expiration: string;
  cardBrand: string;
};

const Card: NextPage<CardDetails> = ({ textColor, secondaryTextColor, backgroundColor, cardHolder, finalNumbers, expiration, cardBrand }) => {
  return (
    <Box
      rounded="md"
      color="#e0dede"
      minWidth="350px"
      w="400px"
      h="200px"
      textColor={textColor ? textColor : "white"}
      cursor={"grab"}
      userSelect={"none"}
      transition={"transform 250ms ease"}
      _hover={{ transform: "scale(1.05)", transition: "transform 250ms ease" }}
      bgGradient={`linear(to-b,${backgroundColor.toUpperCase()} , ${getShadeColor(backgroundColor.toUpperCase())} )`}
    >
      <SimpleGrid m={3} templateRows="75px 50px 25px">
        <Box>
          <Text fontSize="3xl">{cardBrand}</Text>
        </Box>
        <Box>
          <Text fontSize="xl">
            **** **** ****{" "}
            <Text as="span" color={secondaryTextColor && secondaryTextColor}>
              {finalNumbers}
            </Text>
          </Text>
        </Box>
        {cardHolder.toUpperCase()}
        <Box>
          <Text>
            Vencimento:{" "}
            <Text as="span" color={secondaryTextColor && secondaryTextColor}>
              {expiration}
            </Text>
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Card;
