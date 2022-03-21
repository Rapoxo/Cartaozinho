import { useMediaQuery, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Icon } from "@chakra-ui/icons";
import { BsPlusCircle } from "react-icons/bs";

const CardTemplate: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [isLongBoi] = useMediaQuery("(max-width: 600px)");

  return (
    <Flex
      className="interactive"
      rounded="md"
      color="#e0dede"
      w={isMobile ? "90vw" : "400px"}
      h={isMobile && !isLongBoi ? "30vh" : "200px"}
      textColor={"white"}
      cursor={"pointer"}
      userSelect={"none"}
      transition={"transform 250ms ease"}
      _hover={{ transform: "scale(1.05)", transition: "transform 250ms ease" }}
      borderColor="#c2cad5"
      bg="transparent"
      borderWidth="thick"
      justifyContent="center"
      alignItems="center"
    >
      <Icon as={BsPlusCircle} h={16} w={16} color="#c2cad5" />
    </Flex>
  );
};

export default CardTemplate;
